const express = require("express"); // npm i express
const shortid = require("shortid");
const server = express();

const PORT = 5000;
server.listen(PORT, () =>
console.log(`\n** API on http://localhost:${PORT} **\n`))

server.use(express.json()); // add this line
// to run the server use node index.js ??

let users = [
    {
        id: 0,
        name: "Jane Doe",
        bio: "Not Tarzan's Wife, another Jane",
      }
]

server.get('/', (req, res) => {
    res.status(200).json({api: 'running...'})
})



