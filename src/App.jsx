import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const movies = [
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    isFavorite: true
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    isFavorite: false

  },
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    isFavorite: true

  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    isFavorite: false,

    director: {
      firstName: "Lana",
      lastName: "Wachowski"
    }
  },
  {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.4,
    isFavorite: true
  }
];

movies.push({
  title: "Shrek",
  year: 2001,
  genre: "Animation",
  rating: 7.9,
  isFavorite: true
});

movies.pop();

function App() {
  console.log(movies.length);
  console.log(movies[0]);
  console.log(movies[5]);
  console.log(movies[0].title);
  console.log(movies[3].title);

  return (
    <>
      <Navbar />

      <main className="content">
        <h2>Trending Movies</h2>
        <p>Movies everyone is watching right now!</p>

        <div className="movie-list">
          <MovieCard
            title={movies[0].title}
            year={movies[0].year}
            genre={movies[0].genre}
            rating={movies[0].rating}
            isFavorite={movies[0].isFavorite}
          />

          <MovieCard
            title={movies[1].title}
            year={movies[1].year}
            genre={movies[1].genre}
            rating={movies[1].rating}
            isFavorite={movies[1].isFavorite}
          />

          <MovieCard
            title={movies[2].title}
            year={movies[2].year}
            genre={movies[2].genre}
            rating={movies[2].rating}
            isFavorite={movies[2].isFavorite}
          />

          <MovieCard
            title={movies[3].title}
            year={movies[3].year}
            genre={movies[3].genre}
            rating={movies[3].rating}
            isFavorite={movies[3].isFavorite}
            director={
              movies[3].director.firstName +
              " " +
              movies[3].director.lastName
            }
          />

          <MovieCard
            title={movies[4].title}
            year={movies[4].year}
            genre={movies[4].genre}
            rating={movies[4].rating}
            isFavorite={movies[4].isFavorite}
          />

        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
