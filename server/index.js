const fs = require("fs");
const express = require("express");
const cors = require("cors");

const port = 5000;
const whitelist = ["http://localhost:3000"];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.post("/postdata", (req, res) => {
    let incomingJSON = req.body;
    res.send(incomingJSON);
    fs.writeFile("dataJson.json", JSON.stringify(incomingJSON), (err) => {
        console.log("Saved Data");
        if (err) {
            res.render("Error writing data");
            return;
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
