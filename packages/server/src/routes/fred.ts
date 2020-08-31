import { Router, Request, Response, NextFunction } from "express";
import * as Fred from '../models/fred';

const router: Router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    // when res.send gets called later, it is divorced from its dynamic scope--which means that calls to this inside of the send method,
    const result = await Fred.get();
    return res.json(result);
});

export default router;