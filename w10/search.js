const search = (array, number) => {
  if (array[Math.floor(array.length / 2)] === number) {
    console.log(Math.floor(array.length / 2));
  } else if (array[Math.floor(array.length / 2)] > number) {
    search(array.slice(0, Math.floor(array.length / 2)), number);
  } else if (array[Math.floor(array.length / 2)] < number) {
    search(array.slice(Math.floor(array.length / 2)), number);
  }
};

search([1,2,3,4,5,6,7,8,9],5);