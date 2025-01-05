import json
import requests
from datetime import datetime
import plotly.graph_objects as go
import time

def get_player_ratings(api_url, player_name):
    try:
        response = requests.get(api_url)
    except requests.exceptions.ConnectionError as e:
        print(f"API connection error: {e}")
        return []

    if response.status_code == 200:
        data = json.loads(response.text)
        matches = data.get("matches", [])

        player_ratings = []
        for match in matches:
            started = match.get("started")
            players = match.get("teams", [])

            # Filter matches where the player has a rating
            player_data = [
                player
                for team in players
                for player in team["players"]
                if player["name"] == player_name and player.get("rating") is not None and player.get("ratingDiff") is not None
                ]

            if player_data:
                rating = player_data[0]["rating"]
                rating_diff = player_data[0]["ratingDiff"]
                player_ratings.append({
                    "started_date": datetime.strptime(started, "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%Y-%m-%d %H:%M"),
                    "player_name": player["name"],
                    "rating": rating + rating_diff,
                })

        return player_ratings
    else:
        print(f"API request failed (status code: {response.status_code})")
        return []

def create_and_save_rating_chart(player_name, player_ratings, filename):
    if player_ratings:
        dates = [rating["started_date"] for rating in player_ratings]
        ratings = [rating["rating"] for rating in player_ratings]

        fig = go.Figure(
            data=[
                go.Scatter(
                    x=dates,
                    y=ratings,
                    mode="lines+markers",
                    line=dict(color="#ADFF2F"),
                    marker=dict(color="#ADFF2F"),
                )
            ]
        )

        fig.update_layout(
            margin=dict(l=20, r=20, t=20, b=20),	
            plot_bgcolor="#2C3034",
            paper_bgcolor="#2C3034",
            font=dict(family="Arial", size=10, color="lightgray"),
            xaxis=dict(tickangle=-45, tickfont=dict(size=9)),
        )

        fig.update_xaxes(type="category", autorange="reversed")
        fig.write_image(filename, width=800, height=400, scale=2)
    else:
        print(f"No matches found for player: {player_name}")


players = [
    {"name": "Carpincho", "api_url": "https://data.aoe2companion.com/api/matches?profile_ids=6446904&search=&leaderboard_ids=rm_team&page=1"},
    {"name": "Nanox", "api_url": "https://data.aoe2companion.com/api/matches?profile_ids=439001&search=&leaderboard_ids=rm_team&page=1"},
    {"name": "dicopatito", "api_url": "https://data.aoe2companion.com/api/matches?profile_ids=6237950&search=&leaderboard_ids=rm_team&page=1"},
    {"name": "Sir Monkey", "api_url": "https://data.aoe2companion.com/api/matches?profile_ids=903496&search=&leaderboard_ids=rm_team&page=1"}
]

for player in players:
    player_ratings = get_player_ratings(player["api_url"], player["name"])
    print(f"Retrieved data for {player['name']}")
    filename = f"img/{player['name']}_tgelo.png"
    create_and_save_rating_chart(player["name"], player_ratings, filename)
