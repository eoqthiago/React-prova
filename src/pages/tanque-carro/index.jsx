import { useState } from "react"

export default function Index() {
    const [capacidade, setCapacidade] = useState("");
    const [consumo, setConsumo] = useState("");
    const [distancia, setDistancia] = useState("");
    const [resultado, setResultado] = useState(0);

    async function calculoReal() {
        setResultado(Math.ceil(distancia/(capacidade*consumo)));
    }

    return (
        <div style={{"display": "flex", "flexDirection": "column", "width": "20em", "justifyContent": "center"}}>
            <input type="text" placeholder="Consumo"  value={consumo} onChange={(e) => setConsumo(Number(e.target.value))}></input>
            <input type="text" placeholder="Capacidade" value={capacidade} onChange={(e) => setCapacidade(Number(e.target.value))}></input>
            <input type="text" placeholder="Distancia" value={distancia} onChange={(e) => setDistancia(Number(e.target.value))}></input>
            <button onClick={() => calculoReal()}>Clique</button>
            <div>{resultado}</div>
        </div>
    )
}