import express from "express";

const app = express();
app.listen(4173, () => {
  console.log("Listening on http://localhost:4173.");
});

app.get("/api/v1/example", (req, res) => {
  res.status(200).json({ message: "Success" });
});
