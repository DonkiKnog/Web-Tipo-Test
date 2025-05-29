import { useState } from "react";

const Filtrar = ({test, setEstoyResultados, setPreguntas}) => {

    const [tema, setTema] = useState('')
    const [temaElegido, setTemaElegido] = useState("") 

    const buscar = (event) => {
        event.preventDefault();
        if (tema === '1') {
            const resultado = test.preguntas.filter((pregunta) => pregunta.id)
            setPreguntas(resultado)
            setEstoyResultados(false)      
        }
    }

    const handleChange = (event) => {
        setTema(event.target.value)
        if (event.target.value === '1') {
            const elegido = test.metadata.temas_principales.join(", ")
            setTemaElegido(elegido)
        }
    }

    return (
        <div>
            <form>
                <input value={tema} onChange={handleChange}/>
                <input disabled={true} value={temaElegido}/>
                <br/>
                <button type="button" onClick={buscar}>Empezar test</button>
            </form>
        </div>
    )

}

export default Filtrar