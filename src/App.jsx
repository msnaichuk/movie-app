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
          <MovieCard />

          <div className="movie-card">
            <h3>The Dark Knight</h3>
            <p>2008</p>
            <p>⭐ 9.0</p>
          </div>

          <div className="movie-card">
            <h3>Inception</h3>
            <p>2010</p>
            <p>⭐ 8.8</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
