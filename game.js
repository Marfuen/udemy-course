var num1 = -10;
var num2 = 10;
var num3 = 301;
var num4 = 5;

while (num1 <= 19) {
	console.log(num1);
	num1++
}

while (num2 <= 40) {
	console.log(num2);
	num2 += 2
}

while (num3 <= 333) {
	console.log(num3)
	num3 += 2
}

while (num4 <= 50) {
	if (num4 % 5 === 0 && num4 % 3 === 0) {
		console.log(num4);
	}
	num4++
}
