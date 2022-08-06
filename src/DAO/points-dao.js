import db from '../database/db-sqlite.js'

const pontosDAO = {
    pegaTodosPontos: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM PONTOS', (erro, linhas) => {
                if (erro) {
                    reject(erro)
                } else {
                    resolve(linhas)
                }
            })
        })

    },

    pegaUmPonto: (NomePonto) => {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM PONTOS WHERE NOMEPONTO = ?', NomePonto,
                (erro, dado) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve(dado)
                    }
                })
        })

    },

    inserePonto: (ponto) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO PONTOS (NomePonto, NomeParametro, CoordX, CoordY, ValorAmostrado, DataColeta)
            VALUES (?, ?, ?, ?, ?, ?)`, ponto.NomePonto, ponto.NomeParametro, ponto.CoordX, ponto.CoordY, ponto.ValorAmostrada, ponto.DataColeta,
                (erro) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve("Ponto inserido com sucesso")
                    }
                })
        })
    },

    deletaPonto: (NomePonto) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM PONTOS WHERE NOMEPONTO = ?`, NomePonto,
                (erro) => {
                    if (erro) {
                        reject(erro)
                    } else {
                        resolve(`Ponto com código: ${email}, deletado com sucesso`)
                    }
                })
        })
    },

    atualizaPonto: (NomePonto, novoPonto) => {
        const ATUALIZA_PEDIDO = `UPDATE PEDIDOS SET NomePonto = ?, NomeParametro = ?, CoordX = ?, CoordY = ?, ValorAmostrado = ?, DataColeta = ?  WHERE NomePonto = ?`

        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_PEDIDO, novoPonto.NomePonto, novoPonto.NomeParametro, novoPonto.CoordX, novoPonto.CoordY, novoPonto.ValorAmostrado, novoPonto.DataColeta,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(`Ponto: ${NomePonto} atualizado com sucesso`)
                    }
                })
        })
    }

}

export default pontosDAO