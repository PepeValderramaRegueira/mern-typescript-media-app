import dotenv from 'dotenv';
dotenv.config();

type EnvironmentConfig = {
  PORT: Number;
  OMDB_API_URL: String;
};

const envConfig: EnvironmentConfig = {
  PORT: Number(process.env.PORT),
  OMDB_API_URL: process.env.OMDB_API_URL!
};

export default envConfig;
