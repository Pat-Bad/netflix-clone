import { Component } from "react";
import { Card, Col, Alert, Spinner } from "react-bootstrap";

class MyMainContent extends Component {
	componentDidMount() {
		this.getMovies();
	}

	state = {
		movies: [],

		isError: false,

		isLoading: true,
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
				this.setState({ movies: data.Search, isLoading: false});
			})

			.catch((err) => {
				console.log("Errore!", err);
				this.setState({
					isError:true,
					isLoading:false
				})
			});
	};

	render() {
		return (
			<>
				{this.state.isError && (
					<Alert variant="warning">Sorry... Something went wrong 🤔</Alert>
				)}
                {this.state.isLoading && (<Spinner animation="border" role="status" className="mb-3 LittleSage">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)}
				{this.state.movies.map((movie) => {
					return (
						<Col
							xs={12}
							md={4}
							lg={3}
							className="mb-5"
						>
							<Card
								key={movie.imdbID}
								className="h-100 mt-5"
							>
								<Card.Img
									variant="top"
                                    className="h-75"
									src={movie.Poster}
								/>
								<Card.Body className="pt-2 p-0 text-light text-center align-content-center px-2 Pumpkin-latte">
									<Card.Title className="small">
										{movie.Title}
										<br />
										{movie.Year}
									</Card.Title>
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
