import requests
from io import BytesIO
import json
import plotly.graph_objects as go

url = "https://raw.githubusercontent.com/athekat/aoe-playersdata/refs/heads/main/player_stats.json"

response = requests.get(url)
data = json.load(BytesIO(response.content))

player_groups = {
    "Dicopato": ["dicopato", "dicopatito", "pato350z"],
    "Sir Monkey": ["sir_monkey"],
    "Nanox": ["nanox"],
    "Carpincho": ["alanthekat", "carpincho", "thexcarpincho"],
}

player_match_data = {}

for player_name, accounts in player_groups.items():
    player_match_data[player_name] = []
    total_matches = 0
    for account in accounts:
        wins = 0
        losses = 0
        for game_type in data[account]:
            wins += data[account][game_type]["win"]
            losses += data[account][game_type]["losses"]
        account_matches = wins + losses
        player_match_data[player_name].append({"account": account, "matches": account_matches})
        total_matches += account_matches
    #Calculate percentage for each account
    for account_data in player_match_data[player_name]:
        account_data["percentage"] = (account_data["matches"] / total_matches) * 100 if total_matches > 0 else 0
        account_data["todoo"] = total_matches

account_colors = {
    "dicopato": "royalblue",
    "pato350z": "darkblue",
    "dicopatito": "lightskyblue",
    "sir_monkey": "darkkhaki",
    "nanox": "mediumseagreen",
    "alanthekat": "mediumorchid",
    "carpincho": "violet",
    "thexcarpincho": "plum",
}

fig = go.Figure()

for player_name, account_data in player_match_data.items():
    bottom = 0
    for account in account_data:
        fig.add_trace(go.Bar(
            x=[player_name],
            y=[account["matches"]],
            name=account["account"],
            marker_color=account_colors.get(account["account"], "gray"),  # Use manual color or default to gray
            # text=f'{account["account"]}',
            textposition='auto',
            base=bottom,
            hoverinfo='text',
            hovertemplate = f"{account['account']}: {account['matches']} matches<br>{account['percentage']:.1f}% of total.<br>Total: {account['todoo']}<extra></extra>"
        ))
        bottom += account["matches"]

fig.update_layout(
    title="Total Ranked Matches Played per Player",
    barmode='stack'
)

fig.write_html('Amountplayed.html')
