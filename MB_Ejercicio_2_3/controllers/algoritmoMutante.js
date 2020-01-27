let adnMutantes = [];

class mutanteAlgoritmo {
    algoritmoVerSiEsMutante(miMatriz) {
        analisisFila(miMatriz);
    }
}

function analisisFila(miMatriz) {
    for (let i = 0; i < miMatriz.length; i++) {
        algoritmo(miMatriz[i]);
    }
    analisisDiagonalInferior(miMatriz, true);
}

function analisisDiagonalInferior(miMatriz, bottomToTop) {
    let Ylength = miMatriz.length;
    let Xlength = miMatriz[0].length;
    let maxLength = Math.max(Xlength, Ylength);
    let temp;
    let returnArray = [];
    for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
        temp = [];
        for (let y = Ylength - 1; y >= 0; --y) {
            let x = k - (bottomToTop ? Ylength - y : y);
            if (x >= 0 && x < Xlength) {
                temp.push(miMatriz[y][x]);
            }
        }
        if (temp.length > 0) {
            returnArray.push(temp);
        }
    }
    for (let i = 0; i < returnArray.length; i++) {
        algoritmo(returnArray[i]);
    }
    analisisColumna(miMatriz);
}

function analisisColumna(miMatriz) {
    for (let j = 0; j < miMatriz.length; j++) {
        getCol(miMatriz, [j]);
    }
}

function getCol(array, col) {
    let column = [];
    for (let i = 0; i < array.length; i++) {
        column.push(array[i][col]);
    }
    algoritmo(column);
}

function algoritmo(datos) {
    for (let j = 0; j < datos.length - 1; j++) {
        if (datos[j] === datos[j + 1] && datos[j] === datos[j + 2] && datos[j] === datos[j + 3]) {
            console.log("Secuencia de 4 letras iguales: " + datos.join(''))
            adnMutantes.push(datos.join(''));
        }
    }
}

module.exports = new mutanteAlgoritmo()
module.exports.adnMutantes = adnMutantes;