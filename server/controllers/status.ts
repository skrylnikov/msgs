import { Router, IResponse } from '../types/express';


const router = Router();

router.get('/', (req, res: IResponse) => {

  const status = {
    cpu: process.cpuUsage(),
    memory: process.memoryUsage(),
    status: 'ok',
    uptime: process.uptime(),
    nodeVersion: process.version,
  };

  res.sendMsg(status);
});

export default router;