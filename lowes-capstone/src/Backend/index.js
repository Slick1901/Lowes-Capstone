const express = require('express');
const session = require('express-session');
const routes = require('./routes');

const app = express();

// middleware to handle POST requests
app.use(express.urlencoded({ extended: false }));

// middleware to handle sessions
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// use routes as middleware
app.use('/', routes);

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
