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

function MovieCard(props) {
  return (
    <div className="movie-card">
      
      
      <img src={props.poster} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      {props.genre && <p>{props.genre}</p>}
      <p>⭐ {props.rating}</p>
      <p>{getMovieVerdict(props.rating)}</p>
      <button>Add to Watchlist</button>
      <p>{getFavoriteLabel(props.isFavorite)}</p>
      {props.director && <p>Director: {props.director}</p>}
    </div>
  );
}

export default MovieCard;
