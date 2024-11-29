import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";
import { Container, Row } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<MyNavbar />
			</header>
			<main>
      <Container>
        <Row>
        <MyMainContent />
        </Row>
        </Container>
      </main>
			<footer>
				<MyFooter />
			</footer>
		</div>
	);
}

export default App;
