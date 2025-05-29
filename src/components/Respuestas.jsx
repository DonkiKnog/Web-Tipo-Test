import {useEffect, useState} from 'react'

const Respuestas = ({test, setEstoyPreguntas, estoyResultados, setEstoyResultados, aleatorio, respuestas}) => {
    
    useEffect(() => {
        setEstoyResultados(true)
        setEstoyPreguntas(false)
    }, [])

    if (estoyResultados) {
        return(
            <>
                {aleatorio.map((preguntas, index) => (
                    <div>
                        <fieldset>
                            <p>Pregunta: {preguntas.pregunta}</p>
                            <p>Respuesta elegida: {respuestas[index+1]}</p>
                            <p>Respuesta correcta: {preguntas.respuesta_correcta}</p>
                            <p>Explicación: {preguntas.explicacion}</p>
                        </fieldset>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div></div>
    )

}

export default Respuestas