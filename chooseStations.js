const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 20, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){ //declaring chooseStation function; receives an array
  let goodStations = []; //we will be returning this

  for(let station of stations){
    if(station[1] >= 20){
      if(station[2] === "school" || "community centre"){
        goodStations.push(station[0]); //adding good stations
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));