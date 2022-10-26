import { useState } from 'react';

export default function Index () {

    const [alunos, setAlunos] = useState([]);
    const [media, setMedia] = useState(0);
    const [alta, setAlta] = useState(0);
    const [baixa, setBaixa] = useState(0);
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

    function mediaAlunos() {
        let mid = 0;
        for (let i = 0; i < alunos.length; i++) {
            mid += alunos[i];
        }
        setMedia(mid / alunos.length);
    }

    return (
        <div className='App'>
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

            <div>
                <div>Media {media}</div>
                <div>Nota mais baixa: {baixa} </div>
                <div>Nota mais alta: {alta} </div>
                <button onClick={mediaAlunos}>Clique</button>
            </div>
        </div>
    );
}