import { useEffect, useState } from 'react' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //useEffect se ejecuta despues de cada renderizado
  useEffect(() => { 
    //Actualiza el titulo de la página con el valor de count
    document.title = `Count is ${count}`;
  },[count]);

  return (
    <>
      <h1>react Hook Practice</h1>
      <div className="card">
        <h2>Example Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default App
