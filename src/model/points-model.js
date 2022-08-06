import pontosDAO from "../DAO/points-dao.js"
import {
    criaUsuario,
    validaUsuario,
} from "../services/usuario.js"

const pontoModel = {

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
                    "mensagem": `Ponto ${email} não encontrado`,
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
            const novoPonto = criaPonto(ponto)
            const mensagem = await pontosDAO.inserePonto(novoPonto)
            return {
                "mensagem": mensagem,
                "status": 201
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
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
            const mensagem = await usuarioDAO.atualizaPonto(NomePonto, novosDados)
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