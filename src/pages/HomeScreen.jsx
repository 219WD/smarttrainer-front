import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import '../css/HomeScreen.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  const handleMenuCLick = () => navigate('/rutinas', { replace: false});

  return (
    <div className='container'>
      <Container className='containerImage'>
        <Image src='imagenMuestra.png' rounded />
      </Container>
      <Container className='containerMain'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="muestraCarrusel-1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="muestraCarrusel-3.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <div id='item-prevStart'>
                <img src="muestraCarrusel-5.png" className="d-block w-100" alt="..." />
                <Button variant="primary" onClick={handleMenuCLick}>Comience ya...</Button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
    </div>
  )
}

export default HomeScreen