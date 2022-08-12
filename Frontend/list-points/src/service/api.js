import axios from "axios";

const instance = axios.create({
    baseURL: "https://desafio-arcadis.herokuapp.com/",
});

export const getPontos = async (endPoint) => {
    const response = await instance.get(`/${endPoint}`);
    const json = await response.data.pontos;
    return json;
};

export const postPonto = async (body) => {
    const response = await instance.post("/ponto", body);
    const json = await response.data.msg;
    console.log(json);
    return json;
};
