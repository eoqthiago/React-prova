import { useState } from 'react';
import './index.scss';

export default function Index () {
    const [num, setNum] = useState(0);
    const [result, setResult] = useState([]);

    async function clickCalcular () {
        for (let i = 0; i < num; i++) {
            setResult(result => [...result, "* "])
        }
    }

    return (
        <>
            <h1>Lopping asterisco</h1>
            <div className="form-salario">
                <div className='inputs'>
                    <div>
                        <input type="text" value={num} onChange={e => setNum(Number(e.target.value))}/>
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