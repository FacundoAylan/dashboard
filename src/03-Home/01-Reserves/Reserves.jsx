import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import canchaA from "../../assets/canchaA.jpeg";
import canchaB from "../../assets/canchaB.jpeg";
import canchaC from "../../assets/canchaC.jpeg";
import canchaD from "../../assets/canchaD.jpeg";
import { format } from 'date-fns';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../../firebase";
import "./index.css";

const Reserves = () => {

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const collectionRef = collection(db, "reserves");
        const querySnapshot = await getDocs(collectionRef);
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (error) {
        console.error("Error al recuperar datos de Firestore");
      }
    };
    fetchDataFromFirestore();
  }, []);

  const data1 = data?.map((info) =>{
        const start = info.startTime;
        const dateObj = new Date(start);
        const timeStart = format(dateObj, 'HH:mm');
        const end = info.endTime;
        const date = new Date(end);
        const timeEnd = format(date, 'HH:mm');
        const hora = `${timeStart}-${timeEnd} hs`;
        const fecha = format(date, 'yyyy-MM-dd');
        return {
          paddle: info.paddle.name,
          fecha: fecha,
          hora: hora,
          name: info.userId
        } 
  })
  console.log(data1)

  return (
    <div className="container-reserves">
      <div className="flex">
        <h1>Reservas</h1>
        <div className="container-client">
          <div className="accordion">
            {data1?.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{item.paddle}</h3>
                  <FontAwesomeIcon
                    className="icon-accordion"
                    icon={openItemIndex === index ? faChevronUp : faChevronDown}
                  />
                </div>
                {openItemIndex === index && (
                  <div className="accordion-content">
                    <div>
                      <h2>Usuario</h2>
                      <h3>{item.name}</h3>
                    </div>
                    <div>
                      <h2>Fecha</h2>
                      <h3>{item.fecha}</h3>
                    </div>
                    <div>
                      <h2>Hora</h2>
                      <h3>{item.hora}</h3>
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
