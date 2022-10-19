

// N = ESTUDANTES
// D = MINILITROS POR ESTUDANTES
// L = LITROS DA GARRAFA

function meuCafe (n, l, d) {
    
    let calc = ((n*d) /1000);
    let output = l;

    while(calc > output) {
        output+=l
    }
    console.log(output)
}

meuCafe(15, 3, 200)