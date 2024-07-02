import dotenv from 'dotenv';

dotenv.config();

export default {
      env: process.env.NODE_ENV || 'development',
      port: process.env.PORT || 8080,
      number: process.env.PHONE,
      mail: {
            emailUser: process.env.USER,
            emailPassword: process.env.PASSWORD
      }
}