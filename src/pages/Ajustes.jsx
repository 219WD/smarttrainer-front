import React from 'react';
import '../css/Ajustes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faInfoCircle, 
    faCalendarAlt, 
    faTrophy, 
    faCrown, 
    faEnvelope 
} from '@fortawesome/free-solid-svg-icons';

const Ajustes = () => {
  return (
    <div className='container ajustes'>
      <div className="configuracion">
          <div className="ajuste">
              <span>Información</span>
              <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div className="ajuste">
              <span>Rutinas</span>
              <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <div className="ajuste">
              <span>Desafíos</span>
              <FontAwesomeIcon icon={faTrophy} />
          </div>
          <div className="ajuste">
              <span>Suscripciones</span>
              <FontAwesomeIcon icon={faCrown} />
          </div>
          <div className="ajuste">
              <span>Contacto</span>
              <FontAwesomeIcon icon={faEnvelope} />
          </div>
      </div>
    </div>
  );
};

export default Ajustes;
