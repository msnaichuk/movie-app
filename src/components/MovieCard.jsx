function getMovieVerdict(rating) {
  if (rating >= 9) {
    return "Must watch";
  } else if (rating >= 7) {
    return "Good to watch";
  } else {
    return "Low rated";
  }
}

function getFavoriteLabel(isFavorite) {
  return isFavorite ? "❤️ Favorite" : "♡ Not Favorite";
}

function MovieCard({ poster, title, year, genre, rating, isFavorite, director }) {
  return (
    <div className="movie-card">


      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
      {genre && <p>{genre}</p>}
      <p>⭐ {rating}</p>
      <p>{getMovieVerdict(rating)}</p>
      <button>Add to Watchlist</button>
      <p>{getFavoriteLabel(isFavorite)}</p>
      {director && <p>Director: {director}</p>}
    </div>
  );
}

export default MovieCard;
