import { useEffect, useState } from 'react';
import React from "react";
import Button from "../button";
import "./pointList.css"
import FormAdd from '../form';
import BasicModal from '../modal';
import ItemList from '../itemList';
import { getPontos } from '../../service/api';


const List = () => {

    const [open, setOpen] = useState(false);
    const [dados, setDados] = useState();
    const [reload, setReload] = useState(false);
    const [busca, setBusca] = useState("");


    const handleOpenModal = () => {
        setOpen(true)
    }

    const request = async (close) => {
        const response = await getPontos(close)
        setDados(response)
    }

    useEffect(() => { request("ponto") }, [])

    useEffect(() => {
        if (reload) {
            request("ponto")
            setReload(false)
        }
    }, [reload])

    return (
        <div>
            <header>
                <h2>Pontos cadastrados</h2>
                <Button onClick={() => request("ponto")}>Listar todos os pontos</Button>
                <Button onClick={() => request("ponto/irregular")}>Pontos que violam a legislação</Button>
                <Button onClick={handleOpenModal}>Adicionar pontos</Button>
            </header>
            <section className="search-input" >
                <label>Busca:</label>
                <input type="search" value={busca} onChange={(e) => setBusca(e.target.value)} />
            </section>
            <section className="lista">
                {!!dados && dados.filter((val) => {
                    if (busca === "") {
                        return val
                    } else if (val.NomePonto.toLowerCase().includes(busca.toLowerCase()) ||
                        val.NomeParametro.toLowerCase().includes(busca.toLowerCase())) {
                        return val
                    }
                }).map((item) => {
                    return (
                        <ItemList key={item.ID}
                            NomePonto={item.NomePonto}
                            NomeParametro={item.NomeParametro}
                            CoordX={item.CoordX}
                            CoordY={item.CoordY}
                            ValorAmostrado={item.ValorAmostrado}
                            UnidadeMedida={item.UnidadeMedida}
                            DataColeta={item.DataColeta}
                        />
                    )
                })}
            </section>
            {open && <BasicModal open={open} setOpen={setOpen}>
                <FormAdd setOpen={setOpen} setReload={setReload} />
            </BasicModal>}
        </div>
    )
}

export default List