import React from 'react'
import "./itemList.css"

const ItemList = ({ NomePonto, NomeParametro, CoordX, CoordY, ValorAmostrado, UnidadeMedida, DataColeta }) => {
    return (
        <div className='textList'>
            <fieldset>
                <label>
                    Data da Coleta
                </label>
                <h4>{DataColeta}</h4>
            </fieldset>
            <fieldset>
                <label>
                    Identificação do Ponto
                </label>
                <h4>{NomePonto}</h4>
            </fieldset>
            <fieldset>
                <label>
                    Parâmetro
                </label>
                <h4>{NomeParametro}</h4>
            </fieldset>
            <fieldset>
                <label>
                    Valor Amostrado
                </label>
                <h4>{ValorAmostrado}</h4>
            </fieldset>
            <fieldset>
                <label>
                    Unidade
                </label>
                <h4>{UnidadeMedida}</h4>
            </fieldset>
            <fieldset>
                <label>
                    Coordenada X
                </label>
                <h4>{CoordX}</h4>
            </fieldset>
            <fieldset>
                <label>
                    Coordenada Y
                </label>
                <h4>{CoordY}</h4>
            </fieldset>
        </div>
    )
}

export default ItemList