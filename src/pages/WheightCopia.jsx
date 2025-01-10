import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import "../css/Wheight.css";

function PesoActual({ pasoAnterior, siguientePaso, altura, onPesoChange, peso: pesoProp }) {
    const [peso, setPeso] = useState(() => pesoProp ?? 70);
    const [imc, setIMC] = useState(null);
    const [clasificacion, setClasificacion] = useState("");

    // Sincroniza peso cuando pesoProp cambia
    useEffect(() => {
        if (pesoProp !== undefined && pesoProp !== peso) {
            setPeso(pesoProp);
        }
    }, [pesoProp]);

    const manejarPeso = (e) => {
        const nuevoPeso = parseInt(e.target.value, 10) || 0; // Asegúrate de que sea un número válido
        setPeso(nuevoPeso);
        onPesoChange(nuevoPeso); // Llama a la función para propagar el cambio al componente padre
    };


    // IMC
    const calcularIMC = (peso, altura) => {
        if (!altura) return;
        const alturaEnMetros = altura / 100;
        const nuevoIMC = (peso / (alturaEnMetros * alturaEnMetros)).toFixed(1);
        setIMC(nuevoIMC);

        if (nuevoIMC < 18.5) {
            setClasificacion("Bajo peso");
        } else if (nuevoIMC >= 18.5 && nuevoIMC < 24.9) {
            setClasificacion("Peso normal");
        } else if (nuevoIMC >= 25 && nuevoIMC < 29.9) {
            setClasificacion("Sobrepeso");
        } else {
            setClasificacion("Obesidad");
        }
    };

    useEffect(() => {
        if (altura) calcularIMC(peso, altura);
    }, [peso, altura]);

    useEffect(() => {
        const container = document.querySelector(".peso-actual-numeros");
        let lastScrollY = 0;

        const handleScroll = (e) => {
            e.preventDefault();
            const delta = e.deltaY || e.touches?.[0]?.clientY - lastScrollY;

            if (Math.abs(delta) > 10) {
                const direction = delta > 0 ? -1 : 1; // Cambia el peso de 1 en 1
                setPeso((prevPeso) => {
                    let newPeso = prevPeso + direction;
                    if (newPeso < 0) newPeso = 0;
                    if (newPeso > 200) newPeso = 200;
                    onPesoChange(newPeso); // Propaga el nuevo peso
                    return newPeso;
                });

                gsap.to(container, {
                    y: direction * -5,
                    duration: 0.3,
                    ease: "power1.out",
                    onComplete: () => {
                        gsap.set(container, { y: 0 }); // Reset
                    },
                });

                lastScrollY = e.touches?.[0]?.clientY || e.deltaY;
            }
        };

        container.addEventListener("wheel", handleScroll, { passive: false });
        container.addEventListener("touchmove", handleScroll, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleScroll);
            container.removeEventListener("touchmove", handleScroll);
        };
    }, []);

    return (
        <div className="peso-actual-contenedor">
            <form>
                <div className="peso-actual-encabezado">
                    <h2 className="peso-actual-titulo">5. ¿Cuánto pesas?</h2>
                    <div className="peso-actual-cifra">
                        {peso} <span className="peso-actual-unidad">kg</span>
                    </div>
                </div>

                <div className="peso-actual-aviso">
                    <p className="peso-actual-alerta">
                        <FontAwesomeIcon icon={faExclamationTriangle} /> Tu IMC es {imc}, está
                        considerado como {clasificacion}.
                    </p>
                    <p>
                        Usaremos tu índice para crear un programa personal que se adapte a ti.
                    </p>
                </div>

                <div className="peso-actual-numeros">
                    <p>{peso - 2}</p>
                    <p>{peso - 1}</p>
                    <p className="peso-actual-actual">
                        {peso} <span className="peso-actual-unidad">kg</span>
                    </p>
                    <p>{peso + 1}</p>
                    <p>{peso + 2}</p>
                </div>

                <div className="navegacion">
                    <button type="button" onClick={pasoAnterior} className="btn-primario">Anterior</button>
                    <button type="button" onClick={siguientePaso} className="btn-primario">Siguiente</button>
                </div>
            </form>
        </div>
    );
}

export default PesoActual;
