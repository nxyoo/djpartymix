import express from 'express';
import cors from 'cors';
import partyRoutes from "./routes/partyRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/party', partyRoutes);

export default app;
