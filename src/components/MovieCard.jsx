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

function MovieCard({ onToggleWatchlist, movie, director, onIncreaseRating, onDelete }) {
  return (
    <div className="movie-card">


      <img src={movie.poster || "https://placehold.co/300x450?text=No+Poster"} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      {movie.genre && <p>{movie.genre}</p>}
      <p>⭐ {movie.rating}</p>
      <p>{getMovieVerdict(movie.rating)}</p>
      <button onClick={() => onToggleWatchlist(movie.id)}>
       {getFavoriteLabel(movie.isFavorite)}
      </button>
      {director && <p>Director: {director}</p>}
      <button onClick={() => onIncreaseRating(movie.id)}>Increase Rating</button>
      <button onClick={() => onDelete(movie.id)}>Delete </button>
    </div>
  );
}

export default MovieCard;
