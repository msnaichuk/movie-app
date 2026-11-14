import { useState } from "react";

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("Sci-Fi");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !title.trim() ||
      year.trim() === "" ||
      rating.trim() === "" ||
      !Number.isInteger(Number(year)) ||
      Number(year) < 1888 ||
      Number(year) > 2100 ||
      Number(rating) < 0 ||
      Number(rating) > 10
    ) {
      alert("Please enter a valid title, year and rating.")
    }
    const newMovie = {
      id: crypto.randomUUID(),
      title: title.trim(),
      year: Number(year),
      genre: genre,
      rating: Number(rating),
      isFavorite: false,
      director: "Unknown",
      poster: ""
    };
    onAddMovie(newMovie);

    setTitle("");
    setYear("");
    setGenre("Sci-Fi");
    setRating("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <button type="submit">
        Add Movie
      </button>
    </form>
  );
}

export default MovieForm;
