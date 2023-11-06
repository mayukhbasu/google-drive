import dotenv from 'dotenv';

dotenv.config();

interface DBConfig {
  uri: string;
}

const dbConfig: DBConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/drive-server'
}

export default dbConfig