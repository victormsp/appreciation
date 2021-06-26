import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.get('/test', (request, response) => {
  return response.send('Hello!');
});

app.post('/test-post', (request, response) => {
  return response.send('Test post');
});

app.listen(3000, () => console.log('Server is running.'));
