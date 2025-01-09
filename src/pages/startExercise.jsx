import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faPen,
  faStopwatch,
  faFire,
  faDumbbell,
  faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';
import '../css/startExercise.css';

const StartExercise = () => {
  const exercises = [
    {
      id: 1,
      name: 'Pecho plano con mancuernas',
      details: '15 reps. · 10 kg',
      image: 'https://placehold.co/50x50',
      alt: 'Chest fly with dumbbells'
    },
    {
      id: 2,
      name: 'Apertura con mancuernas acostado',
      details: '12 reps. · 10 kg',
      image: 'https://placehold.co/50x50',
      alt: 'Chest fly with dumbbells lying down'
    },
    {
      id: 3,
      name: 'Press militar con barra',
      details: '10 reps. · 20 kg',
      image: 'https://placehold.co/50x50',
      alt: 'Military press with barbell'
    },
    {
      id: 4,
      name: 'Vuelos laterales con mancuernas',
      details: '10 reps. · 10 kg',
      image: 'https://placehold.co/50x50',
      alt: 'Lateral raises with dumbbells'
    },
    {
      id: 5,
      name: 'Elevaciones frontales con mancuernas',
      details: '12 reps. · 10 kg',
      image: 'https://placehold.co/50x50',
      alt: 'Front raises with dumbbells'
    },
    {
      id: 6,
      name: 'Tríceps en polea',
      details: '15 reps. · 20 kg',
      image: 'https://placehold.co/50x50',
      alt: 'Triceps pushdown with cable machine'
    },
    {
      id: 7,
      name: 'Triceps tras nuca con barra',
      details: '12 reps. · 20 kg',
      image: 'https://placehold.co/50x50',
      alt: 'Triceps extension with barbell behind the head'
    },
    {
      id: 8,
      name: 'Fondos en paralelas',
      details: '10 reps.',
      image: 'https://placehold.co/50x50',
      alt: 'Dips on parallel bars'
    }
  ];

  return (
    <div className="container start-exercise">
      <div className="header">
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        <FontAwesomeIcon icon={faPen} className="icon" />
      </div>

      <div className="title-section">
        <img
          src="https://res.cloudinary.com/dtxdv136u/image/upload/v1736186633/6_x058fz.webp"
          alt="Muscular man holding a dumbbell"
          className="profile-image"
        />
        <h1 className="title">HIPERTROFIA: GIMNASIO</h1>
        <p className="subtitle">Pecho, Hombros, Tríceps</p>
      </div>

      <div className="stats-section">
        <div className="stat">
          <FontAwesomeIcon icon={faStopwatch} className="stat-icon" />
          <p className="stat-value">60 min</p>
          <p className="stat-label">Duración</p>
        </div>
        <div className="stat">
          <FontAwesomeIcon icon={faFire} className="stat-icon" />
          <p className="stat-value">450</p>
          <p className="stat-label">Calorías</p>
        </div>
        <div className="stat">
          <FontAwesomeIcon icon={faDumbbell} className="stat-icon" />
          <p className="stat-value">8</p>
          <p className="stat-label">Ejercicios</p>
        </div>
      </div>

      <div className="workout-section">
        <div className="workout-header">
          <FontAwesomeIcon icon={faStopwatch} className="workout-icon" />
          <p className="workout-title">ENTRENAMIENTO</p>
        </div>
        <p className="workout-subtitle">4 Series</p>

        {exercises.map((exercise) => (
          <div className="exercise-item" key={exercise.id}>
            <img
              src={exercise.image}
              alt={exercise.alt}
              className="exercise-image"
            />
            <div className="exercise-info">
              <p className="exercise-name">{exercise.name}</p>
              <p className="exercise-details">{exercise.details}</p>
            </div>
            <FontAwesomeIcon icon={faArrowsRotate} className="exercise-icon" />
          </div>
        ))}
      </div>

      <div className="start-section">
        <div className="workout-header">
          <FontAwesomeIcon icon={faStopwatch} className="workout-icon" />
          <p className="workout-title">ENTRENAMIENTO</p>
        </div>
        <div className="workout-series">
          <p className="workout-subtitle">4 Series</p>
          <FontAwesomeIcon icon={faPen} className="workout-icon" />
        </div>
        <div className="workout-series">
          <p className="workout-subtitle">Intensidad 1</p>
          <FontAwesomeIcon icon={faPen} className="workout-icon" />
        </div>
        <button className="start-button">EMPEZAR RUTINA</button>
      </div>
    </div>
  );
};

export default StartExercise;
