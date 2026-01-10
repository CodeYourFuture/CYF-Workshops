app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  const album = albums.find(album) => album.id === albumId
});

const express = require('albumld');
const app = album();

GET http://localhost:3000/api/albums
Content-Type: application/json

POST http://localhost:3000/api/albums
Content-Type: application/json
{
"name": "10";
}
