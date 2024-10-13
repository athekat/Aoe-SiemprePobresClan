const dataFile = 'https://raw.githubusercontent.com/athekat/aoe-playersdata/refs/heads/main/player_stats.json';
const lastUpdated = 'https://raw.githubusercontent.com/athekat/aoe-playersdata/refs/heads/main/lastUpdated.txt';
const mostrecentmatch ='https://raw.githubusercontent.com/athekat/aoe-playersdata/refs/heads/main/mostrecentmatch.json';

fetch(dataFile)
  .then(response => response.json())
  .then(data => {
    document.getElementById('patorating1v1').textContent = Math.max(data.dicopato_1["3"].rating, data.dicopato_2["3"].rating);
    document.getElementById('patoratingtg').textContent = data.dicopato_2["4"].rating;
    document.getElementById('patomatches').textContent = data.dicopato_1["4"].win + data.dicopato_1["4"].losses + data.dicopato_1["3"].win + data.dicopato_1["3"].losses + data.dicopato_2["4"].win + data.dicopato_2["4"].losses + data.dicopato_2["3"].win + data.dicopato_2["3"].losses;
    document.getElementById('patomatches1v1').textContent = data.dicopato_1["3"].win + data.dicopato_1["3"].losses + data.dicopato_2["3"].win + data.dicopato_2["3"].losses;
    document.getElementById('patomatchestg').textContent = data.dicopato_1["4"].win + data.dicopato_1["4"].losses + data.dicopato_2["4"].win + data.dicopato_2["4"].losses;
    document.getElementById('nanoxrating1v1').textContent = data.nanox["3"].rating;
    document.getElementById('nanoxratingtg').textContent = data.nanox["4"].rating;
    document.getElementById('nanoxmatches').textContent = data.nanox["4"].win + data.nanox["4"].losses + data.nanox["3"].win + data.nanox["3"].losses;
    document.getElementById('nanoxmatches1v1').textContent = data.nanox["3"].win + data.nanox["3"].losses;
    document.getElementById('nanoxmatchestg').textContent = data.nanox["4"].win + data.nanox["4"].losses;
    document.getElementById('sir_monkeyrating1v1').textContent = data.sir_monkey["3"].rating;
    document.getElementById('sir_monkeyratingtg').textContent = data.sir_monkey["4"].rating;
    document.getElementById('sir_monkeymatches').textContent = data.sir_monkey["4"].win + data.sir_monkey["4"].losses + data.sir_monkey["3"].win + data.sir_monkey["3"].losses;
    document.getElementById('sir_monkeymatches1v1').textContent = data.sir_monkey["3"].win + data.sir_monkey["3"].losses;
    document.getElementById('sir_monkeymatchestg').textContent = data.sir_monkey["4"].win + data.sir_monkey["4"].losses;
    document.getElementById('alanthekatrating1v1').textContent = data.thexcarpincho["3"].rating;
    document.getElementById('alanthekatratingtg').textContent = data.carpincho["4"].rating;
    document.getElementById('alanthekatmatches').textContent = data.alanthekat["4"].win + data.alanthekat["4"].losses + data.alanthekat["3"].win + data.alanthekat["3"].losses + data.carpincho["4"].win + data.carpincho["4"].losses + data.carpincho["3"].win + data.carpincho["3"].losses + data.thexcarpincho["4"].win + data.thexcarpincho["4"].losses + data.thexcarpincho["3"].win + data.thexcarpincho["3"].losses;
    document.getElementById('alanthekatmatches1v1').textContent = data.alanthekat["3"].win + data.alanthekat["3"].losses + data.carpincho["3"].win + data.carpincho["3"].losses + data.thexcarpincho["3"].win + data.thexcarpincho["3"].losses;
    document.getElementById('alanthekatmatchestg').textContent = data.alanthekat["4"].win + data.alanthekat["4"].losses + data.carpincho["4"].win + data.carpincho["4"].losses + data.thexcarpincho["4"].win + data.thexcarpincho["4"].losses;

  })
  
  .catch(error => {
    console.error("Error fetching data:", error);
  });

fetch(lastUpdated)
  .then(response => response.text())
  .then(data => {
    document.getElementById('lastUpdated').textContent = data;
  });

fetch(mostrecentmatch)
  .then(response => response.json())
  .then(data => {
    document.getElementById('lastdicopatito').textContent = data[0]["Dicopatito"];
    // document.getElementById('lastdicopato').textContent = data[1]["Pato"];
    document.getElementById('lastnanox').textContent = data[2]["Nanox"];
    document.getElementById('lastsirmonkey').textContent = data[3]["Sir Monkey"];
    // document.getElementById('lastalanthekat').textContent = data[4]["alanthekat"];
    document.getElementById('lastcarpincho').textContent = data[5]["Carpincho"];
    // document.getElementById('lastthexcarpincho').textContent = data[6]["thexcarpincho"];
  });
