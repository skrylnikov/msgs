import { Router, IResponse } from '../types/express';


const router = Router();

router.post('/', (req, res: IResponse) => {
  res.sendMsg(req.body);
});

export const echo = <T>(data: T) => {
  console.log(data);
  return data;
};

export default router;
