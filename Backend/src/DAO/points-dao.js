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
            db.run(`INSERT INTO PONTOS (NomePonto, NomeParametro, CoordX, CoordY, ValorAmostrado, UnidadeMedida, DataColeta)
            VALUES (?, ?, ?, ?, ?, ?, ?)`, ponto.NomePonto, ponto.NomeParametro, ponto.CoordX, ponto.CoordY, ponto.ValorAmostrado, ponto.UnidadeMedida, ponto.DataColeta,
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
                        resolve(`Ponto com código: ${NomePonto}, deletado com sucesso`)
                    }
                })
        })
    },

    atualizaPonto: (NomePonto, novoPonto) => {
        const ATUALIZA_PONTO = `UPDATE PONTOS SET NomePonto = ?, NomeParametro = ?, CoordX = ?, CoordY = ?, ValorAmostrado = ?, UnidadeMedida = ?, DataColeta = ?  WHERE NomePonto = ?`
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_PONTO, novoPonto.NomePonto, novoPonto.NomeParametro, novoPonto.CoordX, novoPonto.CoordY, novoPonto.ValorAmostrado, ponto.UnidadeMedida, novoPonto.DataColeta,
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