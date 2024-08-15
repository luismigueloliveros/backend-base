function operar(operacion: string, a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplica') {
        return multiplicar(a, b);
    } else if (operacion === 'divide') {
        return dividir(a, b);
    } else if (operacion === 'potencia') {
        return potencia(a, b);
    } else if (operacion === 'factorial') {
        return factorial(a);
    }
}

function suma(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede restar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a - b;
}

function multiplicar(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede multiplicar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a * b;
}

function dividir(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede dividir indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a / b;
}

function potencia(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede operar potencia de indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a ** b;
}

function factorial(a: number): number {
    
    if (a === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede operar factorial de indefinido");
    }

    if (typeof a !== 'number') {
        return NaN;
    }

    if (a < 0) {
        console.log("retornando throw")
        throw new Error("No se puede operar un negativo");
    }

    let resultado = 1;
    for (let i = 1; i <= a; i++) {
        resultado *= i;
    }
    return resultado;
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial };