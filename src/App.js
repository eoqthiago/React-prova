
import { useState } from 'react';
import './App.css';

function App() {

  const [pequeno, setPequeno] = useState(0)
  const [medio, setMedio] = useState(0)
  const [grande, setGrande] = useState(0)
  const [desc, setDesc] = useState(0)
  const [result, setResult] = useState(0)
  
  let desconto = desc / 100;
  console.log(desconto)

  function clickCalcular (qtdPequeno, qtdMedio, qtdGrande, desc) {
    qtdPequeno = 13.50 * pequeno;
    qtdMedio = 15.00 * medio;
    qtdGrande = 17.50 * grande;
    let x = qtdPequeno + qtdMedio + qtdGrande;
    let resultado = x * desconto;
    setResult(resultado)
    console.log(resultado)


  }

  return (
    <div className="App">
      <h1>Açai</h1>
      <div className='inputs'>
        <div>
        <input type="number" placeholder='Açai pequeno' value={pequeno} onChange={e => setPequeno(Number(e.target.value))}/>
        </div>
        <div>
        <input type="number" placeholder='Açai Medio' value={medio} onChange={e => setMedio(Number(e.target.value))}/>
        </div>
        <div>
        <input type="number" placeholder='Açai Grande' value={grande} onChange={e => setGrande(Number(e.target.value))}/>
        </div>
        <div>
        <input type="number" placeholder='desconto' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
        </div>
        <button className='botao' onClick={clickCalcular}>CALCULAR</button>
        <div>{result}</div>
        

      </div>
    </div>
  );
}

export default App;
