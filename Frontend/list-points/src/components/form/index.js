import React, { useState } from "react";
import InputText from "../textForm";
import ButtonForm from "../buttonForm";
import "./form.css";
import { postPonto } from "../../service/api";


const FormAdd = ({ setOpen, setReload }) => {
    const [data, setData] = useState('');
    const [ponto, setPonto] = useState('');
    const [parametro, setParametro] = useState('');
    const [amostra, setAmostra] = useState('');
    const [unidade, setUnidade] = useState('');
    const [coordx, setCoordx] = useState('');
    const [coordy, setCoordy] = useState('');

    const toSave = async (e) => {
        e.preventDefault()
        await postPonto({
            DataColeta: data,
            NomePonto: ponto,
            NomeParametro: parametro,
            ValorAmostra: amostra,
            UnidadeMedida: unidade,
            CoordX: coordx,
            CoordY: coordy
        })
        alert("Ponto adicionado com sucesso!")
        setOpen(false)
        setReload(true)
        console.log('Ponto adicionado', data, ponto, parametro, amostra, unidade, coordx, coordy)
        console.log(typeof amostra, { data });
    }

    return (
        <section className="forms-cadastro">
            <form >
                <InputText tipo="date"
                    obrigatorio={true}
                    label="Data da Coleta"
                    placeholder="Digite a data (DD/MM/AAAA)"
                    valor={data}
                    toChanged={valor => setData(valor)}
                />
                <InputText obrigatorio={true}
                    label="Identificação do ponto"
                    placeholder="Digite a identificação do poço"
                    valor={ponto}
                    toChanged={valor => setPonto(valor)}
                />
                <InputText obrigatorio={true}
                    label="Parâmetro Amostrado"
                    placeholder="Informe o parâmetro"
                    valor={parametro}
                    toChanged={valor => setParametro(valor)}
                />
                <InputText obrigatorio={true}
                    label="Valor Amostrado"
                    placeholder="Informe o valor amostrado"
                    valor={amostra}
                    toChanged={valor => setAmostra(valor)}
                />
                <InputText obrigatorio={true}
                    label="Unidade"
                    placeholder="Unidade do valor amostrado (ex: mg/l)"
                    valor={unidade}
                    toChanged={valor => setUnidade(valor)}
                />
                <InputText obrigatorio={true}
                    label="Coordenada X"
                    placeholder="Entre com a coordenada X"
                    valor={coordx}
                    toChanged={valor => setCoordx(valor)}
                />
                <InputText obrigatorio={true}
                    label="Coordenada Y"
                    placeholder="Entre com a coordenada Y"
                    valor={coordy}
                    toChanged={valor => setCoordy(valor)}
                />
                <div className="btInput">
                    <ButtonForm className='btInput' onClick={toSave} />
                </div>
            </form>
        </section>
    )
}

export default FormAdd