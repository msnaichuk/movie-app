import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const movie1 = {
  title: "Interstellar",
  year: 2014,
  genre: "Sci-Fi",
  rating: 8.7
  };

const movie2 = {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0
  };

const movie3 = {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8
  };

const movie4 = {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    isFavorite: false,

    director: {
      firstName: "Lana",
      lastName: "Wachowski"
    }
  };

const movie5 = {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.4
  };

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
        <h2>Trending Movies</h2>
        <p>Movies everyone is watching right now!</p>

        <div className="movie-list">
          <MovieCard
            title={movie1.title}
            year={movie1.year}
            genre={movie1.genre}
            rating={movie1.rating}
          />

          <MovieCard
            title={movie2.title}
            year={movie2.year}
            genre={movie2.genre}
            rating={movie2.rating}
          />

          <MovieCard
            title={movie3.title}
            year={movie3.year}
            genre={movie3.genre}
            rating={movie3.rating}
          />

          <MovieCard
            title={movie4.title}
            year={movie4.year}
            genre={movie4.genre}
            rating={movie4.rating}
            isFavorite={movie4.isFavorite}

            director={movie4.director.firstName + " " + movie4.director.lastName}
          />

          <MovieCard
            title={movie5.title}
            year={movie5.year}
            genre={movie5.genre}
            rating={movie5.rating}
          />

        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
