const express = require("express");
const questionsRoutes = express.Router();
const pool = require("./connection");

questionsRoutes.get("/grade_3",(req, res) => {
    pool
    .query("select * from grade_3")
    .then(result => {
        console.log("get works")
    res.send(result.rows);
    });
});

// questionsRoutes.get("/grade_3", getQuestions);

module.exports = questionsRoutes;