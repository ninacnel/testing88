import { Button, Card, Container, Badge } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";

const MovieDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card className="shadow-lg border-0" style={{ width: "28rem" }}>

                <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/1200x/02/5e/51/025e51b9c195053d2a8cc938ec634ce9.jpg"
                    style={{ height: "350px", objectFit: "cover" }}
                />

                <Card.Body>
                    <div className="mb-3 text-center">
                        <Badge bg={state.isFree ? "success" : "danger"}>
                            {state.isFree ? "FREE" : "PREMIUM"}
                        </Badge>
                    </div>

                    <Card.Title className="text-center fs-3">
                        {state.title}
                    </Card.Title>

                    <Card.Subtitle className="mb-3 text-muted text-center">
                        {state.year}
                    </Card.Subtitle>

                    <Card.Text>
                        <strong>Director:</strong> {state.director}
                    </Card.Text>

                    <Card.Text>
                        <strong>Duración:</strong> {(state.duration / 60).toFixed(2)}h
                    </Card.Text>

                    <div className="d-flex justify-content-between mt-4">
                        <Button variant="secondary" onClick={() => navigate(-1)}>
                            Volver
                        </Button>

                        <Button variant="primary">
                            Reproducir
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MovieDetails;
