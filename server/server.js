const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/database");
const authRoutes = require("./routes/auth");

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());
connectToDatabase();

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server running on local server", PORT);
});
