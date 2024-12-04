import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";
import { Container, Row, Col } from "react-bootstrap";
import MyAnime from "./Components/MyAnime";
import MySeries from "./Components/MySeries";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./Components/TvShows";
import MovieDetails from "./Components/movieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header)">
          <MyNavbar />
        </header>
        <main className="Sage">
          <Container>
            <Routes>
              <Route
                path="/TvShows"
                element={
                  <Row className="d-flex flex-wrap">
                    <Col
                      xs={12}
                      md={4}
                      lg={3}
                      className="d-flex flex-wrap"
                    >
                      <TvShows />
                    </Col>
                  </Row>
                }
              />

              <Route
                path="/"
                element={
                  <>
                    <Row>
                      <MyMainContent />
                    </Row>
                    <Row>
                      <MyAnime />
                    </Row>
                  </>
                }
              />
              <Route
                path="/MySeries"
                element={
                  <Row>
                    <MySeries />
                  </Row>
                }
              />
              <Route
                path="/MovieDetails/:movieId"
                element={
                  <Row>
                    <MovieDetails />
                  </Row>
                }
              />
            </Routes>
          </Container>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
