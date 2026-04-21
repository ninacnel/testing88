import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const BeerItem = ({ beer, dollar }) => {
    const [stock, setStock] = useState(beer.available)
    return (
        <Card style={{ width: '18rem' }} className="mb-3 shadow-sm">
            <Card.Body>
                <Card.Title>{beer.beerName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {beer.beerStyle}
                </Card.Subtitle>

                <Card.Text>
                    <strong>Price USD:</strong> ${beer.price} <br />
                    <strong>Price ARS:</strong> ${beer.price * dollar} <br />
                    <strong>Status:</strong>{' '}
                    {stock ? 'Disponible' : 'No disponible'}
                </Card.Text>

                <Button
                    variant='info'
                    onClick={() => setStock((prevState) => !prevState)}
                >
                    Cambiar disponibilidad
                </Button>
            </Card.Body>
        </Card>
    );
};

export default BeerItem;