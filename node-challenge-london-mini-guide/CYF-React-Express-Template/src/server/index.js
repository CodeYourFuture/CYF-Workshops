import express from "express";
import stratFort from "./data/stratFort.json" assert { type: "json" };
//import assert from "assert";

const app = express();
app.get("/", (req, res) => {
  res.send(stratFort);
});
app.get("/pharmacy", (req, res) => {
  const pharmacy = stratFort.pharmacies;
  res.json(pharmacy);
});

app.get("/city", (req, res) => {
  const pharmacyAddresses = [];
  stratFort.pharmacies.forEach((pharmacy) => {
    pharmacyAddresses.push(pharmacy.address);
  });
  res.send({ pharmacyAddresses });
});

app.get("/stratfort", (req, res) => {
  console.log("you are hitting the stratfort end point");

  if (pharmacyAddresses) {
    pharmacyAddresses === "stratfort";
    res.json(pharmacyAddresses);
  } else {
    console.log("did not find the request");
  }
  res.send(address);
});
app.listen(4173, () => {
  console.log("Listening on http://localhost:4173.");
});

app.get("/api/v1/example", (req, res) => {
  res.status(200).json({ message: "Success" });
});
