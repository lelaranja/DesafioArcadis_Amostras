import pontoController from "./controller/points-controller.js";

import express from "express";

const app = express();

app.use(express.json());

pontoController(app);
export default app;