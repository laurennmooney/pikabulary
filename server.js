"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const scoresRoutes = require("./scores.api");
const questionsRoutes = require("./questions.api");
app.use(cors());    
app.use(express.json());
app.use("/", scoresRoutes);
app.use("/", questionsRoutes);
const port = 8080;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));