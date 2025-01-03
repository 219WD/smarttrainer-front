import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPersonRunning, faCrown, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import useGsap from '../hooks/useNav';
import '../css/Navbar.css';

const Navbar = () => {
    useGsap();
    const navigate = useNavigate(); // Inicializa el hook para la navegación

    return (
        <div className='navbar'>
            <div className="dock">
                <div className="dock-item" onClick={() => navigate('/rutinas')}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <div className="dock-item" onClick={() => navigate('/ejercicios')}>
                    <FontAwesomeIcon icon={faPersonRunning} />
                </div>
                <div className="dock-item" onClick={() => navigate('/premium')}>
                    <FontAwesomeIcon icon={faCrown} />
                </div>
                <div className="dock-item" onClick={() => navigate('/ajustes')}>
                    <FontAwesomeIcon icon={faCog} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
