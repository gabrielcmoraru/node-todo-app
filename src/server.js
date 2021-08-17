import cors from 'cors';
import express, { json } from 'express';
import DataCache from './dataCache/DataCache.js';
import Todo from './routes/todo.js';

const PORT = process.env.PORT || 3030;
const DB_NAME = 'todo.json';

// load in-memory data if we have any
const MemoryData = new DataCache(DB_NAME);
const app = express();

// CORS for react app, assuming port 3000
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// middleware for parsing json body
app.use(json());

// routes
app.use('/', Todo);

const startUp = async () => {
  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  // start server
  app.listen(PORT, () =>
    console.log(`Todo server opened on http://localhost:${PORT}`)
  );
};

startUp();

export { MemoryData };
