import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();

  const url =
    "http://www.omdbapi.com/?i=tt3896198&apikey=d901781a&i=" + params.imdbID; //devo usare i parametri

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieData();
  }, [params.imdbID]);

  const getMovieData = () => {
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
        setMovie(movie);
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };

  if (movie) {
    return (
      <div>
        <Card>
          <Card.Img
            variant="top"
            src="holder.js/100px180"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default MovieDetails;
