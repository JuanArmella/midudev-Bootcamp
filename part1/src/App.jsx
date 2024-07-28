import './App.css'
import { Saludo } from './Saludo'


//NO CREAR UN COMPONENTE DENTRO DE OTRO

const MiPersona = () =>{
  return(
    <div>
      <h1>Nombre: Juan Manuel Armella Mendoza</h1>
    </div>
  )
}

const App = () => {
  const a = 2
  const b = 3

  return (
    <>
      <div>
        <h1>Titulo de la App</h1>
        <strong>Mejorando :)</strong>
        <div>
          <p>El resultado de la suma es: {a + b}</p>

          <Saludo color='blue' message='Estamos trabajando' />
          <Saludo color='orange' message='En un curso' />
          <Saludo color='green' message='De React' />
          <MiPersona />
        </div>
      </div>
    </>
  )
}

export default App
