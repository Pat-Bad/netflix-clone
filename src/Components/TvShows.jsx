import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const url =
  "http://www.omdbapi.com/?i=tt3896198&apikey=d901781a&s=Harry Potter";

const TvShows = () => {
  const [tvShow, setTvShow] = useState([]);

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
      .then((tvShow) => {
        console.log(tvShow);
        setTvShow(tvShow.Search);
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };

  return (
    <div>
      <h2>Tv Shows!</h2>
      {tvShow.map((tvShow) => {
        return (
          <Card key={tvShow.imdbID}>
            <Card.Img
              variant="top"
              src={tvShow.Poster}
            />
            <Card.Body>
              <Card.Title>{tvShow.Title}</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default TvShows;
