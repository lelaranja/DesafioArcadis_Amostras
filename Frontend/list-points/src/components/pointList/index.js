import React from "react";
import ButtonAbove from "../buttonAbove";
import ButtonAdd from "../buttonAdd";
import MainButton from "../buttonAll";
import "./pointList.css"

const List = () => {
    return (
        <div>
            <header>
                <h2>Pontos cadastrados</h2>
                <MainButton>Listar todos os pontos</MainButton>
                <ButtonAbove>Pontos que violam a legislação</ButtonAbove>
                <ButtonAdd>Adicionar pontos</ButtonAdd>
            </header>
            <section className="lista">
                <div className='textList'>
                    <div>
                        <label>
                            Data da Coleta
                        </label>
                        <h4>08/02/2022</h4>
                    </div>
                    <div>
                        <label>
                            Identificação do Ponto
                        </label>
                        <h4>PA-05</h4>
                    </div>
                    <div>
                        <label>
                            Parâmetro
                        </label>
                        <h4>Cromo Total</h4>
                    </div>
                    <div>
                        <label>
                            Valor Amostrado
                        </label>
                        <h4>0.1</h4>
                    </div>
                    <div>
                        <label>
                            Unidade
                        </label>
                        <h4>mg/l</h4>
                    </div>
                    <div>
                        <label>
                            Coordenada X
                        </label>
                        <h4>658797.01</h4>
                    </div>
                    <div>
                        <label>
                            Coordenada Y
                        </label>
                        <h4>589742.03</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default List