import app from '../../src/app.js'
import request from 'supertest'

const mock = {
    "NomePonto": "nome",
    "NomeParametro": "elemento",
    "CoordX": 111111.22,
    "CoordY": 2145786.00,
    "ValorAmostrado": 0.1,
    "UnidadeMedida": "mg/l",
    "DataColeta": "11/11/2020",
}

describe("Testando rotas pontos", () => {
    test("Rota GET", async () => {
        const resposta = await request(app).get('/ponto')
        expect(resposta.status).toBe(200)
    })

    test("Rota POST", async () => {

        const resposta = await request(app).post('/ponto')
            .send(mock)
        expect(resposta.status).toBe(200)
    })
})