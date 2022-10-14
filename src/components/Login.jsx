import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userService'

export const LoginForm = ( submit ) => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const obj = Object.fromEntries(data.entries());

        dispatch( login( {
            user: obj.uname,
            password: obj.pass,
            remember: obj.remember
        } ) )
    };

    return(<Form onSubmit={handleSubmit}>
        <Form.Group className="form-outline mb-4" controlId="formUname">
        <Form.Label>Username:</Form.Label>
        <Form.Control
            required
            type="text"
            size="lg"
            name="uname"
            placeholder="Enter username." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
                required
                type="password"
                size="lg"
                name="pass"
                placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check
                type="checkbox"
                label="Remember me:"
                name="remember" />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit">Submit</Button>
    </Form>);
}