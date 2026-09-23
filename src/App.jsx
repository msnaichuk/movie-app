import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="content">
        <h2>Trending Movies</h2>
        <p>Movies everyone is watching right now!</p>

        <div className="movie-list">
          <MovieCard
            title="Shrek"
            year="2001"
            rating="7.9"
          />

          <MovieCard
            title="The Dark Knight"
            year="2008"
            rating="9.0"
          />

          <MovieCard
            title="Inception"
            year="2010"
            rating="8.8"
          />

          <MovieCard
            title="Dune: Part Two"
            year="2024"
            genre="Sci-Fi"
            rating="8.4"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
