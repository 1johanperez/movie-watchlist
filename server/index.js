const express = require('express');
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!!! WHOHOO!`);
});

app.get('/', (req, res) => {
  res.send(`Hello World!`);
});
