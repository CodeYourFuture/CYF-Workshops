import express from "express";
import stratFort from "./data/stratFort.json";

const app = express();
const port = 4173;

// Define middleware to parse JSON bodies
app.use(express.json());

// Route to handle root endpoint
app.get("/", (req, res) => {
  res.send(stratFort);
});

// Route to handle pharmacy endpoint
app.get("/pharmacy", (req, res) => {
  const pharmacies = stratFort.pharmacies;
  res.json(pharmacies);
});

// Route to handle city endpoint
app.get("/city", (req, res) => {
  const pharmacyAddresses = stratFort.pharmacies.map(
    (pharmacy) => pharmacy.address
  );
  res.send({ pharmacyAddresses });
});

// Route to handle specific stratfort endpoint
app.get("/stratfort", (req, res) => {
  const pharmacyAddresses = stratFort.pharmacies.map(
    (pharmacy) => pharmacy.address
  );
  console.log("You are hitting the stratfort endpoint");

  if (pharmacyAddresses.includes("stratfort")) {
    res.json({
      pharmacyAddresses: pharmacyAddresses.filter(
        (address) => address === "stratfort"
      ),
    });
  } else {
    console.log("Did not find the requested address 'stratfort'");
    res.status(404).json({ message: "Address 'stratfort' not found" });
  }
});

// Route to handle example API endpoint
app.get("/api/v1/example", (req, res) => {
  res.status(200).json({ message: "Success" });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}.`);
});
