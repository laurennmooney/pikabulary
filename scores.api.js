const express = require("express");
const scoresRoutes = express.Router();
const pool = require("./connection");

function getScoreboard(req, res) {
  pool
    .query("select * from scores where score > 0 order by score desc, username")
    .then(result => {
      console.log("get for scores works");
      res.send(result.rows);
      // console.log("Get scores works");
    });
}

scoresRoutes.get("/scores", getScoreboard);

scoresRoutes.get("/scores/grade_3", (req, res) => {
  pool
    .query(
      "select * from scores where score > 0 AND gradeLevel='grade_3' order by score desc, username"
    )
    .then(result => {
      console.log("get grade 3 works");
      res.send(result.rows);
    });
});

scoresRoutes.get("/scores/grade_4", (req, res) => {
  pool
    .query(
      "select * from scores where score > 0 AND gradeLevel='grade_4' order by score desc, username"
    )
    .then(result => {
      console.log("get grade 4 works");
      res.send(result.rows);
    });
});

scoresRoutes.get("/scores/grade_5", (req, res) => {
  pool
    .query(
      "select * from scores where score > 0 AND gradeLevel='grade_5' order by score desc, username"
    )
    .then(result => {
      console.log("get grade 5 works");
      res.send(result.rows);
    });
});

scoresRoutes.post("/scores", (req, res) => {
  pool
    .query(
      "Insert into scores(username, score, gradeLevel) values ($1::text, $2::int, $3::text)",
      [req.body.username, req.body.score, req.body.gradeLevel]
    )
    .then(() => {
      console.log("post scores works");
      getScoreboard(req, res);
      // console.log("Post works");
    });
});

module.exports = scoresRoutes;
