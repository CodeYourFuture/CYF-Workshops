import express from "express";



const app = express();
app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});