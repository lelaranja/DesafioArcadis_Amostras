const arsenioChumbo = (parametro, valor, unidade) => {
    if ((parametro == "Arsênio total" || parametro == "Chumbo total") && (valor <= 0.01) && (unidade == "mg/l")) {
        return true
    } else {
        return false
    }
}

const aluminioDissolvido = (parametro, valor, unidade) => {
    if ((parametro.toLowerCase() == "aluminio dissolvido") && (valor <= 0.1) && (unidade == "mg/l")) {
        return true
    } else {
        return false
    }
}

const cobreDissolvido = (parametro, valor, unidade) => {
    if ((parametro == "Cobre dissolvido") && (valor <= 0.009) && (unidade == "mg/l")) {
        return true
    } else {
        return false
    }
}

const escherichiaColi = (parametro, valor, unidade) => {
    if ((parametro == "Escherichia coli") && (valor <= 1000) && (unidade == "NPM/100ml")) {
        return true
    } else {
        return false
    }
}

const cromoTotal = (parametro, valor, unidade) => {
    if ((parametro == "Cromo total") && (valor <= 0.05) && (unidade == "mg/l")) {
        return true
    } else {
        return false
    }
}

const cadmioTotal = (parametro, valor, unidade) => {
    if ((parametro == "Cádmio total") && (valor <= 0.001) && (unidade == "mg/l")) {
        return true
    } else {
        return false
    }
}

const dBO = (parametro, valor, unidade) => {
    if ((parametro == "DBO") && (valor <= 5) && (unidade == "mg O2/l")) {
        return true
    } else {
        return false
    }
}

export const validaParams = (pontos) => {
    if (pontos.NomeParametro == 'Aluminio dissolvido') {
        return pontos.ValorAmostrado <= 0.1 && pontos.UnidadeMedida == "mg/l"
    }
    else if (pontos.NomeParametro == "Arsênio total" || pontos.NomeParametro == "Chumbo total") {
        return pontos.ValorAmostrado <= 0.01 && pontos.UnidadeMedida == "mg/l"
    }
    else if (pontos.NomeParametro == "Cobre dissolvido") {
        return pontos.ValorAmostrado <= 0.009 && pontos.UnidadeMedida == "mg/l"
    }
    else if (pontos.NomeParametro == "Escherichia coli") {
        return pontos.ValorAmostrado <= 1000 && pontos.UnidadeMedida == "NPM/100ml"
    }
    else if (pontos.NomeParametro == "Cromo total") {
        return pontos.ValorAmostrado <= 0.05 && pontos.UnidadeMedida == "mg/l"
    }
    else if (pontos.NomeParametro == "Cádmio total") {
        return pontos.ValorAmostrado <= 0.001 && pontos.UnidadeMedida == "mg/l"
    }
    else if (pontos.NomeParametro == "DBO") {
        return pontos.ValorAmostrado <= 5 && pontos.UnidadeMedida == "mg O2/l"
    }
}
