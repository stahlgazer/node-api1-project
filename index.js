const express = require("express"); // npm i express
const shortid = require("shortid");
const server = express();

let users = [
    {
        id: 0,
        name: "Jane Doe",
        bio: "Not Tarzan's Wife, another Jane",
      }
]

server.use(express.json()); // add this line

server.get('/', (req, res) => {
    res.status(200).json({api: 'running...'})
})



