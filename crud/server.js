const express = require("express");
const albumsData = require("./albums.json");
const app = express();
app.use(express.json()); // before our routes definition

// make an endpoint to get all albums
app.get("/albums", (req, res) => {
  res.send(albumsData);
});
// make an endpoint to get a single album
app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  const album = albumsData.find((album) => album.albumId === albumId);
  res.send(album);
});

app.post("/albums", function (req, res) {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.send("Album added successfully!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
