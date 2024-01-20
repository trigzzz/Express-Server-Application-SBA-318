import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiroutes.mjs';
import viewsRoutes from './routes/viewRoutes.mjs';
import customMiddleware1 from './middleware/middleware1.mjs';
import customMiddleware2 from './middleware/middleware2.mjs';
import errorMiddleware from './middleware/errorMiddleware.mjs';
import path from 'path';
import data from './data/index.mjs';

const app = express();

app.set('view engine', 'ejs');

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('CSS'));

// Custom Middleware
app.use(customMiddleware1);
app.use(customMiddleware2);

// Routes
app.use('/api', apiRoutes);
app.use('/', viewsRoutes);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});