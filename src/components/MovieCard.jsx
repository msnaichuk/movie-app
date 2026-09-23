function MovieCard(props) {
  return (
    <div className="movie-card">
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      {props.genre && <p>{props.genre}</p>}
      <p>⭐ {props.rating}</p>
      <button>Add to Watchlist</button>
    </div>
  );
}

export default MovieCard;
