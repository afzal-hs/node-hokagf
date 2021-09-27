const express = require('express');
const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Stackblitz' });
});
app.listen(4400, () => console.log("I'm listening "));
