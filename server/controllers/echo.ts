import { Router, IResponse } from '../types/express';


const router = Router();

router.post('/', (req, res: IResponse) => {
  res.sendMsg(req.body);
});

export default router;