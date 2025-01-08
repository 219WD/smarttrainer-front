import React, { useState } from 'react';
import '../css/RestriccionesDeSalud.css';

function RestriccionesDeSalud() {
    const [formData, setFormData] = useState({
        rodilla: false,
        tobillo: false,
        cadera: false,
        hombro: false,
        biceps: false,
        codo: false,
        espalda: false,
        cardiovascular: false,
        consentimiento1: false,
        consentimiento2: false,
    });

    // Manejar cambios en los checkboxes
    const handleChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación: Máximo 3 opciones seleccionadas
        const selectedOptions = Object.values(formData).slice(0, 8).filter(Boolean);
        if (selectedOptions.length > 3) {
            alert("Solo puedes seleccionar hasta 3 restricciones.");
            return;
        }
        // Aquí podrías enviar los datos al backend o hacer otra lógica
        console.log("Datos enviados:", formData);
    };

    return (
        <div className="container restricciones">
            <div className="restricciones-contenedor">
                <div className="restricciones-header">
                    <i className="fas fa-arrow-left restricciones-icono"></i>
                    <h2 className="restricciones-titulo">RESTRICCIONES DE SALUD</h2>
                </div>

                <p className="restricciones-descripcion">
                    Selecciona hasta tres opciones. Lo tendremos en cuenta al compilar tus entrenamientos.
                </p>

                <form onSubmit={handleSubmit} className="restricciones-formulario">
                    <div className="restricciones-lista">
                        {[
                            { label: 'Rodilla', name: 'rodilla' },
                            { label: 'Tobillo', name: 'tobillo' },
                            { label: 'Cadera', name: 'cadera' },
                            { label: 'Hombro', name: 'hombro' },
                            { label: 'Biceps', name: 'biceps' },
                            { label: 'Codo', name: 'codo' },
                            { label: 'Espalda', name: 'espalda' },
                            { label: 'Enfermedad cardiovascular', name: 'cardiovascular' },
                        ].map((item) => (
                            <div key={item.name} className="restricciones-item">
                                <span>{item.label}</span>
                                <input
                                    type="checkbox"
                                    name={item.name}
                                    checked={formData[item.name]}
                                    onChange={handleChange}
                                    className="restricciones-checkbox"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="restricciones-consentimiento">
                        <label className="restricciones-label">
                            <input
                                type="checkbox"
                                name="consentimiento1"
                                checked={formData.consentimiento1}
                                onChange={handleChange}
                                className="restricciones-checkbox"
                            />
                            <span>
                                Acepto el{' '}
                                <span className="restricciones-enlace">
                                    procesamiento de mis datos personales de salud
                                </span>{' '}
                                para el funcionamiento y las mejoras de la app.
                            </span>
                        </label>
                        <label className="restricciones-label">
                            <input
                                type="checkbox"
                                name="consentimiento2"
                                checked={formData.consentimiento2}
                                onChange={handleChange}
                                className="restricciones-checkbox"
                            />
                            <span>
                                Acepto que Smart Trainer pueda usar mis datos de salud para mejorar la app mediante el análisis de mi actividad.
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="restricciones-boton">
                        GUARDAR
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RestriccionesDeSalud;
