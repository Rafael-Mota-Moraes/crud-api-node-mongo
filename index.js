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
  .connect(
    "mongodb+srv://rafaelmota622:99032686@cluster0.hoitr.mongodb.net/api-rest?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000);
  })
  .catch((error) => console.log(error));
