import express, { Request, Response, response } from 'express';
import { API_KEY } from '../__secret__/fred-api';
import Fred from 'fred-api';
import path from 'path';
const app = express();
const PORT = 8080;

const fred = new Fred(API_KEY);

app.set("port", process.env.PORT || PORT);

app.get("/", async (req: Request, res: Response) => {
    console.log('wtf');
    res.send({ message: "hello" });
})

app.get("/fred", async (req: Request, res: Response) => {
    await fred.getSeries({ series_id: "GNPCA" });
    res.send(response.json());;
})

app.listen(app.get("port"), () => {
    console.log(`Server started at http://localhost:${app.get("port")}`);
});