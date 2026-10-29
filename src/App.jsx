import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    isFavorite: true,
    director: {
      firstName: "Christopher",
      lastName: "Nolan"
    },
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    isFavorite: false,
    director: {
      firstName: "Christopher",
      lastName: "Nolan"
    },
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    isFavorite: true,
    director: {
      firstName: "Christopher",
      lastName: "Nolan"
    },
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 7.7,
    isFavorite: false,

    director: [{
      firstName: "Lana",
      lastName: "Wachowski"
    },
    {
      firstName: "Lilly",
      lastName: "Wachowski"
    }],
    poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 5,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.4,
    isFavorite: true,
    director: {
      firstName: "Denis",
      lastName: "Villeneuve"
    },
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HYYqIoovqLVr7DQU9tevo_bMrzQqJ7LQiVnjyK1x5BUHqrjFB_JDtftcR1Sxo1cPE0fPmg&s=10"
  }
];

movies.push({
  id: 6,
  title: "Shrek",
  year: 2001,
  genre: "Animation",
  rating: 7.9,
  isFavorite: true,
  director: [{
    firstName: "Andrew",
    lastName: "Adamson"
  },
  {
    firstName: "Vicky",
    lastName: "Jenson"
  }],
  poster: "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_.jpg"
});

movies.pop();

const numbers = [1, 2, 3, 4]

const doubledNumbers = numbers.map((number) => {
  return number * 2
})

function add(a, b) {
  return a + b;
}

add(2, 6);

const getDirectorName = (firstName, lastName) => firstName + " " + lastName;
getDirectorName(movies[0].director.firstName, movies[0].director.lastName);

function getTicketPrice(rating) {
  if (rating >= 9) {
    return 15;
  } else if (rating >= 7) {
    return 10;
  } else {
    return 5;
  }
}

console.log(getTicketPrice(5));

const moviesList = [
  { title: "Interstellar", rating: 8.7, genre: "Sci-Fi"},
  { title: "The Dark Knight", rating: 9.0, genre: "Action"},
  { title: "Inception", rating: 8.8, genre: "Sci-Fi" }
];

const goodMovies = moviesList.filter((movie) => {
  return movie.rating >= 8.5;
});

const titles = goodMovies.map((movie) => {
  return movie.title;
});

const sciFiTitles = moviesList
  .filter((movie) => movie.genre === "Sci-Fi" && movie.rating >= 8)
  .map((movie) => movie.title);
console.log(sciFiTitles);

console.log(titles);

function findMovieByTitle(searchText) {
  return moviesList.find((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));
}

console.log(findMovieByTitle("inception"));

const movieTest = {
  id: 1,
  title: "Interstellar",
  rating: 8.7,
  isFavorite: false,
};

function updatedMovieTest(movieTest) {
  return {
    ...movieTest,
    isFavorite: true,
  };
}
console.log(movieTest);
console.log(updatedMovieTest(movieTest));



function App() {
  const topMovies = movies.filter((movie) => movie.rating >= 8);
  console.log(topMovies);

  const selectedMovie = movies.find((movie) => movie.id ===33);

  if (selectedMovie !== undefined) {
    console.log(selectedMovie.title);
  } else {
    console.log("Movie not found");
  }

  const sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi");
  console.log(sciFiMovies);

  const favoriteMovie = movies.find((movie) => movie.id === 2);
  console.log(favoriteMovie);

  const searchText = "in"

  const searchResults = movies.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));
  console.log(searchResults);

  const bestMovies = movies.filter((movie) => movie.rating >= 8.5);

  const {title, rating, director} = movies[1];
  console.log(title, rating, director);

  const genres = [
    "Action",
    "Comedy",
    "Horror",
    "Sci-Fi",
  ];
  const [first, second, , fourth] = genres;
  console.log(first, second, fourth);

  const practiceMovies = [
    "Interstellar",
    "Inception"
  ];
  const updatedMovies = [
    ...practiceMovies,
    "The Dark Knight"
  ];
  console.log(practiceMovies);
  console.log(updatedMovies);

  const newMovie = {
    id: 1,
    title: "Interstellar",
    rating: 8.7,
    isFavorite: false,
  };
  const updatedNewMovie = {
    ...newMovie,
    isFavorite: true,
  };
  console.log(newMovie);
  console.log(updatedNewMovie);

  const topFavoriteMovies = movies
    .filter((movie) => movie.rating >= 8.5 && movie.isFavorite === true)
    .map((movie) => movie.title);
  console.log(topFavoriteMovies);

  return (
    <>
    <Navbar />

      <main className="content">
        <h2>Trending Movies</h2>
        <p>Movies everyone is watching right now!</p>

        <div className="movie-list">
          {bestMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
              rating={movie.rating}
              isFavorite={movie.isFavorite}
              director={getDirectorName(movie.director.firstName, movie.director.lastName)}
              poster={movie.poster}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
