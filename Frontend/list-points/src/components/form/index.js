import React, { useState } from "react";
import InputText from "../textForm";
import ButtonForm from "../buttonForm";
import "./form.css";


const FormAdd = () => {

    const [data, setData] = useState('');
    const [ponto, setPonto] = useState('');
    const [parametro, setParametro] = useState('');
    const [amostra, setAmostra] = useState('');
    const [unidade, setUnidade] = useState('');
    const [coordx, setCoordx] = useState('');
    const [coordy, setCoordy] = useState('');

    const toSave = (e) => {
        e.preventDefault()
        console.log('Ponto adicionado', data, ponto, parametro, amostra, unidade, coordx, coordy)
    }

    return (
        <section className="forms-cadastro">
            <form onSubmit={toSave}>
                <h4>Cadastre um novo ponto/parâmetro</h4>
                <InputText type="date"
                    need={true}
                    label="Data da Coleta"
                    placeholder="Digite a data (DD/MM/AAAA)"
                    valor={data}
                    toChanged={valor => setData(valor)}
                />
                <InputText need={true}
                    label="Identificação do ponto"
                    placeholder="Digite a identificação do poço"
                    valor={ponto}
                    toChanged={valor => setPonto(valor)}
                />
                <InputText need={true}
                    label="Parâmetro Amostrado"
                    placeholder="Informe o parâmetro"
                    valor={parametro}
                    toChanged={valor => setParametro(valor)}
                />
                <InputText need={true}
                    label="Valor Amostrado"
                    placeholder="Informe o valor amostrado"
                    valor={amostra}
                    toChanged={valor => setAmostra(valor)}
                />
                <InputText need={true}
                    label="Unidade"
                    placeholder="Unidade do valor amostrado (ex: mg/l)"
                    valor={unidade}
                    toChanged={valor => setUnidade(valor)}
                />
                <InputText need={true}
                    label="Coordenada X"
                    placeholder="Entre com a coordenada X"
                    valor={coordx}
                    toChanged={valor => setCoordx(valor)}
                />
                <InputText need={true}
                    label="Coordenada Y"
                    placeholder="Entre com a coordenada Y"
                    valor={coordy}
                    toChanged={valor => setCoordy(valor)}
                />
                <div className="btInput">
                    <ButtonForm className='btInput' />
                </div>
            </form>
        </section>
    )
}

export default FormAdd