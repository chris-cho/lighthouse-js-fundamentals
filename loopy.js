for(let i = 100; i <= 200; i++) //init for loop
{
  console.log((i % 3 === 0 ? (i % 4 === 0 ? "LoopyLighthouse" : "Loopy") : (i % 4 === 0 ? "Lighthouse" : i))); //print 100~200
}