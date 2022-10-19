

export function retagulo (rows, columns){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            process.stdout.write("*");
        }
        console.log();
    }

}
retagulo(2, 5);