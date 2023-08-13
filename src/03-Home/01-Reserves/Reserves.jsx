import React from 'react';
import canchaA from '../../assets/canchaA.jpeg';
import canchaB from '../../assets/canchaB.jpeg';
import canchaC from '../../assets/canchaC.jpeg';
import canchaD from '../../assets/canchaD.jpeg';
import './index.css';

const Reserves = () => {
  return (
    <div className='container-reserves'>
      <div className='flex'>
        <h1>Reservas por canchas</h1>
        <div className='zonas'>
          <div className='zona'>
            <h2>zona 1</h2>
            <h3>cancha A</h3>
            <h3>Cancha B</h3>
            <h3>Cancha C</h3>
          </div>
          <div className='zona'>
            <h2>zona 2</h2>
            <h3>cancha A</h3>
            <h3>Cancha B</h3>
            <h3>Cancha C</h3>
          </div>
          <div className='zona'>
            <h2>zona 3</h2>
            <h3>cancha A</h3>
            <h3>Cancha B</h3>
            <h3>Cancha C</h3>
          </div>
        </div>
      </div>
      <div className='container-availability'>
        <h1>Disponibilidad</h1>
        <div className='container-card'>
          <div className='card'>
            <div className='image-card'>
              <img src={canchaA} alt="Mi Imagen" className='cancha-a' />
            </div>
            <h4>Cancha A</h4>
            <h4>Av.Santa fe 2896</h4>
            <h4>$8900</h4>
          </div>
          <div className='card'>
            <div className='image-card'>
              <img src={canchaB} alt="Mi Imagen" className='cancha-a' />
            </div>
            <h4>Cancha B</h4>
            <h4>Av.Corrientes 1896</h4>
            <h4>$5900</h4>
          </div>
          <div className='card'>
            <div className='image-card'>
              <img src={canchaC} alt="Mi Imagen" className='cancha-a' />
            </div>
            <h4>Cancha C</h4>
            <h4>Av.9 de julio 896</h4>
            <h4>$18900</h4>
          </div>
          <div className='card'>
            <div className='image-card'>
              <img src={canchaD} alt="Mi Imagen" className='cancha-a' />
            </div>
            <h4>Cancha D</h4>
            <h4>Av. Maipu 14896</h4>
            <h4>$20000</h4>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Reserves;