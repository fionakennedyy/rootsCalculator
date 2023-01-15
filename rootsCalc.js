const a= document.getElementById('a');
const b= document.getElementById('b');
const c= document.getElementById('c');
const solution= document.getElementById('solution');

function check() {
	const aVal = a.value;
	const bVal = b.value;
	const cVal = c.value;
	console.log(aVal + " " + bVal + " " + cVal)
	if((aVal == 0) || (aVal > 99) || (aVal < -99))
	{
		alert('Invalid entry for a. Must not be a non-zero integer between -99 and +99.');
	}
	if((bVal > 99) || (bVal < -99))
	{
		alert('Invalid entry for b. Must not be an integer between -99 and +99.');
	}
	if((cVal > 99) || (cVal < -99))
	{
		alert('Invalid entry for c. Must not be an integer between -99 and +99.');
	}
	calculate();
}

function calculate() {
	const aVal = a.value;
	const bVal = b.value;
	const cVal = c.value;
	var discriminant = bVal * bVal - 4 * aVal * cVal;
	console.log(discriminant);
	if (discriminant > 0) {
		var root1 = (-bVal + Math.sqrt(discriminant)) / (2 * aVal);
		var root2 = (-bVal - Math.sqrt(discriminant)) / (2 * aVal);
		solution.innerHTML = "Solution: x = " + root1 + ", x = " + root2;
	}
	else
	{
		solution.innerHTML = "Solution: x's roots are imaginary";
	}
	
}