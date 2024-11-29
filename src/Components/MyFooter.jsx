import { ListGroup } from "react-bootstrap";

const MyFooter = function () {
	return (
		<ListGroup
			variant="flush"
			className="bg-dark"
            data-bs-theme="dark"
		>
			<ListGroup.Item>Contact Us</ListGroup.Item>
			<ListGroup.Item>Work with Us</ListGroup.Item>
			<ListGroup.Item>Where we are</ListGroup.Item>
			<ListGroup.Item>Legal notes</ListGroup.Item>
		</ListGroup>
	);
};

export default MyFooter;
