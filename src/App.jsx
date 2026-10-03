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
      firstName: "Lana",
      lastName: "Wachowski"
    }
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    isFavorite: false,
    director: {
      firstName: "Lana",
      lastName: "Wachowski"
    }
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    isFavorite: true,
    director: {
      firstName: "Lana",
      lastName: "Wachowski"
    }
  },
  {
    id: 4,
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
    id: 5,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.4,
    isFavorite: true,
    director: {
      firstName: "Denis",
      lastName: "Villeneuve"
    }
  },
  {
  id: 6,
  title: "The Matrix",
  year: 1999,
  rating: 8.7,
  genre: "Sci-Fi",
  director: {
    firstName: "Lana",
    lastName: "Wachowski"
  }
 }
];

movies.push({
  id: 7,
  title: "Shrek",
  year: 2001,
  genre: "Animation",
  rating: 7.9,
  isFavorite: true,
  director: {
    firstName: "Lana",
    lastName: "Wachowski"
  }
});

movies.pop();

const numbers = [1, 2, 3, 4]

const doubledNumbers = numbers.map((number) => {
  return number * 2
})

function App() {
  console.log(movies.length);
  console.log(movies[0]);
  console.log(movies[5]);
  console.log(movies[0].title);
  console.log(movies[3].title);
  console.log(doubledNumbers);
  return (
    <>
      <Navbar />

      <main className="content">
        <h2>Trending Movies</h2>
        <p>Movies everyone is watching right now!</p>

       <div className="movie-list">
        {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
              rating={movie.rating}
              isFavorite={movie.isFavorite}
              director={movie.director.firstName + " " + movie.director.lastName}
            />
        ))}
      </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
