import { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const movieInfo = {
  duration: 60,
  cast: [],
  country: "USA",
  isFree: true
};

const initialErrors = {
    title: false,
    director: false,
    year: false,
};

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');

  const [errors, setErrors] = useState(initialErrors);

  const titleRef = useRef(null);
  const directorRef = useRef(null);
  const yearRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setErrors(prev => ({ ...prev, title: false }));
  };

  const handleDirectorChange = (e) => {
    setDirector(e.target.value);
    setErrors(prev => ({ ...prev, director: false }));
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setErrors(prev => ({ ...prev, year: false }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // validar
    if (!title.trim()){
      setErrors((prevState) => ({ ...prevState, title: true }));
      titleRef.current.focus();
      return;
    }

    if (!director.trim()){
      setErrors((prevState) => ({ ...prevState, director: true }));
      directorRef.current.focus();
      return;
    }

    if (!year.trim()){
      setErrors((prevState) => ({ ...prevState, year: true }));
      yearRef.current.focus();
      return;
    }

    const newMovie = {
      title,
      director,
      year,
      ...movieInfo,
    };

    onAddMovie(newMovie);

    setTitle('');
    setDirector('');
    setYear('');

    titleRef.current.focus();
  };

  return (
    <Form onSubmit={handleFormSubmit} className='bg-light rounded p-3'>
      
      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={handleTitleChange}
          ref={titleRef}
          isInvalid={errors.title}
        />
        <Form.Control.Feedback type='invalid'>
            Titulo es un campo requerido
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Director</Form.Label>
        <Form.Control
          type="text"
          value={director}
          onChange={handleDirectorChange}
          ref={directorRef}
          isInvalid={errors.director}
        />
        <Form.Control.Feedback type='invalid'>
            Director es un campo requerido
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Año</Form.Label>
        <Form.Control
          type="number"
          value={year}
          onChange={handleYearChange}
          ref={yearRef}
          isInvalid={errors.year}
        />
        <Form.Control.Feedback type='invalid'>
            Año es un campo requerido
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear película
      </Button>
    </Form>
  );
};

export default MovieForm;