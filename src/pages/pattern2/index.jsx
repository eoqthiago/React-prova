import { useState } from 'react';
import './index.scss';

export default function Index () {
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [result, setResult] = useState([]);
    

    async function clickCalcular () {
        for (let i = 0; i < base; i++) {
            for (let j = i; j < altura; j++) {
                setResult(result => [...result, "* "])
            }
            
            setResult(result => [...result, "* "])
        }
    }

    return (
        <>
            <h1>Lopping asterisco</h1>
            <div className="form-salario">
                <div className='inputs'>
                    <div>
                        <input type="text" value={base} onChange={e => setBase(Number(e.target.value))}/>
                    </div>
                    <div>
                        <input type="text" value={altura} onChange={e => setAltura(Number(e.target.value))}/>
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