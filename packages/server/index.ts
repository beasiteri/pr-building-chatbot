import dotenv from 'dotenv';
import express from 'express';
import router from './routes';

// Read all the variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

// Start web server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
