import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDumbbell, 
  faSquare 
} from "@fortawesome/free-solid-svg-icons";
import "../css/Ejercicio.css"; 
import EjercicioImg from "../assets/ejerciciominiatura.png";

const Ejercicio = () => {
  return (
    <div className="app-entrenamiento">
      {/* Encabezado */}
      <div className="encabezado">
        <div className="encabezado-izquierda">
          <button className="btn boton-accion">
            <FontAwesomeIcon icon={faDumbbell} className="icon" />
            <span>Ejercicios</span>
          </button>
        </div>
        <div className="encabezado-derecha">
          <span>04:00</span>
          <FontAwesomeIcon icon={faSquare} className="icon" />
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="barra-progreso">
        <div className="progreso"></div>
      </div>

      {/* Sección de imagen */}
      <div className="seccion-imagen">
        <img
          src={EjercicioImg}
          alt="Ilustración de una persona haciendo apertura de pecho con mancuernas"
          className="imagen-ejercicio"
        />
      </div>

      {/* Título */}
      <div className="seccion-titulo">
        <h2>Aperturas de Pecho con Mancuernas</h2>
      </div>

      {/* Detalles del ejercicio */}
      <div className="detalles-ejercicio">
        <div className="detalle-item">
          <div className="izquierda">
            <div className="circulo circulo-verde">1</div>
            <span>13 Reps.</span>
          </div>
          <span>10 kg</span>
        </div>
        <div className="detalle-item">
          <div className="izquierda">
            <div className="circulo circulo-verde">2</div>
            <span>13 Reps.</span>
          </div>
          <span>12 kg</span>
        </div>
        <div className="detalle-item">
          <div className="izquierda">
            <div className="circulo circulo-gris">3</div>
            <span>13 Reps.</span>
          </div>
          <span>15 kg</span>
        </div>
        <div className="detalle-item">
          <div className="izquierda">
            <div className="circulo circulo-gris">4</div>
            <span>13 Reps.</span>
          </div>
          <span>15 kg</span>
        </div>
      </div>

      {/* Temporizador de descanso */}
      <div className="temporizador-descanso">
        <button className="btn boton-accion">+20S</button>
        <div className="texto-temporizador">
          <span>Descanso</span>
          <div className="temporizador">01:26</div>
        </div>
        <button className="btn boton-accion">Saltar</button>
      </div>
    </div>
  );
};

export default Ejercicio;
