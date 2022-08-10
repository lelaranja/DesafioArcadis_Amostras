import pontoController from "./controller/points-controller.js";

import express from "express";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());

pontoController(app);
export default app;