# DESAFIO ARCADIS - DESENVOLVEDOR JUNIOR

Projeto desenvolvido para a etapa de desafio técnico para a vaga de Desenvolvedor Full Stack Jr.

## ⚙️ Backend
Projeto foi desenvolvido utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). Como banco de dados, foi utilizado o [SQLite](https://www.sqlite.org/index.html).


# Tabela de conteúdos

<!--ts-->

- [Pré-requisitos](#-pré-requisitos)
- [Packages](#-packages)
- [Instalação](#-instalação-da-aplicação)
- [Inicializando banco de dados](#%EF%B8%8F-inicializando-o-banco-de-dados)
- [Testes](#bug-testes)
- [Rotas](#%EF%B8%8F-rotas)
- [Hospedagem no Heroku](#-link-do-heroku)
<!--te-->

## 📚 Pré-requisitos

- Node.js v.16.15.1
- NPM v.8.11.0

## 📦 Packages

- <a href="https://nodejs.org/en/">Node.Js</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a>
- <a href="https://nodemon.io/">Nodemon</a>
- <a href="https://www.npmjs.com/package/jest">Jest</a>
- <a href="https://www.npmjs.com/package/supertest">Supertest</a>
- <a href="https://www.npmjs.com/package/cors">Cors</a>

## 📥 Instalação da aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/lelaranja/DesafioArcadis_Amostras.git
```

Entrando na pasta:

```
cd DesafioArcadis_Amostras/Backend
```

Instalando apenas pacotes necessários para funcionamento da API:

```
npm i --production
```

Instalando todos os pacotes:

```
npm install
```

Rodando o projeto:

```
npm start
```

## 🗂️ Inicializando o banco de dados

Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:

```
npm run db
```

## :bug: Testes


Necessária a instalação de todas as dependências para o funcionamento.

```
npm test
```

## 🏎️ Rotas

### Pontos

- **GET /ponto**

  Esquema da resposta

  ```json
   {
			"ID": 5,
			"NomePonto": "PV-9",
			"NomeParametro": "Cromo total",
			"CoordX": 687394.84,
			"CoordY": 7465628.92,
			"ValorAmostrado": 0.5,
			"UnidadeMedida": "mg/l",
			"DataColeta": "10/06/2022"
		}
  ```
  
- **GET /ponto/NomePonto/:NomePonto**
  Esquema da resposta
  ```json
   {
			"ID": 5,
			"NomePonto": "PV-9",
			"NomeParametro": "Cromo total",
			"CoordX": 687394.84,
			"CoordY": 7465628.92,
			"ValorAmostrado": 0.5,
			"UnidadeMedida": "mg/l",
			"DataColeta": "10/06/2022"
		}
  ```
  
  - **GET /ponto/irregular**
  Esquema da resposta
  ```json
    {
			"ID": 1,
			"NomePonto": "PV-01",
			"NomeParametro": "DBO",
			"CoordX": 333287.02,
			"CoordY": 7394586.09,
			"ValorAmostrado": 6,
			"UnidadeMedida": "mg O2/l",
			"DataColeta": "22/07/2022"
		}
  ```
  
- **POST /ponto**
  Esquema da requisição
  ```json
  		{
			"NomePonto": "PL-26",
			"NomeParametro": "Cromo total",
			"CoordX": 687394.84,
			"CoordY": 7465628.92,
			"ValorAmostrado": 0.5,
			"UnidadeMedida": "mg/l",
			"DataColeta": "10/08/2022"
		}
  ```
  Esquema da resposta
  ```json
      {
      "msg": "Ponto inserido com sucesso",
      "Ponto": {
        "NomePonto": "PL-26",
        "NomeParametro": "Cromo total",
        "CoordX": 687394.84,
        "CoordY": 7465628.92,
        "ValorAmostrado": 0.5,
        "UnidadeMedida": "mg/l",
        "DataColeta": "10/08/2022"
      },
      "erro": false
    }
  ```
- **PUT /ponto/NomePonto/:NomePonto**
  Esquema da requisição
  ```json
    {
        "NomePonto": "P-50",
        "NomeParametro": "Cromo total",
        "CoordX": 687394.84,
        "CoordY": 7465628.92,
        "ValorAmostrado": 10,
        "UnidadeMedida": "mg/l",
        "DataColeta": "10/06/2022"
      }
  ```
  Esquema da resposta
  ```json
    {
      "mensagem": "Ponto: PV-1 atualizado com sucesso",
      "erro": false,
    }
  ```
- **DELETE /ponto/NomePonto/:NomePonto**
  Esquema da resposta
  ```json
      {
        "mensagem": "Ponto P-20 deletado com sucesso",
        "erro": false
      }
  ```

### ERROS GERAIS
Esquema da resposta
- Busca por dado não cadastrado
```json
  {
    "msg": "Ponto PV-05 não encontrado"
  }
```
- Post com dados incorretos/vazios
  - Data incorreta
```json
  {
    "msg": "Formato de data incorreto (DD/MM/AAAA)"
  }
```

- Data vazia
```json
  {
    "msg": "Campo data vazio. Preencha no modelo:(DD/MM/AAAA)"
  }
```

  - Coordenadas incorretas
```json
  {
    "msg": "Formato de coordenadas incorreto"
  }
```

- Coordenadas vazias
```json
  {
    "msg": "Campos de coordenadas vazios"
  }
```

## 🔌 Link do Heroku
<a href="https://desafio-arcadis.herokuapp.com/">desafio-arcadis</a>

## 🖼️ Frontend
Projeto foi desenvolvido para consumo da API desenvolvida no backend, utilizando a biblioteca react [React.Js](https://pt-br.reactjs.org/).

# Tabela de conteúdos

<!--ts-->

- [Pré-requisitos](#-pré-requisitos-1)
- [Packages](#-packages-1)
- [Instalação](#-instalação-da-aplicação-1)
- [Hospedagem no Heroku](#-link-do-heroku-1)
<!--te-->

## 📚 Pré-requisitos

- React.js v.18.2.0
- NPM v.8.11.0

## 📦 Packages

- <a href="https://nodejs.org/en/">Node.Js</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://www.npmjs.com/package/axios">Axios</a>

## 📥 Instalação da aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/lelaranja/DesafioArcadis_Amostras.git
```

Entrando na pasta:

```
cd DesafioArcadis_Amostras/Frontend/list-points
```

Instalando todos os pacotes:

```
npm install
```

Rodando o projeto:

```
npm start
```

## 🔌 Link do Heroku
<a href="https://arcadis-desafio-frontend.herokuapp.com/">desafio-arcadis-frontend</a>
