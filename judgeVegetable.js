const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(vegetables, metric) {
  let veggies = vegetables;
  if (metric === "redness"){
    for(let i = 1; i < veggies.length; i ++){
      veggies[i-1].redness > veggies[i].redness ? veggies[i] = veggies[i-1] : undefined ;
    }
  }
  else if (metric === "plumpness"){
    for(let i = 1; i < veggies.length; i ++){
      veggies[i-1].plumpness > veggies[i].plumpness ? veggies[i] = veggies[i-1] : undefined ;
    }
  }
  return veggies[veggies.length-1].submitter;
}

console.log(judgeVegetable(vegetables, metric));