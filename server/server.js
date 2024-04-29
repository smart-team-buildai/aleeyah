const cors = require("cors");
const express = require("express");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");
const connectToDatabase = require("./config/database");

const PORT = 8000;

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log("Server running on local server", PORT);
});
