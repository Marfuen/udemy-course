console.log("First Loop running");

for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("Second loop running");

for (var i = 10; i < 40; i += 2) {
	console.log(i);
}

console.log("Third Loop running");

for (var i = 300; i < 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

console.log("Fourth loop running");

for (var i = 5; i < 51; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}

