import pontoModel from "../model/points-model.js"

const pontoController = (app) => {

    app.get('/ponto', async (req, res) => {
        try {
            const resposta = await pontoModel.pegaPontos()

            res.status(resposta.status).json({
                "pontos": resposta.dados,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "mensagem": error.mensagem,
                "erro": true
            })
        }

    })

    app.get('/ponto/irregular', async (req, res) => {
        try {
            const resposta = await pontoModel.pegaPontosIrregulares()

            res.status(resposta.status).json({
                "pontos": resposta.dados,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "mensagem": error.mensagem,
                "erro": true
            })
        }

    })

    app.get('/ponto/NomePonto/:NomePonto', async (req, res) => {
        const NomePonto = req.params.NomePonto

        try {
            const resposta = await pontoModel.pegaUmPonto(NomePonto)
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "ponto": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro": true
                })
            }

        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    })


    app.post('/ponto', async (req, res) => {
        const body = req.body
        try {
            const { status } = await pontoModel.pegaUmPonto(body.NomePonto)
            if (status === 404) {
                const resposta = await pontoModel.inserePonto(body)

                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro": false
                })
            } else {
                res.status(400).json({
                    "mensagem": `Ponto ${body.NomePonto} já existe`,
                    "erro": true
                })
            }

        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }

    })

    app.delete('/ponto/NomePonto/:NomePonto', async (req, res) => {
        const NomePonto = req.params.NomePonto
        try {
            const { status, mensagem } = await pontoModel.pegaUmPonto(NomePonto)
            if (status === 404) {
                res.status(404).json({
                    "mensagem": mensagem,
                    "erro": true
                })
            } else {
                const resposta = await pontoModel.deletaPonto(NomePonto)

                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro": false
                })
            }

        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    })

    app.put('/ponto/NomePonto/:NomePonto', async (req, res) => {
        const body = req.body
        const NomePonto = req.params.NomePonto
        try {
            const { status, mensagem } = await pontoModel.pegaUmPonto(NomePonto)
            if (status === 404) {
                res.status(404).json({
                    "mensagem": mensagem,
                    "erro": true
                })
            } else {
                const resposta = await pontoModel.atualizaPonto(NomePonto, body)

                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro": false
                })
            }

        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    })
}

export default pontoController
