import json
import requests
import plotly.graph_objects as go
import numpy as np

# Step 1: Load JSON data from a URL
url = 'https://raw.githubusercontent.com/SiegeEngineers/aoe2-de-rating-charts/refs/heads/master/ratings/leaderboard3.json'  # Replace with your actual URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    json_data = response.json()  # Parse the JSON response
else:
    print(f'Error fetching data: {response.status_code}')

data = json_data['data']

ratings = [entry['3'] for entry in data.values() if entry['3'] >= 0]

highlighted_players = ["dicopatito", "Nanox", "Carpincho", "dicopato"]  # Add more player names as needed
highlighted_elos = {} 
for player in highlighted_players:
    for entry in data.values():
        if entry['N'] == player and entry['3'] >= 0:
            if player == "Carpincho":
                # Filter Carpincho with ELO less than 2000
                if entry['3'] < 2000:
                    highlighted_elos[player] = entry['3']
            else:
                highlighted_elos[player] = entry['3']

bin_size = 10
elo_min = min(ratings)
elo_max = max(ratings)
bins = np.arange(elo_min, elo_max + bin_size, bin_size)

colors = ['green' for _ in bins[:-1]]  # Default color for all bins

for elo in highlighted_elos.values():
    for bin in bins[:-1]:
        if bin <= elo < bin + bin_size:
            colors[bins[:-1].tolist().index(bin)] = 'blue'

hist, edges = np.histogram(ratings, bins=bins)  

percentiles = {}
for player, elo in highlighted_elos.items():
    percentiles[player] = np.sum(np.array(ratings) < elo) / len(ratings) * 100


# Create the figure
fig = go.Figure(data=[go.Histogram(
    x=ratings,
    xbins=dict(start=elo_min, end=elo_max, size=bin_size),
    marker=dict(color=colors),  # Custom colors for bins
    autobinx=False,
    hovertemplate='<b>ELO Rating:</b> %{x}<br>' + 
                  '<b>Count:</b> %{y}<br>' +
                  '<extra></extra>'  # Removes the default hover info

)])

max_y = max(hist) if len(hist) > 0 else 0

for player, elo in highlighted_elos.items():
    bin_index = (elo - elo_min) // bin_size
    bin_y_value = hist[bin_index] if bin_index < len(hist) else 0
    
    fig.add_annotation(
        x=elo,
        y=bin_y_value,
        text=f"{player}: {elo} ({percentiles[player]:.1f}%)",
        showarrow=True,
        arrowhead=2,
        ax=+50,
        ay=-70,
        font=dict(size=12, color="blue"),
        bgcolor="white",
        bordercolor="blue"
    )

# Title and labels
fig.update_layout(
    title='1v1 Ranked',
    title_x=0.5,
    xaxis_title='ELO Rating',
    yaxis_title='Number of Players',
    showlegend=False,
    paper_bgcolor='white',
    plot_bgcolor='white', 

)

fig.write_html('1v1chart.html')
