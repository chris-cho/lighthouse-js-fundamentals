/*
The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.
*/
const garbage = {
  waste: 0,
  recycling: 0,
  compost: 0,
};

function smartGarbage(trash, bins) {
  garbage.waste = trash === "waste" ? garbage.waste = bins.waste + 1 : bins.waste;
  garbage.recycling = trash === "recycling" ? garbage.recycling = bins.recycling + 1 : bins.recycling;
  garbage.compost = trash === "compost" ? garbage.compost = bins.compost + 1 : bins.compost;
  return garbage;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));