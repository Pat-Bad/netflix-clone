import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class MyMainContent extends Component {
	componentDidMount() {
		this.getMovies();
	}

	state = {
		movies: [],
	};
	getMovies = () => {
		fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=d901781a&s=Harry Potter")
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Errore nel recupero dei dati");
				}
			})

			.then((data) => {
				console.log("Ecco la lista", data);
				this.setState({ movies: data.Search });
			})

			.catch((err) => {
				console.log("Errore!", err);
			});
	};

	render() {
		return (
			<>
				{this.state.movies.map((movie) => {
					return (
						<Col
							xs={12}
							md={4}
							lg={3}
                            className="mb-5"
						>
							<Card key={movie.imdbID}
                            className="CardStyle">
								<Card.Img
									variant="top"
									src={movie.Poster
                                     
                                    }
								/>
								<Card.Body>
									<Card.Title>{movie.Title}</Card.Title>
									<Card.Text>{movie.Year}</Card.Text>
								
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</>
		);
	}
}

export default MyMainContent;