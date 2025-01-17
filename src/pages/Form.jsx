import React, { useState } from 'react';
import '../css/Form.css';
import PesoActual from './Wheight';

const Form = () => {
    const [paso, setPaso] = useState(1); // Estado para el paso actual
    const [formulario, setFormulario] = useState({
        meta: '',
        tipoCuerpo: '',
        condicionFisica: '',
        altura: '',
        peso: '',
        metaPeso: '',
        edad: '',
        lugarEntrenamiento: '',
        aceptar: false,
    });

    // Maneja cambios en los inputs
    const manejarCambio = (e) => {
        const { name, value, type, checked } = e.target;
        setFormulario({
            ...formulario,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Pasar al siguiente paso
    const siguientePaso = () => setPaso((pasoAnterior) => pasoAnterior + 1);
    // Volver al paso anterior
    const pasoAnterior = () => setPaso((pasoAnterior) => pasoAnterior - 1);

    // Renderiza los campos según el paso actual
    const renderizarPaso = () => {
        switch (paso) {
            case 1:
                return (
                    <div className="containerPaso">
                        <h2>1. Establece tus metas</h2>
                        <select name="meta" value={formulario.meta} onChange={manejarCambio}>
                            <option value="">Selecciona una opción...</option>
                            <option value="ganar-musculo">Ganar músculo</option>
                            <option value="perder-peso">Perder peso</option>
                        </select>
                    </div>
                );
            case 2:
                return (
                    <div className="containerPaso">
                        <h2>2. Elige tu estilo de cuerpo</h2>
                        <select name="tipoCuerpo" value={formulario.tipoCuerpo} onChange={manejarCambio}>
                            <option value="">Selecciona una opción...</option>
                            <option value="delgado">Delgado</option>
                            <option value="promedio">Promedio</option>
                            <option value="pasado-de-peso">Pasado de peso</option>
                            <option value="musculoso">Musculoso</option>
                        </select>
                    </div>
                );
            case 3:
                return (
                    <div className="containerPaso">
                        <h2>3. ¿Cuál es tu condición física?</h2>
                        <select name="condicionFisica" value={formulario.condicionFisica} onChange={manejarCambio}>
                            <option value="">Selecciona una opción...</option>
                            <option value="principiante">Principiante</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="avanzado">Avanzado</option>
                            <option value="elite">Élite</option>
                        </select>
                    </div>
                );
            case 4:
                return (
                    <div className="containerPaso">
                        <h2>4. ¿Cuánto mides?</h2>
                        <input
                            type="number"
                            name="altura"
                            value={formulario.altura}
                            onChange={manejarCambio}
                            placeholder="Altura en cm"
                        />
                    </div>
                );
            case 5:
                return (
                    <div className="containerPaso">
                        <PesoActual
                            pasoAnterior={pasoAnterior}
                            siguientePaso={siguientePaso}
                            altura={formulario.altura}
                            onPesoChange={(pesoProp) =>
                                setFormulario({ ...formulario, peso: pesoProp })
                            }
                            peso={formulario.peso}
                        />
                    </div>
                );
            case 6:
                return (
                    <div className="containerPaso">
                        <h2>6. ¿Cuál es tu meta de peso?</h2>
                        <input
                            type="number"
                            name="metaPeso"
                            value={formulario.metaPeso}
                            onChange={manejarCambio}
                            placeholder="Meta en kg"
                        />
                    </div>
                );
            case 7:
                return (
                    <div className="containerPaso">
                        <h2>7. ¿Qué edad tienes?</h2>
                        <input
                            type="number"
                            name="edad"
                            value={formulario.edad}
                            onChange={manejarCambio}
                            placeholder="Edad"
                        />
                    </div>
                );
            case 8:
                return (
                    <div className="containerPaso">
                        <h2>8. Elige tu lugar de entrenamiento</h2>
                        <select name="lugarEntrenamiento" value={formulario.lugarEntrenamiento} onChange={manejarCambio}>
                            <option value="">Selecciona una opción...</option>
                            <option value="casa">Casa</option>
                            <option value="gym">Gym</option>
                        </select>
                    </div>
                );
            case 9:
                return (
                    <div className="containerPaso">
                        <h2>9. ¿Estás listo para empezar?</h2>
                        <p>
                            ¿Estás de acuerdo con nuestros{' '}
                            <a href="#">términos y políticas</a>?
                        </p>
                        <label>
                            <input
                                type="checkbox"
                                name="aceptar"
                                checked={formulario.aceptar}
                                onChange={manejarCambio}
                            />{' '}
                            Acepto
                        </label>
                    </div>
                );
            default:
                return <h2>Formulario completado</h2>;
        }
    };

    return (
        <div className="container formulario">
            <svg id="logoForm" data-name="logoForm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.48 423.95" fill="#fff000" width={100}><path d="M211.94,346.32c7.33,0,14.56.15,21.79,0,8-.21,16.13-1.85,23.94-0.83,10.4,1.36,20.71.24,31,.86,0.74,0,1.48,0,2.44,0,0.79-4.7,1.33-9.32,2.37-13.82,4.89-21.07,16.26-38,32.56-52.12,5-4.32,9.92-6.64,16.53-5.86,4.08,0.48,8.26.09,12.92,0.09a23.39,23.39,0,0,1-1.93,2.49c-6.23,6-12.25,12.15-18.79,17.75-17.3,14.81-26.8,33.22-27.05,56.17,0,0.11,0,.21,0,0.32,0,7.85-.83,9-8.08,11.74V386c5.84,1.72,8.17,4.25,8,8.7s-2.6,6.94-8.15,8.12c0,5.25.07,10.57,0,15.88-0.15,9.9-4.84,17-13.67,21.28-1.67.81-2.31,1.63-2.35,3.5a32,32,0,0,1-31.1,31.1c-16.06.57-31.09-12.15-32.52-28.2-0.36-4-1.57-5.84-5-7.77-7.37-4.16-11.11-10.94-11.24-19.5-0.08-5.42,0-10.85,0-16.22-5.65-1.31-8.13-3.89-8.16-8.35s2.57-7.23,8-8.33V363L201,362.2c-3.74-1.18-5.6-3.86-5.47-8.69a74.24,74.24,0,0,0-7.25-34.62c-5.52-11.48-14-20.32-23.84-28.31-22.06-18-36.32-41.16-43.84-68.46-21.13-76.75,27.3-150.28,98.55-167.62C276,40.69,333.8,64.59,365.74,112.85c0.29,0.44.53,0.9,1.1,1.9-6.34,0-12.33.06-18.3-.08-0.68,0-1.45-1.07-2-1.79-19.9-26.8-47-41.43-79.58-45.88-60.89-8.32-120.41,33.64-132.27,93.74-9.48,48,5.26,88.2,42.88,119.62,19.67,16.43,31.08,37.09,33.82,62.55C211.5,344,211.72,345,211.94,346.32Zm7.91,16.52v23.41h63.53V362.84H219.85Zm63.67,39.81H219.74c0,5.68-.23,11.2.07,16.69,0.24,4.4,3.2,6.87,7.66,6.88q24.12,0.07,48.23,0c4.59,0,7.51-2.54,7.75-7.16C283.74,413.67,283.52,408.25,283.52,402.64Zm-47.75,40.17c1.15,9.84,7.49,15.59,16.57,15.37,8.15-.2,14.39-6.48,15.05-15.37H235.77Z" transform="translate(-115.62 -50.63)" /><path d="M371.72,243.18v19.21H342.59V205h-135V262.4h-29v-19H159.18V204.94H140.11V185.31h19V146.75H178.5V127.56h29v57.37h135V127.63h29.23v19H391v38.56H410.1v19.56h-19v38.42H371.72Z" transform="translate(-115.62 -50.63)" /></svg>
            {renderizarPaso()}
            <div className="buttons">
                {paso > 1 && <button onClick={pasoAnterior}>Anterior</button>}
                {paso < 9 ? (
                    <button onClick={siguientePaso} disabled={paso === 9}>
                        Siguiente
                    </button>
                ) : (
                    <button onClick={() => console.log(formulario)}>Finalizar</button>
                )}
            </div>
        </div>
    );
};

export default Form;
