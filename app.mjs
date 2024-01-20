import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiroutes.mjs';
import viewsRoutes from './routes/viewsRoutes.mjs';
import customMiddleware1 from './middleware/customMiddleware1.mjs';
import customMiddleware2 from './middleware/customMiddleware2.mjs';
import errorMiddleware from './middleware/errorMiddleware.mjs';

const app = express();

app.set('view engine', 'mjs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Custom Middleware
app.use(customMiddleware1);
app.use(customMiddleware2);

//Error middleware
app.use(errorMiddleware);

// Routes
app.use('/api', apiRoutes);
app.use('/', viewsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
