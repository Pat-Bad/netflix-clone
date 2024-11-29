import { ListGroup } from "react-bootstrap";

const MyFooter = function () {
	return (
		<ListGroup
			variant="flush"
			
            data-bs-theme="dark"
		>
			<ListGroup.Item action variant="success">Contact Us</ListGroup.Item>
			<ListGroup.Item action variant="success">Work with Us</ListGroup.Item>
			<ListGroup.Item action variant="success">Where we are</ListGroup.Item>
			<ListGroup.Item action variant="success">Legal notes</ListGroup.Item>
		</ListGroup>
	);
};

export default MyFooter;
