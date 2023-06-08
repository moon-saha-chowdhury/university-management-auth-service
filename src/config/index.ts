import dotenv from 'dotenv'
import path from 'path' //path node er default module
dotenv.config({ path: path.join(process.cwd(), '.env') }) //cwd mean current directory the folder where main project exist

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
}
