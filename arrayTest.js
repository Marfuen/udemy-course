var colors = ["Red", "Green", "Blue", "Orange"];
var numbers = [2, 4, 8, 12];

function printReverse(array){
	for(i = array.length -1; i >= 0; i--) {
	console.log(array[i]);
}}

function isUniform(array){
	for(var i = 0; i < array.length -1; i++) {
		if(array[i] !== array[i+1]) {
			return false;
		}
	}
	return true;
}

function sumArray(array){
	console.log(array.reduce(function(prev, cur) {
		return prev + cur;
	}));
}

function maxValue(array){
	return Math.max.apply(null, array);
}
