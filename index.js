const express = require("express");
const mongoose = require("mongoose");

const personRoutes = require("./routes/personRoutes");

const app = express();
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
app.use("/person", personRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Olá express" });
});

mongoose
  .connect("")
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000);
  })
  .catch((error) => console.log(error));
