
import { useState } from 'react';
import './index.scss';

function App() {

  const [mes, setMes] = useState(0)
  const [dia, setDia] = useState(0)

  const [result, setResult] = useState("")
  

  function clickCalcular (mes, dia) {


    if( mes === "Outubro" && dia === "1"){
        setResult("é do signo Libra")
    }
    if( mes === "Setembro" && dia === "20"){
        setResult("é do signo Libra")
    }
    if( mes === "Setembro" && dia === "23"){
        setResult("Não é de libra")
    }
  }

  return (
    <div className="App">
      <h1>SIGNO DE LIBRA</h1>
      <div className='inputs'>
        <div>
        <input type="number" placeholder='Mes' value={mes} onChange={e => setMes(Number(e.target.value))}/>
        </div>
        <div>
        <input type="number" placeholder='dia' value={dia} onChange={e => setDia(Number(e.target.value))}/>
        </div>
        </div>
        <button className='botao' onClick={clickCalcular}>CALCULAR</button>
        <div>{result}</div>
        

    </div>
  );
}

export default App;