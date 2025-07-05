// index.js
import express from 'express';
import cors from 'cors';
import businessRoutes from './routes/business.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', businessRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
