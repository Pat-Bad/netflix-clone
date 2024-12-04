import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const params = useParams();

  const url =
    "http://www.omdbapi.com/?i=tt3896198&apikey=d901781a" + params.imdbID; //devo usare i parametri

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getTvShowData();
  }, []);

  const getTvShowData = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((movie) => {
        console.log(movie);
        setMovie(movie.Search);
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };

  const findTheRightMovie = movie.find((movie) => {
    return movie.imdbID.toString() === params.movieId;
  });

  if (findTheRighMovie) {
    setMovie(movie);
  } else {
    console.log("Errore");
  }
};

export default MovieDetails;
