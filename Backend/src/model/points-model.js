import pontosDAO from "../DAO/points-dao.js"
import { validaParams, validaCoord, validaData } from "../services/filtroValida.js"

const pontoModel = {

    criaPonto: async (body) => {
        try {
            await validaCoord(body.CoordX, body.CoordY)
            return {
                "NomePonto": body.NomePonto,
                "NomeParametro": body.NomeParametro,
                "CoordX": body.CoordX,
                "CoordY": body.CoordY,
                "ValorAmostrado": body.ValorAmostrado,
                "UnidadeMedida": body.UnidadeMedida,
                "DataColeta": body.DataColeta
            }
        } catch (erro) {
            throw erro
        }
    },


    pegaPontos: async () => {
        try {
            const dados = await pontosDAO.pegaTodosPontos()
            return {
                "dados": dados,
                "status": 200
            }

        } catch (error) {
            throw error
        }
    },

    pegaPontosIrregulares: async () => {
        try {
            const dados = await pontosDAO.pegaTodosPontos()
            const dadosFiltro = await dados.filter((ponto) => { if (validaParams(ponto) == false) { return ponto } })
            return {
                "dados": dadosFiltro,
                "status": 200
            }

        } catch (error) {
            throw error
        }
    },

    pegaUmPonto: async (NomePonto) => {
        try {
            const dados = await pontosDAO.pegaUmPonto(NomePonto)
            if (dados) {
                return {
                    "dados": dados,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Ponto ${NomePonto} não encontrado`,
                    "status": 404
                }
            }

        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    },

    inserePonto: async (ponto) => {
        try {
            const novoPonto = await pontoModel.criaPonto(ponto)
            const mensagem = await pontosDAO.inserePonto(novoPonto)
            return mensagem
        } catch (error) {
            throw error
        }
    },

    deletaPonto: async (NomePonto) => {
        try {
            const mensagem = await pontosDAO.deletaPonto(NomePonto)
            return {
                "mensagem": mensagem,
                "status": 200
            }

        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    },

    atualizaPonto: async (NomePonto, novosDados) => {
        try {
            const mensagem = await pontosDAO.atualizaPonto(NomePonto, novosDados)
            return {
                "mensagem": mensagem,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    },

}

export default pontoModel