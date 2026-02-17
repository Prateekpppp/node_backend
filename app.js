// const express = require('express');
import express from 'express';
import ServerlessHttp from 'serverless-http';
import product from './routes/productRoutes.js';

const app =express();

// Route

// app.use("/.netlify/functions/app", product);

app.use('/api/v1',product);

// export const handler = ServerlessHttp(app);

export default app;