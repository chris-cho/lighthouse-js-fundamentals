function range(start, stop, step){
  let range = [];
  for(i = start; i < stop; i += step){
    range.push(i);
  }
  return range;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));