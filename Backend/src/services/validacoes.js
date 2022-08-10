import * as moment from 'moment';

class ValidaCampos {
    static isEmpty(dados) {
        if (!dados || dados.length <= 0) return true;
        else return false;
    }
    static reqIsEmpty(dados) {
        return new Promise((resolve, reject) => {
            if (!this.someDataIsEmpty(dados)) {
                reject(
                    new ErrosModel(
                        "Parece que faltam alguns dados em sua requisição",
                        400
                    )
                );
            } else {
                resolve();
            }
        });
    }
    static notInBlank(dados) {
        return new Promise((resolve, reject) => {
            if (dados.status === 404) reject();
            else resolve();
        });
    }
    static isString(dados) {
        if (typeof dados === "string" || dados instanceof String) {
            return true;
        } else {
            return false;
        }
    }

    static isNumber(dados) {
        if (typeof dados === "number" || dados instanceof Number) {
            return true;
        } else {
            return false;
        }
    }
}

export default ValidaCampos