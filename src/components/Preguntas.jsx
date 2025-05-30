import {useState, useEffect} from "react";
import Swal from "sweetalert2";

const Preguntas = ({estoyPreguntas, setEstoyPreguntas, preguntas, setEstoyResultados, setAleatorio, aleatorio, respuestas, setRespuestas, setEstoyTest}) => {

    let preguntasMezcladas;

    useEffect(() => {
        if (preguntas.length > 1) {
            setEstoyPreguntas(true);
            preguntasMezcladas = [...preguntas].sort(() => Math.random() - 0.5)
        }
        setAleatorio(preguntasMezcladas)
    }, [preguntas])

    const enviarRespuestas = () => {
        console.log(respuestas.length);
        
        if (Object.keys(respuestas).length===20) {
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
                        setEstoyTest(false)
                        setEstoyResultados(true)
                    }
                })
        } else {
            Swal.fire({
                title: "Sabes que no has contestado a todas las preguntas, ¿verdad?",
                icon: "warning",
                imageWidth: 80,  
                imageHeight: 80, 
                showCancelButton: false,
                confirmButtonText: "Upsie, no me he dado cuenta"
            })
        }
        
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