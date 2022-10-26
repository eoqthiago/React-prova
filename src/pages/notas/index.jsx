import { useState } from 'react';

export default function Index () {

    const [alunos, setAlunos] = useState([]);
    const [media, setMedia] = useState(0);
    const [qtd, setQtd] = useState(0);

    function criarArray() {
        let notas = [];
		for (let i = 0; i < qtd; i++) notas.push(0);
        setAlunos(notas);
    };

    function alterarPos(index, nota) {
        alunos[index] = Number(nota);
        setAlunos([...alunos])
        console.log(alunos)
    }

    return (
        <div>
            <input type='number' value={qtd} onChange={e => setQtd(Number(e.target.value))} />
            <button onClick={criarArray} >Iniciar</button>

            {alunos.map((item, index) => (
                <div>
                    Aluno {index + 1}
                    <input
                        value={item[index]}
                        onChange={e => alterarPos(index, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}