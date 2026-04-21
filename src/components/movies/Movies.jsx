import { useRef, useState } from 'react'
import MovieItem from '../movieItem/MovieItem'
import { Container, Row, Col, Button } from 'react-bootstrap';
import MovieForm from './MovieForm';
import { allMovies } from '../data/movies';

const Movies = () => {
  const [moviesList, setMoviesList] = useState(allMovies);
  const [views, setViews] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  const [text, setText] = useState('');

  const topRef = useRef(null);

  const handleScrollTop = () => {
    topRef.current?.scrollIntoView();
  };

  const viewsHandler = () => {
    setViews((prevState) => prevState + 1);
  };

  const showCounterHandler = () => {
    setShowCounter((prevState) => !prevState);
  };

  const handleAddMovie = (newItem) => {
    const itemId = {
      movieId: Math.random(),
      ...newItem
    }
    setMoviesList((prevState) => [itemId, ...prevState])
  };

  return (
    <Container ref={topRef}>
      <input  value={text} onChange={(event) => setText(event.target.value)} />
      <h1 className="mb-3 text-dark">{text}</h1>
      <button className='btn btn-warning' onClick={() => setText('')}>Limpiar Estado</button>

      {showCounter && <h3>Cantidad de vistas: {views}</h3>}

      <Button
        variant="secondary"
        className="mb-4"
        onClick={showCounterHandler}
      >
        Mostrar contador
      </Button>

      <Col lg={4}>
        <h5>Agregar pelicula</h5>
        <MovieForm onAddMovie={handleAddMovie} />
      </Col>

      <Row>
        {moviesList.map((movie) => (
          <Col
            key={movie.movieId}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <MovieItem
              title={movie.title}
              year={movie.year}
              director={movie.director}
              duration={movie.duration}
              isFree={movie.isFree}
              onView={viewsHandler}
            />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center my-4">
        <Button variant="primary" onClick={handleScrollTop}>
          Volver arriba
        </Button>
      </div>
    </Container>
  );
};

export default Movies;