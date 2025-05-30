import {useEffect, useState} from 'react'

const Respuestas = ({test, setEstoyPreguntas, estoyResultados, setEstoyResultados, aleatorio, respuestas, setRespuestas, setEstoyTest}) => {

    let fallos = 0
    
    useEffect(() => {
        setEstoyResultados(true)
        setEstoyPreguntas(false)
    }, [])

    const handleClick = () => {
        setEstoyResultados(false)
        setEstoyTest(true)
        setRespuestas([])
    }

    if (estoyResultados) {
        {aleatorio.map((preguntas, index) => (
            respuestas[index+1]===preguntas.respuesta_correcta ? fallos : fallos++
        ))}
        return(
            <>
                {aleatorio.map((preguntas, index) => (
                    <div>
                        <fieldset>
                            <p>Pregunta: {preguntas.pregunta}</p>
                            <p>Respuesta elegida: {respuestas[index+1]}</p>
                            {respuestas[index+1]===preguntas.respuesta_correcta ? <div className='acierto'><p>Respuesta correcta: <span>{preguntas.respuesta_correcta}</span></p></div> : <div className='fallo'><p>Respuesta correcta: <span clas>{preguntas.respuesta_correcta}</span></p></div>}
                            <p>Explicación: {preguntas.explicacion}</p>
                        </fieldset>
                    </div>
                ))}
                <div>
                    <p>Preguntas acertadas: {20-fallos}/20</p>
                    <p>Porcentaje de acierto: {((20-fallos)*100)/20}%</p>
                </div>
                <button onClick={handleClick}>Cerrar test</button>
            </>
        )
    }

    return (
        <div></div>
    )

}

export default Respuestas