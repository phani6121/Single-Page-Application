const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "forntend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("forntend", "index.html")); //This is the to set the path of the web server 
});

app.listen(process.env.PORT || 5000, () => console.log("server running...")); //This is the status of the server 