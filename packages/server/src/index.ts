import express, { Request, Response } from 'express';
import morgan from 'morgan';
import routes from './routes';

import path from 'path';
const app = express();
const PORT = 8080;
app.use(morgan("combined"))
app.set("port", process.env.PORT || PORT);

app.use(routes);

app.listen(app.get("port"), () => {
    console.log(`Server started at http://localhost:${app.get("port")}`);
});