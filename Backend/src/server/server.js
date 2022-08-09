import app from "../app.js";

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Servidor online, endereço: http://localhost:${port}`);
});