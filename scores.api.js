const express = require("express");
const scoresRoutes = express.Router();
const pool = require("./connection");

function getScoreboard(req, res) {
    pool.query("select * from scores order by score desc, username").then((result) => {
        res.send(result.rows);
        // console.log("Get scores works");
    });
}


scoresRoutes.post("/scores", (req, res) => {
        pool.query("Insert into scores(username, score) values ($1::text, $2::int)", [
        req.body.username,
        req.body.score
        ])
            .then(() => {
            getScoreboard(req, res);
            // console.log("Post works");
        });
});

module.exports = scoresRoutes;