const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Missing request body');
  }
  const user = req.body;
  db.createUser(user, (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      return res.status(500).send('Error creating user');
    } else {
      res.status(201).send('User created');
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});