import {useState, useEffect} from "react";
import Swal from "sweetalert2";

const Preguntas = ({estoyPreguntas, setEstoyPreguntas, preguntas, setEstoyResultados, setAleatorio, aleatorio, setRespuestas}) => {

    let preguntasConOpcionesMezcladas;

    useEffect(() => {
        if (preguntas.length > 1) {
            setEstoyPreguntas(true);
            const preguntasMezcladas = [...preguntas].sort(() => Math.random() - 0.5)
            preguntasConOpcionesMezcladas = preguntasMezcladas.map((pregunta) => ({
                ...pregunta,
                opciones: Object.fromEntries(Object.entries(pregunta.opciones).sort(() => Math.random() - 0.5))
            }))
        }
        setAleatorio(preguntasConOpcionesMezcladas)
    }, [preguntas])

    const enviarRespuestas = () => {
        Swal.fire({
            title: "¿SEGURA QUE QUIERES ENVÍAR LAS RESPUESTAS?",
            icon: "question",
            imageWidth: 80,  
            imageHeight: 80, 
            showCancelButton: true,
            confirmButtonText: "SÍ, SOY BUENÍSIMA",
            cancelButtonText: "No espera que beba agua primero"})
            .then((result) => {
                if (result.isConfirmed) {
                    setEstoyPreguntas(false)
                    setEstoyResultados(true)
                }
            }
        )
    }

    const handleRadioChange = (pregunta, opcion) => {
        setRespuestas(prev => ({
            ...prev,
            [pregunta]:opcion
        }))
    }  

    if (estoyPreguntas) {
        return(
        <>
            {aleatorio.map(pregunta => (
                <div key={pregunta.id}>
                    <fieldset>
                        <legend>{pregunta.pregunta}</legend>
                        <form>
                            {Object.keys(pregunta.opciones).map((opcion) => (
                                <div key={opcion}>
                                    <input type="radio" id={`${pregunta.id}-${opcion}`} value={opcion} name={pregunta.id} onChange={() => handleRadioChange(pregunta.id, opcion)}/>
                                    <label htmlFor={`${pregunta.id}-${opcion}`}>{pregunta.opciones[opcion]}</label>
                                </div>
                            ))}
                        </form>
                    </fieldset>
                </div> 
            ))}
            <button onClick={enviarRespuestas}>Enviar</button>
        </>
        )
    }

    return (
        <div></div>
    )
}

export default Preguntas