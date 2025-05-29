import { useState, useEffect } from 'react'
import './App.css'
import tema from './Temas/Tema1.json'
import Filtrar from './components/Filtrar.jsx'
import Preguntas from './components/Preguntas.jsx'
import Respuestas from './components/Respuestas.jsx'

function App() {
  const [test, setTest] = useState(null)
  const [preguntas, setPreguntas] = useState([])
  const [estoyPreguntas, setEstoyPreguntas] = useState(false)
  const [estoyResultados, setEstoyResultados] = useState(false)
  const [aleatorio, setAleatorio] = useState([])
  const [respuestas, setRespuestas] = useState('')

  useEffect(() => {
    setTest(tema)
    setEstoyResultados(false)   
  },[])
  
  return (
    <div>
      <Filtrar test={test} setEstoyResultados={setEstoyResultados} setPreguntas={setPreguntas}/>
      <Preguntas estoyPreguntas={estoyPreguntas} setEstoyPreguntas={setEstoyPreguntas} preguntas={preguntas} setEstoyResultados={setEstoyResultados} setAleatorio={setAleatorio} aleatorio={aleatorio} setRespuestas={setRespuestas}/>
      <Respuestas test={test} setEstoyPreguntas={setEstoyPreguntas} estoyResultados={estoyResultados} setEstoyResultados={setEstoyResultados} aleatorio={aleatorio} respuestas={respuestas}/>
    </div>
  )
}

export default App