import mongoose from 'mongoose';
import config from './config';

const db = async () => {
  await mongoose
    .connect(config.mongoUrl as string)
    .then(() => {
      console.log('db connected');
    })
    .catch((error) => {
      console.log('Error connecting', error);
    });
};

export default db;
