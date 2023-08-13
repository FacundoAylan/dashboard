import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import canchaA from "../../assets/canchaA.jpeg";
import canchaB from "../../assets/canchaB.jpeg";
import canchaC from "../../assets/canchaC.jpeg";
import canchaD from "../../assets/canchaD.jpeg";
import "./index.css";

const Reserves = () => {
  const accordionData = [
    { title: "Cancha A", content: "Contenido del Item 1." },
    { title: "Cancha B", content: "Contenido del Item 2." },
    { title: "Cancha C", content: "Contenido del Item 3." },
  ];

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <div className="container-reserves">
      <div className="flex">
        <h1>Reservas</h1>
        <div className="container-client">
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{item.title}</h3>
                  <FontAwesomeIcon
                    className="icon-accordion"
                    icon={openItemIndex === index ? faChevronUp : faChevronDown}
                  />
                </div>
                {openItemIndex === index && (
                  <div className="accordion-content">
                    <div>
                      <h2>Usuario</h2>
                      <h3>Miguel</h3>
                      <h3>Pedro</h3>
                      <h3>Juan</h3>
                    </div>
                    <div>
                      <h2>Fecha</h2>
                      <h3>25/08/2023</h3>
                      <h3>26/09/2023</h3>
                      <h3>27/10/2023</h3>
                    </div>
                    <div>
                      <h2>Hora</h2>
                      <h3>12:00 a 15:00 hs</h3>
                      <h3>12:00 a 15:00 hs</h3>
                      <h3>12:00 a 15:00 hs</h3>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-availability">
        <h1>Disponibilidad</h1>
        <div className="container-card">
          <div className="card">
            <div className="image-card">
              <img src={canchaA} alt="Mi Imagen" className="cancha-a" />
            </div>
            <h4>Cancha A</h4>
            <h4>Av.Santa fe 2896</h4>
            <h4>$8900</h4>
          </div>
          <div className="card">
            <div className="image-card">
              <img src={canchaB} alt="Mi Imagen" className="cancha-a" />
            </div>
            <h4>Cancha B</h4>
            <h4>Av.Corrientes 1896</h4>
            <h4>$5900</h4>
          </div>
          <div className="card">
            <div className="image-card">
              <img src={canchaC} alt="Mi Imagen" className="cancha-a" />
            </div>
            <h4>Cancha C</h4>
            <h4>Av.9 de julio 896</h4>
            <h4>$18900</h4>
          </div>
          <div className="card">
            <div className="image-card">
              <img src={canchaD} alt="Mi Imagen" className="cancha-a" />
            </div>
            <h4>Cancha D</h4>
            <h4>Av. Maipu 14896</h4>
            <h4>$20000</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserves;
