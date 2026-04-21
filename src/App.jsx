import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Movies from './components/movies/Movies'
import Home from './components/home/Home'
import NotFound from './components/routes/NotFound'
import Login from './components/login/Login'
import Protected from './components/routes/Protected'
import { useState } from 'react'
import MovieDetails from './components/movieDetails/MovieDetails'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn(true)
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onLogin={handleLogIn}/>} />

        <Route path='/movies' element={
          <Protected isSignedIn={loggedIn}>
            <Movies />
          </Protected>
        } />

        <Route path='/movie-info' element={<MovieDetails/>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
