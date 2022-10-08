
import { useState } from 'react';
import './index.scss';

function App() {

  const [grama, setGrama] = useState(0)

  
  const [result, setResult] = useState("")
  
  
  let x = grama
  function clickCalcular () {
    let preco = 3.50
    let gramas = (x * preco) / 100
    
    
    if( x >= 1000){
        preco = 3.00
        gramas = (x * preco) / 100
        setResult(`Total a pagar ${gramas}`)
    }
    else if( x <= 0){
        setResult("Preço Invalido")
    } else {
        setResult(gramas)
        
    }



  }

  return (
    <div className="App">
      <h1>SORVETERIA</h1>
      <div className='inputs'>
        <div>
        <input type="number" placeholder='Gramas' value={grama} onChange={e => setGrama(Number(e.target.value))}/>
        </div>
        </div>
        <button className='botao' onClick={clickCalcular}>CALCULAR</button>
        <div>{result}</div>
        

    </div>
  );
}

export default App;