import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNavbar = function () {
	return (
		<Navbar
			collapseOnSelect
			expand="md"
			className="Pumpkin-latte align-items-start pb-0 border border-1 border-dark-subtle"
			data-bs-theme="light"
		>
			<Container fluid>
				<Navbar.Brand href="#home"><img
              src="https://i.pinimg.com/originals/db/c1/03/dbc1037d045817a9c46b9ad080fbd3cc.jpg"   //messa da URL, non riesco a visualizzare file caricati in svg o png.......
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#features">Movies</Nav.Link>
						<Nav.Link href="#pricing">Tv Series</Nav.Link>
						<NavDropdown
							title="Genres"
							id="collapsible-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">Anime</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Fantasy</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Documentaries
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Profile</Nav.Link>
						<Nav.Link
							eventKey={2}
							href="#memes"
						>
							Settings
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
