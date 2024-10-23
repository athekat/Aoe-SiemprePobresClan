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
    document.getElementById('alanthekatrating1v1').textContent = data.carpincho["3"].rating;
    document.getElementById('alanthekatratingtg').textContent = data.carpincho["4"].rating;
    document.getElementById('alanthekatmatches').textContent = data.alanthekat["4"].win + data.alanthekat["4"].losses + data.alanthekat["3"].win + data.alanthekat["3"].losses + data.carpincho["4"].win + data.carpincho["4"].losses + data.carpincho["3"].win + data.carpincho["3"].losses + data.thexcarpincho["4"].win + data.thexcarpincho["4"].losses + data.thexcarpincho["3"].win + data.thexcarpincho["3"].losses;
    document.getElementById('alanthekatmatches1v1').textContent = data.alanthekat["3"].win + data.alanthekat["3"].losses + data.carpincho["3"].win + data.carpincho["3"].losses + data.thexcarpincho["3"].win + data.thexcarpincho["3"].losses;
    document.getElementById('alanthekatmatchestg').textContent = data.alanthekat["4"].win + data.alanthekat["4"].losses + data.carpincho["4"].win + data.carpincho["4"].losses + data.thexcarpincho["4"].win + data.thexcarpincho["4"].losses;
    document.getElementById('emorating1v1').textContent = data.emo["3"].rating;
    document.getElementById('emoratingtg').textContent = data.emo["4"].rating;
    document.getElementById('emomatches').textContent = data.emo["4"].win + data.emo["4"].losses + data.emo["3"].win + data.emo["3"].losses;
    document.getElementById('emomatches1v1').textContent = data.emo["3"].win + data.emo["3"].losses;
    document.getElementById('emomatchestg').textContent = data.emo["4"].win + data.emo["4"].losses;

   
    var datescarpincho=[]
    datescarpincho.push(moment(data.carpincho["4"].lastmatchdate, 'DD MM YYYY').toDate());
    datescarpincho.push(moment(data.carpincho["3"].lastmatchdate, 'DD MM YYYY').toDate());
    var maxDatecarpincho=new Date(Math.max.apply(null,datescarpincho)); 
    var formattedDatecarpincho = moment(maxDatecarpincho).format('DD/MM/YYYY');
    document.getElementById('alanthekatrecentmatchdate').textContent = formattedDatecarpincho;

    var datesdicopatito=[]
    datesdicopatito.push(moment(data.dicopato_2["4"].lastmatchdate, 'DD MM YYYY').toDate());
    datesdicopatito.push(moment(data.dicopato_2["3"].lastmatchdate, 'DD MM YYYY').toDate());
    var maxDatedicopatito=new Date(Math.max.apply(null,datesdicopatito)); 
    var formattedDatedicopatito = moment(maxDatedicopatito).format('DD/MM/YYYY');
    document.getElementById('dicopatitorecentmatchdate').textContent = formattedDatedicopatito;

    var datessir_monkey=[]
    datessir_monkey.push(moment(data.sir_monkey["4"].lastmatchdate, 'DD MM YYYY').toDate());
    datessir_monkey.push(moment(data.sir_monkey["3"].lastmatchdate, 'DD MM YYYY').toDate());
    var maxDatesir_monkey=new Date(Math.max.apply(null,datessir_monkey)); 
    var formattedDatesir_monkey =moment(maxDatesir_monkey).format('DD/MM/YYYY');
    document.getElementById('sirmonkeyrecentmatchdate').textContent = formattedDatesir_monkey;

    var datesnanox=[]
    datesnanox.push(moment(data.nanox["4"].lastmatchdate, 'DD MM YYYY').toDate());
    datesnanox.push(moment(data.nanox["3"].lastmatchdate, 'DD MM YYYY').toDate());
    var maxDatenanox=new Date(Math.max.apply(null,datesnanox)); 
    var formattedDatenanox = moment(maxDatenanox).format('DD/MM/YYYY');
    document.getElementById('nanoxrecentmatchdate').textContent = formattedDatenanox;

    var datesemo=[]
    datesemo.push(moment(data.emo["4"].lastmatchdate, 'DD MM YYYY').toDate());
    datesemo.push(moment(data.emo["3"].lastmatchdate, 'DD MM YYYY').toDate());
    var maxDateemo=new Date(Math.max.apply(null,datesemo)); 
    var formattedDateemo = moment(maxDateemo).format('DD/MM/YYYY');
    document.getElementById('emorecentmatchdate').textContent = formattedDateemo;

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
