const express = require("express"); // npm i express
const shortid = require("shortid");
const server = express();

const PORT = 5000;
server.listen(PORT, () =>
  console.log(`\n** API on http://localhost:${PORT} **\n`)
);

server.use(express.json()); // add this line
// to run the server use node index.js ??

let users = [
    {
      id: 0,
      name: "Jane Doe",
      bio: "Not Tarzan's Wife, another Jane"
    }
];

server.get("/", (req, res) => {
  res.status(200).json({ api: "running..." });
});

server.post("/api/users", (req, res) => {
  let userInfo = req.body;
  if (!userInfo.name || !userInfo.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    userInfo.id = shortid.generate();
    users.push(userInfo);
    res.status(201).json(userInfo);
  }
});

server.get("/api/users", (req, res) => {
  if (users) {
    res.status(200).json(users);
  } else {
    res
      .status(500)
      .json({ errorMessage: "The users information could not be retrieved." });
  }
});
