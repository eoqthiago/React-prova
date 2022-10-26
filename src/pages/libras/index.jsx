
import { useState } from 'react';
import './index.scss';

export default function App() {

  const [mes, setMes] = useState("")
  const [dia, setDia] = useState("")

  const [result, setResult] = useState("")

  let x = mes
  let y = dia
  function clickCalcular (x, y) {


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
        <input type="text" placeholder='Mes' value={mes} onChange={e => setMes(e.target.value)}/>
        </div>
        <div>
        <input type="text" placeholder='dia' value={dia} onChange={e => setDia(e.target.value)}/>
        </div>
        </div>
        <button className='botao' onClick={clickCalcular}>CALCULAR</button>
        <div>{result}</div>
        

    </div>
  );
}