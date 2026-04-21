import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2 className='text-dark my-5'>Home page</h2>
        <Button onClick={() => navigate("/movies")}>Lista de Peliculas</Button>
        <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  )
}

export default Home