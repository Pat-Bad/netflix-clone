import { Form, Button } from "react-bootstrap";

const MyProfile = function () {
	return (
		<Form className="d-flex flex-column flex-wrap align-content-center Sage">
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Please enter your email 😎</Form.Label>
				<Form.Control
					type="email"
					placeholder="Write it here"
                 
				/>
				
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicPassword"
			>
				<Form.Label>Password 🔏</Form.Label>
				<Form.Control
					type="password"
					placeholder="xxxxxxx"
				/>
			</Form.Group>
			<Form.Group
				className="mb-3"
				controlId="formBasicCheckbox"
			>
				<Form.Text className="text-muted">
                🌟 Awesome! Let's get started! 🌟
				</Form.Text>
			</Form.Group>
			<Button
				variant="success"
				type="submit"  //se volessi implementarlo dovrei fare il prevent default. Comunque, va gestito in back-end
			>
				🚀🚀🚀🚀🚀
			</Button>
		</Form>
	);
};

export default MyProfile;
