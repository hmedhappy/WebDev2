const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to the new Server");
});
app.get("/ahmed", (req, res) => {
  res.send("Ahla b 5oua cava baba");
});
app.get("/posts", (req, res) => {
  const posts = [
    {
      name: "Sidi Dewed",
      contenu: "Ay 7aja",
      photoPost: "https://picsum.photos/200/300",
      photoProfile: "https://picsum.photos/200/300",
    },
    {
      name: "Selim ",
      contenu: "Chagra",
      photoPost: "https://picsum.photos/200/300",
      photoProfile: "https://picsum.photos/200/300",
    },
  ];
  res.json(posts);
});

app.listen(1999, () => console.log("5ouya el ghalli e serveur yemchi"));
