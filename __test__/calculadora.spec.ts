import { describe, test, expect } from "@jest/globals";
import { restar, suma, operar, multiplicar, dividir, potencia, factorial } from "../src/calculadora.js";
import app from "../src/server.js";
import request from "supertest";

describe("Calculadora", () => {

    test("sumar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(suma(a, b)).toBe(300);

        a = 10;
        b = "a";
        expect(suma(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { suma(a, b) }).toThrow("No se puede sumar indefinidos");

    });

    test("operar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(operar("resta", b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(operar("suma", a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { operar("suma", a, b) }).toThrow("No se puede sumar indefinidos");

    });

    test("restar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(restar(b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(restar(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { restar(a, b) }).toThrow("No se puede restar indefinidos");
    });

    test("multiplicar dos numeros", () => {

        let a: any = 10;
        let b: any = 10;
        expect(multiplicar(b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(multiplicar(a, b)).toBeNaN();

        a = undefined;
        b = 10;
        expect(() => { multiplicar(a, b) }).toThrow("No se puede multiplicar indefinidos");
    });

    test("dividir dos numeros", () => {

        let a: any = 20;
        let b: any = 10;
        expect(dividir(a, b)).toBe(2);

        a = 20;
        b = "a";
        expect(dividir(a, b)).toBeNaN();

        a = undefined;
        b = 10;
        expect(() => { dividir(a, b) }).toThrow("No se puede dividir indefinidos");
    });


    test("potencia dos numeros", () => {

        let a: any = 5;
        let b: any = 2;
        expect(potencia(a, b)).toBe(25);

        a = 5;
        b = "a";
        expect(potencia(a, b)).toBeNaN();

        a = undefined;
        b = 2;
        expect(() => { potencia(a, b) }).toThrow("No se puede operar potencia de indefinidos");
    });


    test("factorial de numero", () => {

        let a: any = 5;
        expect(factorial(a)).toBe(120);

        a = "a";
        expect(factorial(a)).toBeNaN();

        a = undefined;
        expect(() => { factorial(a) }).toThrow("No se puede operar factorial de indefinido");

        a = -5;
        expect(() => { factorial(a) }).toThrow("No se puede operar un negativo");
    });


    test("test de endpoint /", async () => {

        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola mundo al usuario Luis Oliveros");
            })
    });

    test("test de endpoint operar", async () => {

        return await request(app)
            .get("/operar?a=30&b=30&oper=suma")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion suma de 30 y 30 es 60");
            })
    });

    test("test de endpoint operar -> multiplicar", async () => {

        return await request(app)
            .get("/operar?a=10&b=5&oper=multiplica")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion multiplica de 10 y 5 es 50");
            })
    });

    test("test de endpoint operar -> dividir", async () => {

        return await request(app)
            .get("/operar?a=20&b=10&oper=divide")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion divide de 20 y 10 es 2");
            })
    });

    test("test de endpoint operar -> potencia", async () => {

        return await request(app)
            .get("/operar?a=3&b=2&oper=potencia")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion potencia de base 3 y exponente 2 es 9");
            })
    });

    test("test de endpoint operar -> factorial", async () => {

        return await request(app)
            .get("/operar?a=5&oper=factorial")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion factorial de 5 es 120");
            })
    });

});