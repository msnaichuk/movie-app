function MovieCard(props) {
  return (
    <div className="movie-card">
      
      
      <img src={props.poster} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      {props.genre && <p>{props.genre}</p>}
      <p>⭐ {props.rating}</p>
      <button>Add to Watchlist</button>
      {props.director && <p>Director: {props.director}</p>}
    </div>
  );
}

export default MovieCard;
