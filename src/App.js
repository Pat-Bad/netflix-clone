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
                  <Row>
                    <Col>
                      <TvShows />
                    </Col>
                  </Row>
                }
              />
              <Route
                path="/MyMainContent"
                elemnent={
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
                path="/movieDetails/:movieId"
                element={<movieDetails />}
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
