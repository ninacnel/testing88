import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const beerStyles = ['APA', 'IPA', 'Red', 'Stout', 'Porter', 'Lager'];

const NewBeer = ({ onAddBeer }) => {
    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [price, setPrice] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newBeer = {
            beerName: name,
            beerStyle: style,
            price: price,
            available: isAvailable,
        };

        onAddBeer(newBeer);

        setName('');
        setPrice('');
    }

    return (
        <Form onSubmit={handleFormSubmit} className='w-25 bg-secondary rounded p-3'>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Estilo</Form.Label>
                <Form.Select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                >
                    {beerStyles.map((x, i) => (
                        <option key={i} value={x}>{x}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Disponible"
                    checked={isAvailable}
                    onChange={(e) => setIsAvailable(e.target.checked)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar
            </Button>
        </Form>
    );
}

export default NewBeer