import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

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

function getDirectorName(director) {
  if (Array.isArray(director)) {
    return director
    .map(person => person.firstName + " " + person.lastName)
    .join(", ");
  }
  return director.firstName + " " + director.lastName;
}

function App() {
  const [watchedCount, setWatchedCount] = useState(0);
  const [movieList, setMovieList] = useState(movies);
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(false);
  const [search, setSearch] = useState("");

  function toggleWatchlist(movieId) {
    setMovieList((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return { ...movie, isFavorite: !movie.isFavorite };
        }
        return movie;
      })
    );
    console.log(movieId);
  }

  const bestMovies = movieList.filter(movie => {
    if (movie.rating < 7.5) {
      return false;
  }
    if (showWatchlistOnly) {
      return movie.isFavorite;
    }
    return true;
  });

  const filteredMovies = bestMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="content">
        <h2>Trending Movies</h2>
        <p>Movies everyone is watching right now!</p>

        <p>Movies watched: {watchedCount}</p>

        <button onClick={() => setWatchedCount((previous) => previous + 1)}>
          Mark as Watched
        </button>

        <button onClick={() => setWatchedCount(0)}>
          Reset Watched Count
        </button>

        <button onClick={() => setShowWatchlistOnly((previous) => !previous)}>
          {showWatchlistOnly ? "Show all movies" : "Show watchlist only"}
        </button>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />

        <button onClick={() => setSearch("")}>
          Clear Search
        </button>

        <div className="movie-list">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              onToggleWatchlist={toggleWatchlist}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
              rating={movie.rating}
              isFavorite={movie.isFavorite}
              director={getDirectorName(
                movie.director
              )}
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
