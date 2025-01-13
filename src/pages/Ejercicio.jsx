import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import "../css/Ejercicio.css";
import EjercicioImg from "../assets/ejerciciominiatura.png";

const ejercicios = [
  { id: 1, nombre: "Apertura Pecho", repeticiones: 13, peso: "10 kg" },
  { id: 2, nombre: "Apertura Pecho", repeticiones: 13, peso: "12 kg" },
  { id: 3, nombre: "Apertura Pecho", repeticiones: 13, peso: "15 kg" },
  { id: 4, nombre: "Apertura Pecho", repeticiones: 13, peso: "15 kg" },
];

const Ejercicio = () => {
  const [tiempoTotal, setTiempoTotal] = useState(240); 
  const [tiempoParcial, setTiempoParcial] = useState(30); 
  const [descanso, setDescanso] = useState(false);
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [enPausa, setEnPausa] = useState(false);
  const [progreso, setProgreso] = useState(0);

  // Manejador de tiempo total
  useEffect(() => {
    if (enPausa || tiempoTotal <= 0) return;
    const intervalo = setInterval(() => setTiempoTotal((prev) => prev - 1), 1000);
    return () => clearInterval(intervalo);
  }, [tiempoTotal, enPausa]);

  // Manejador de tiempo parcial
  useEffect(() => {
    if (enPausa || tiempoParcial <= 0) return;
    const intervalo = setInterval(() => setTiempoParcial((prev) => prev - 1), 1000);
    return () => clearInterval(intervalo);
  }, [tiempoParcial, enPausa]);

  // Cuando el tiempo parcial termina
  useEffect(() => {
    if (tiempoParcial === 0) {
      if (!descanso) {
        marcarEjercicioCompletado();
        setDescanso(true);
        setTiempoParcial(20); // Tiempo de descanso
      } else {
        avanzarEjercicio();
      }
    }
  }, [tiempoParcial, descanso]);

  // Actualizar progreso
  useEffect(() => {
    const porcentaje = ((240 - tiempoTotal) / 240) * 100;
    setProgreso(porcentaje);
    gsap.to(".progreso", {
      width: `${porcentaje}%`,
      backgroundColor: "#ffffff",
      duration: 0.5,
    });
  }, [tiempoTotal]);

  const marcarEjercicioCompletado = () => {
    document
      .querySelectorAll(".circulo")
      [ejercicioActual]?.classList.replace("circulo-gris", "circulo-verde");
  };

  const avanzarEjercicio = () => {
    if (ejercicioActual + 1 < ejercicios.length) {
      setEjercicioActual((prev) => prev + 1);
      setTiempoParcial(30);
      setDescanso(false);
    } else {
      setTiempoTotal(0);
      setTiempoParcial(0);
    }
  };

  const formatearTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, "0")}:${segundosRestantes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="app-entrenamiento">
      <div className="encabezado">
        <div className="encabezado-izquierda">
          <button className="btn boton-accion">
            <FontAwesomeIcon icon={faDumbbell} className="icon" />
            <span>Ejercicios</span>
          </button>
        </div>
        <div className="encabezado-derecha">
          <span>{formatearTiempo(tiempoTotal)}</span>
          <FontAwesomeIcon
            icon={enPausa ? faPlay : faPause}
            className="icon"
            onClick={() => setEnPausa((prev) => !prev)}
          />
        </div>
      </div>

      <div className="barra-progreso">
        <div className="progreso"></div>
      </div>

      <div className="seccion-imagen">
        <img
          src={EjercicioImg}
          alt="Ilustración de una persona haciendo apertura de pecho con mancuernas"
          className="imagen-ejercicio"
        />
      </div>

      <div className="seccion-titulo">
        <h2>{ejercicios[ejercicioActual]?.nombre}</h2>
      </div>

      <div className="detalles-ejercicio">
        {ejercicios.map((ej, index) => (
          <div className="detalle-item" key={ej.id}>
            <div className="izquierda">
              <div className={`circulo ${index < ejercicioActual ? "circulo-verde" : "circulo-gris"}`}>
                {index + 1}
              </div>
              <span>{ej.repeticiones} Reps.</span>
            </div>
            <span>{ej.peso}</span>
          </div>
        ))}
      </div>

      <div className="temporizador-descanso">
        <button
          className="btn boton-accion"
          onClick={() => setTiempoParcial((prev) => prev + 20)}
        >
          +20S
        </button>
        <div className="texto-temporizador">
          <span>{descanso ? "Descanso" : "Ejercicio"}</span>
          <div className="temporizador">{formatearTiempo(tiempoParcial)}</div>
        </div>
        <button className="btn boton-accion" onClick={avanzarEjercicio}>
          Saltar
        </button>
      </div>
    </div>
  );
};

export default Ejercicio;
