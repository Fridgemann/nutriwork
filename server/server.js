require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendStatus(200);
});

const recipesRouter = require("./routes/recipes");
app.use("/api/recipes", recipesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});