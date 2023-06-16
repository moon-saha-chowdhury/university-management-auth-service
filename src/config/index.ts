import dotenv from 'dotenv';
import path from 'path'; //path node er default module
dotenv.config({ path: path.join(process.cwd(), '.env') }); //cwd mean current directory the folder where main project exist

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
};
