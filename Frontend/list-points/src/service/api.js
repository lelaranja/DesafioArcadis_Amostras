import axios from "axios";

const instance = axios.create({
    baseURL: "https://desafio-arcadis.herokuapp.com/",
});

export const getPontos = async () => {
    const response = await instance.get("/pontos");
    const json = await response.data.pontos;
    return json;
};

export const getPontosIrregulares = async () => {
    const response = await instance.get("/ponto/irregular");
    const json = await response.data.pontos;
    return json;
};

export const postPonto = async (body) => {
    const response = await instance.post("/post", body);
    const json = await response.data.msg;
    return json;
};

export default api