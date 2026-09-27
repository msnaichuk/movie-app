import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const title = "Interstellar";
const year = 2014;
const genre = "Sci-Fi";
const rating = 8.7;

const title2 = "The Matrix";
const year2 = 1999;
const genre2 = "Sci-Fi";
const rating2 = 8.7;
const isFavorite = false;

let movieTitle = "Interstellar"
  movieTitle = "Inception"

let ratingValue = 8
  ratingValue = 9
  ratingValue = 10

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
        <h2>Trending Movies</h2>
        <p>Movies everyone is watching right now!</p>

        <div className="movie-list">
          <MovieCard
            title={title}
            year={year}
            genre={genre}
            rating={rating}
          />

          <MovieCard
            title="The Dark Knight"
            year={2008}
            genre="Action"
            rating={9.0}
          />

          <MovieCard
            title="Inception"
            year={2010}
            genre="Sci-Fi"
            rating={8.8}
          />

          <MovieCard
            title={title2}
            year={year2}
            genre={genre2}
            rating={rating2}
          />

          <MovieCard
            title="Dune: Part Two"
            year={2024}
            genre="Sci-Fi"
            rating={8.4}
          />

          <p>{movieTitle}</p>
          <p>{ratingValue}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
