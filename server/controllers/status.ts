
export const status = () => ({
  cpu: process.cpuUsage(),
  memory: process.memoryUsage(),
  status: 'ok',
  uptime: process.uptime(),
  nodeVersion: process.version,
});
