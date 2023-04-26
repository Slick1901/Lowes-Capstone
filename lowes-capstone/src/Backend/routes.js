const express = require('express');
const router = express.Router();
const { createUser, validateUser } = require('./db');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await createUser(name, email, password);
    console.log('User created successfully!');
    res.send('User created successfully!');
  } catch (error) {
    console.log('Error creating user: ', error);
    res.status(500).send('Error creating user');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await validateUser(email, password);
    if (user) {
      console.log('User login successful');
      req.session.user = { id: user.id, username: user.username };
      res.redirect('/dashboard');
    } else {
      console.log('User login failed');
      res.status(401).send('User login failed');
    }
  } catch (error) {
    console.log('Error checking user login: ', error);
    res.status(500).send('Error checking user login');
  }
});

module.exports = router;
