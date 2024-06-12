import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/autherRoutes';
import userRoutes from './routes/userRoutes';
import reviewRoutes from './routes/reviewRoutes';
import ratingRoutes from './routes/ratingRoutes';
import paymentRoutes from './routes/paymentRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', bookRoutes);
app.use('/api', authorRoutes);
app.use('/api', userRoutes);
app.use('/api', reviewRoutes);
app.use('/api', ratingRoutes);
app.use('/api', paymentRoutes);


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

