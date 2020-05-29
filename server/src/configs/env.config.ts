import dotenv from 'dotenv';
dotenv.config();

type EnvironmentConfig = {
  PORT: Number;
};

const envConfig: EnvironmentConfig = {
  PORT: Number(process.env.PORT)
};

export default envConfig;
