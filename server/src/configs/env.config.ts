import dotenv from 'dotenv';
dotenv.config();

type EnvironmentConfig = {
  PORT: Number;
  OMDB_API_URL: string;
  OMDB_API_KEY: string;
};

const envConfig: EnvironmentConfig = {
  PORT: Number(process.env.PORT),
  OMDB_API_URL: process.env.OMDB_API_URL!,
  OMDB_API_KEY: process.env.OMD_API_KEY!
};

export default envConfig;
