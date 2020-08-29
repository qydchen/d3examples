import fred from './fred'
import { Router, Request, Response } from 'express';

const router: Router = Router();

router.use('/fred', fred);

router.get("/", (req: Request, res: Response) => {
    res.send({ message: "hello" });
})

export default router;