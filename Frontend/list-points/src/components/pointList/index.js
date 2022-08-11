import Modal from 'react-modal';
import { useState } from 'react';
import React from "react";
import Button from "../button";
import "./pointList.css"
import FormAdd from '../form';

Modal.setAppElement('#root')

const List = () => {

    const [modalIsOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        return setIsOpen(true)
    }

    const handleCloseModal = () => {
        return setIsOpen(false)
    }


    return (
        <div>
            <header>
                <h2>Pontos cadastrados</h2>
                <Button id="getAll">Listar todos os pontos</Button>
                <Button id="getIrregular">Pontos que violam a legislação</Button>
                <Button onClick={handleOpenModal} >Adicionar pontos</Button>
                <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                    <FormAdd />
                </Modal>
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