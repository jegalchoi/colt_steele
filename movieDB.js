var movies = [
  {title: "Luck-Key", rating: "4.5 stars", hasWatched: true},
  {title: "Train to Busan", rating: "3.5 stars", hasWatched: true},
  {title: "Mission Impossible", rating: "4.5 stars", hasWatched: false},
  {title: "Coco", rating: "4 stars", hasWatched: true}
];

movies.forEach(function(movie) {
  if (movie.hasWatched === true) {
      console.log("You have seen " + movie.title + " - " + movie.rating)
  } else {
    console.log("You have not seen " + movie.title + " - " + movie.rating)
  }
});
