const express = require("express");
const albumsData = require("./albums.json");
const app = express();

app.use(express.json());
app.get("/albums", (req, res) => {
  console.log(albumsData);
  res.send(albumsData);
});
app.get("/album/:albumId", (req, res) => {
  const id = req.params.albumId;
  const result = albumsData.find((items) => items.albumId === id);
  res.send(result);
});
app.post("/albums", (req, res) => {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.send("new album added");
});
app.delete("/albums/:albumID", (req, res) => {
  const deleteId = albumsData.find((id) => id.albumId === id);
  res.send(deleteId);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
