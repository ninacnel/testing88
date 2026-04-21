import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', formData.email);
        console.log('Password:', formData.password);
        onLogin();
        navigate('/movies');
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form className="w-50 p-5 bg-info rounded" onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ingresá tu email"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingresá tu contraseña"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Iniciar sesión
                </Button>
            </Form>
        </div>
    );
};

export default Login;