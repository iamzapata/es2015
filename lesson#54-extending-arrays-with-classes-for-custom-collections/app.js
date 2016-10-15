class Collection extends Array {}

class MovieCollection extends Collection {

	constructor(collectionName, ...movies) {
		super(...movies);
		this.validateInput(movies);
		this.name = collectionName;
	}

	validateInput(movies) {
		for(const movie of movies) {
			if(movie.stars > 5) {
				throw Error("Movie rating should be a value from 1 to 5, ");
			}

		}
	}

	add(movie) {
		this.push(movie);
	}

	starRating(rating) {
		return "⭐️".repeat(rating);
	}

	list() {
		return this.map(movie => {
			return {Title: movie.name, Rating: this.starRating(movie.stars)};
		});
	}

	topRated(limit = 3) {
		return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
	}

}

const movies = new MovieCollection('Andres\'s Favorite Movies', 
	{ name: 'Star Wars', stars: 4 },
	{ name: 'Lord Of The Rings', stars: 5},
	{ name: 'The Hobbit', stars: 3},
	{ name: 'Batman', stars: 4},
	{ name: 'Iron Man', stars: 4}
);

movies.add({ name: 'Interstellar', stars: 5});
movies.add({ name: 'The Martian', stars: 4});