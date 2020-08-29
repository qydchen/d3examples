import { Router, Request, Response, NextFunction } from "express";
import * as Fred from '../models/fred';

const router: Router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    // when res.send gets called later, it is divorced from its dynamic scope--which means that calls to this inside of the send method,
    Fred.get(res.send.bind(res));
});

export default router;