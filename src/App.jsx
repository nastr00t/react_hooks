import { useEffect, useState } from 'react' 
import './App.css'
import { UseReducer } from './components/UseReducer';
import { UseRef } from './components/UseRef';
import { UseMemo } from './components/UseMemo';

function App() {
  const [count, setCount] = useState(0)
  //useEffect se ejecuta despues de cada renderizado
  useEffect(() => { 
    //Actualiza el titulo de la página con el valor de count
    document.title = `Count is ${count}`;
  }, [count]);



  return (
    <>
      <h2>React Hook Practice</h2>
      <div className="card">
        <h2>Example Hook useState and useEffect</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />        
      </div>
      <UseReducer />
      <UseRef count={count} setCount={setCount} />
      <UseMemo count={count} setCount={setCount} />
    </>
  )
}

export default App
