/*The function returns one of the following strings, based on the value of age:

Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.*/

function whichSchool(age){
	return (age<13 ? "Elementary School":(age>=13&&age<=18 ? "Secondary School":"Lighthouse Labs")); 
	}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
