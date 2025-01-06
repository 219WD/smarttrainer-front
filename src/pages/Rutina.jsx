import React, { useState } from 'react';
import './Rutina.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faHome,
    faDumbbell,
    faCalendarDay,
    faExclamationCircle,
    faHourglassHalf,
    faStopwatch,
    faSave
} from '@fortawesome/free-solid-svg-icons';

function RutinaPrincipal() {
    // Estados para almacenar las selecciones del usuario
    const [trainingType, setTrainingType] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [trainingDuration, setTrainingDuration] = useState(null);
    const [warmUp, setWarmUp] = useState(false);

    // Manejar selección de tipo de entrenamiento
    const handleTrainingType = (type) => {
        setTrainingType(type);
    };

    // Manejar selección de días de entrenamiento
    const toggleDaySelection = (day) => {
        setSelectedDays((prevDays) =>
            prevDays.includes(day)
                ? prevDays.filter((d) => d !== day)
                : [...prevDays, day]
        );
    };

    // Manejar duración del entrenamiento
    const handleDurationSelection = (duration) => {
        setTrainingDuration(duration);
    };

    // Manejar calentamiento
    const toggleWarmUp = () => {
        setWarmUp((prev) => !prev);
    };

    // Guardar datos seleccionados
    const handleSave = () => {
        const rutinaData = {
            trainingType,
            selectedDays,
            trainingDuration,
            warmUp,
        };
        console.log('Datos guardados:', rutinaData);
        alert('Rutina guardada con éxito');
    };

    return (
        <div className="container rutinaUser">
            <div className="rutinaContainer">
                <h1 className="title">RUTINA PRINCIPAL</h1>
                <p className="description">
                    El entrenamiento de fuerza ayuda a desarrollar músculos, aumentar tu fuerza y poder, mejorar tu libido y favorecer tus procesos de quema de grasa. Incluye ejercicios con diferentes equipos.
                </p>

                <div className="section">
                    <h2 className="section-title">
                        TIPO DE ENTRENAMIENTO <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                    </h2>
                    <div className="button-group">
                        <button
                            className={`btn ${trainingType === 'home' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => handleTrainingType('home')}
                        >
                            Fuerza: En casa <FontAwesomeIcon icon={faHome} />
                        </button>
                        <button
                            className={`btn ${trainingType === 'gym' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => handleTrainingType('gym')}
                        >
                            Fuerza: El gym <FontAwesomeIcon icon={faDumbbell} />
                        </button>
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">DÍAS DE ENTRENAMIENTO</h2>
                    <div className="button-group">
                        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, index) => (
                            <button
                                key={index}
                                className={`btn ${selectedDays.includes(day) ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => toggleDaySelection(day)}
                            >
                                {day} <FontAwesomeIcon icon={faCalendarDay} />
                            </button>
                        ))}
                    </div>
                    <div className="info-box">
                        <FontAwesomeIcon icon={faExclamationCircle} className="warning-icon" />
                        <p className="info-text">
                            Nuestros expertos en fitness recomiendan hacer este tipo de actividades 2 - 4 veces a la semana.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">DURACIÓN DEL ENTRENAMIENTO</h2>
                    <div className="button-group">
                        {[20, 30, 40, 50, 60].map((time, index) => (
                            <button
                                key={index}
                                className={`btn ${trainingDuration === time ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => handleDurationSelection(time)}
                            >
                                {time} min <FontAwesomeIcon icon={faHourglassHalf} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <div className="switch-group">
                        <span>Calentamiento</span>
                        <label>
                            <input
                                type="checkbox"
                                className="switch"
                                checked={warmUp}
                                onChange={toggleWarmUp}
                            />
                        </label>
                    </div>
                    <p className="hint">
                        <FontAwesomeIcon icon={faStopwatch} /> +3-5 minutos antes del entrenamiento
                    </p>
                </div>

                <button className="btn btn-primary save-button" onClick={handleSave}>
                    GUARDAR <FontAwesomeIcon icon={faSave} />
                </button>
            </div>

        </div>
    );
}

export default RutinaPrincipal;
