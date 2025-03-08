import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet'; 
import connectDB from './connections/connection.js';
dotenv.config();

const port = process.env.PORT || 8000; 
const app = express();
connectDB(process.env.DB_USERNAME, process.env.DB_PASSWORD);
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



