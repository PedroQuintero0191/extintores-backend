import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRoutes from './routes/user.routes'
import customerRoutes from './routes/customer.routes'
import extingRoutes from './routes/exting.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);
app.use(customerRoutes);
app.use(extingRoutes);

app.listen(3001);
console.log('Server on port', 3001);