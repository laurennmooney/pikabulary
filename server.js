"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const triviaRoutes = require("./question.api");
const scoresRoutes = require("./scores.api");
app.use(cors());    
app.use(express.json());
app.use("/", triviaRoutes);
app.use("/", scoresRoutes);
const port = 8080;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));