import { useState } from 'react';
import './index.scss';

export default function Index () {

    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(0);
    const [result, setResult] = useState([]);

    async function clickCalcular () {
        for (let i = inicio; i <= fim; i++) {
            console.log(i)
            setResult(result => [...result, i])
        }  
        
    }

    return (
        <>
            <h1>Numeros naturais </h1>
            <div className="form-salario">
                <div className='inputs'>
                    <div>
                        <input type="text" placeholder='Salario' value={inicio} onChange={e => setInicio(Number(e.target.value))}/>
                    </div>
                    <div>
                        <input type="text" placeholder='Bonus' value={fim} onChange={e => setFim(Number(e.target.value))}/>
                    </div>
                </div>
                <button className='botao' onClick={() => clickCalcular()}>
                    CALCULAR
                </button>
                <div>
                    {result}
                </div>
            </div>
        
        </>
    );
}