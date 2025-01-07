import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/Oferta.css';

function Ofertas() {
    return (
        <div className="container oferta">
            <div className="ofertas-contenedor">
                <div className="encabezado">
                    <h1 className="titulo">OBTÉN OFERTAS EXCLUSIVAS RECOMENDADAS PARA TI</h1>
                </div>

                <div className="oferta">
                    <div className="oferta-header">
                        <h2 className="oferta-unica">OFERTA ÚNICA</h2>
                    </div>

                    <div className="oferta-imagenes">
                        <img src="https://res.cloudinary.com/dtxdv136u/image/upload/v1736277557/ebook1_cyletj.png" alt="Cardio Training Guide" />
                        <img src="https://res.cloudinary.com/dtxdv136u/image/upload/v1736277557/ebook2_ketnpb.png" alt="Essential Guide to Healthy Eating" />
                    </div>

                    <ul className="oferta-lista">
                        <li>
                            <span>Guía de Entrenamiento de Cardio</span>
                            <FontAwesomeIcon icon={faCheck} className="icono-verde" />
                        </li>
                        <li>
                            <span>Guía Esencial para una Alimentación Saludable</span>
                            <FontAwesomeIcon icon={faCheck} className="icono-verde" />
                        </li>
                        <li>
                            <span>Guía de Entrenamiento FST7</span>
                            <FontAwesomeIcon icon={faCheck} className="icono-verde" />
                        </li>
                    </ul>

                    <p className="oferta-descripcion">
                        <FontAwesomeIcon icon={faInfoCircle} className="icono-info" /> 
                         Descuento disponible sólo para usuarios de Smart Trainer.
                    </p>

                    <div className="oferta-precio">
                        <div>
                            <span className="precio-actual">$5.72</span>
                            <span className="precio-antiguo">$14.59</span>
                        </div>
                        <div className="oferta-descuento">-60%</div>
                    </div>
                </div>

                <div className="pie">
                    <button className="btn-continuar">CONTRATAR</button>
                </div>
            </div>
        </div>
    );
}

export default Ofertas;
