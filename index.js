const express = require('express');

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});

//the port is coming from the enviorment
const port =process.env.PORT || 4000; //represents enviorment aplication is running
//the PORT will be set by heroku when we deploy

server.listen(4000, () => {
  console.log(`\n Server running on port ${port} \n`);
});
