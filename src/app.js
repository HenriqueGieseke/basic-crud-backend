import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { usersRouter } from './routes/usersRouter.js';

dotenv.config();

const PORT = process.env.PORT || 7000;
const host = '0.0.0.0';

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.phrrv.mongodb.net/randomUsers?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.log('MongoDB connection failure: ' + err);
  }
})();

const app = express();

app.use(cors());

app.use(express.json());

app.use(usersRouter);

app.listen(PORT, host, () => {
  console.log('API online');
});
