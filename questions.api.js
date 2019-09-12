const express = require("express");
const questionsRoutes = express.Router();
const pool = require("./connection");

questionsRoutes.get("/grade_3", (req, res) => {
  pool.query("select * from grade_3 order by random()").then(result => {
    console.log("3");
    res.send(result.rows);
  });
});

questionsRoutes.get("/grade_4", (req, res) => {
  pool.query("select * from grade_4 order by random()").then(result => {
    console.log("4");
    res.send(result.rows);
  });
});

questionsRoutes.get("/grade_5", (req, res) => {
  pool.query("select * from grade_5 order by random()").then(result => {
    console.log("5");
    res.send(result.rows);
  });
});

module.exports = questionsRoutes;
