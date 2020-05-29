import app from '../app';
import envConfig from './../configs/env.config';

const { PORT } = envConfig;

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
})
