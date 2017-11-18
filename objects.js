var movies = [
	{
		name: "Avengers",
		rating: 5 + " Stars",
		hasSeen: true
  },
	{
		name: "The Incredibles",
		rating: 5 + " Stars",
		hasSeen: false
  },
	{
		name: "Titanic",
		rating: 4 + " Stars",
		hasSeen: true
  },
	{
		name: "Les Miserables",
		rating: 3.5 + " Stars",
		hasSeen: false
  }
];



for(i = 0; i < movies.length; i++) {
	if(movies[i].hasSeen) {
		console.log("You have watched " + movies[i].name + " - " + movies[i].rating)
	} else {
		console.log("You have not seen " + movies[i].name + " - " + movies[i].rating)
	}
}







//movies.forEach(function() {
//	if(movies.hasSeen) {
//		console.log("You have watched " + movies.name + " - " + movies.rating)
//	} else {
//		console.log("You have not seen " + movies.name + " - " + movies.rating)
//	}
//});
