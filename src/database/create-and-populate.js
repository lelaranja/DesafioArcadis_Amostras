import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('database.db');

const PONTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PONTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NomePonto" varchar(64),
    "NomeParametro" varchar(64),
    "CoordX" int,
    "CoordY" int,
    "ValorAmostrado" int,
    "DataColeta" varchar (64)
);`;

const ADD_PONTOS_DATA = `
INSERT INTO PONTOS (NomePonto, NomeParametro, CoordX, CoordY, ValorAmostrado, DataColeta)
VALUES 
    ('PV-01', 'DBO', 333287.02, 7394586.09, 6, '22/07/2022'),
    ('PA-05', 'Alumínio Dissolvido', 342593.07, 7380989.23, 0.1, '02/05/2022'),
    ('P-20', 'Chumbo Total', 687394.84, 7465628.92, 0.01, '10/06/2022')
`

function criaTabelaPts() {
    db.run(PONTOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de pontos");
    });
}


function populaTabelaPts() {
    db.run(ADD_PONTOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de pontos");
    });
}

db.serialize(() => {
    criaTabelaPts();
    populaTabelaPts();
});
