import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNavbar = function () {
	return (
		<Navbar
			collapseOnSelect
			expand="md"
			className="bg-dark align-items-start pb-5"
			data-bs-theme="dark"
		>
			<Container fluid>
				<Navbar.Brand href="#home">Netflix</Navbar.Brand>
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
