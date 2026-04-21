import { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const MovieItem = ({ title, year, director, duration, isFree, onView }) => {
  const [available, setAvailable] = useState(isFree);
  const navigate = useNavigate();

  const availableHandler = () => {
    setAvailable((prev) => !prev);
  };

  const handleDetails = () => {
    navigate("/movie-info", {
      state: {
        title,
        year,
        director,
        duration,
        isFree: available
      }
    });
  };

  return (
    <Card className="mb-4 shadow-sm border-0" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://i.pinimg.com/1200x/02/5e/51/025e51b9c195053d2a8cc938ec634ce9.jpg"
        style={{ height: '250px', objectFit: 'cover' }}
      />

      <Card.Body>
        <div className="mb-2">
          <Badge bg={available ? "success" : "danger"}>
            {available ? "FREE" : "PREMIUM"}
          </Badge>
        </div>

        <Card.Title>{title}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          {year}
        </Card.Subtitle>

        <Card.Text className="mb-1">
          Dir. <strong>{director}</strong>
        </Card.Text>

        <Card.Text className="mb-3">
          duracion: {(duration / 60).toFixed(2)}h
        </Card.Text>

        <div className="d-flex justify-content-between">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={availableHandler}
          >
            Cambiar disponibilidad
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={onView}
          >
            Reproducir
          </Button>
        </div>
        <Button
          variant="info"
          size="sm"
          onClick={handleDetails}
        >
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;