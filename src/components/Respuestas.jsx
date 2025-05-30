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
                    {20-fallos<10 ? <div className='acierto'><p>Preguntas acertadas: <span>{20-fallos}</span>/20</p></div> : <div className='fallo'><p>Preguntas acertadas: <span>{20-fallos}</span>/20</p></div>}
                    {((20-fallos)*100)/20 > 50 ? <div className='acierto'><p>Porcentaje de acierto: <span>{((20-fallos)*100)/20}%</span></p></div> : <div className='fallos'><p>Porcentaje de acierto: <span>{((20-fallos)*100)/20}%</span></p></div>}
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