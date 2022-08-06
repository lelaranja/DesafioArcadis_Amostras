import PointsController from "./controller/points-controller.js";

import express from "express";

const app = express();

app.use(express.json());

PointsController.routes(app);
export default app;