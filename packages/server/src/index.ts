import express, { Request, Response } from 'express';
import morgan from 'morgan';
import fetch from 'node-fetch';
import { API_KEY } from '../__secret__/fred-api';

import path from 'path';
const app = express();
const PORT = 8080;
app.use(morgan("combined"))
app.set("port", process.env.PORT || PORT);

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "hello" });
})

app.get("/fred", async (req: Request, res: Response) => {
    const response = await fetch(`https://api.stlouisfed.org/fred/category?category_id=125&api_key=${API_KEY}&file_type=json`);
    const json = await response.json();
    res.send(json);
})

app.listen(app.get("port"), () => {
    console.log(`Server started at http://localhost:${app.get("port")}`);
});