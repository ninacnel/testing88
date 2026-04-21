import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2 className='text-dark my-5'>Página no encontrada</h2>
        <Button variant='warning' onClick={() => navigate("/")}>Volver al inicio</Button>
    </div>
  )
}

export default NotFound