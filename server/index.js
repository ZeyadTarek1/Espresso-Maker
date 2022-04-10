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

app.get("/getdata", async (req, res) => {
    try {
        const buffer = fs.readFileSync("datajson.json");
        dataJSON = JSON.parse(buffer);
        console.log("Sending data");
        let sum = 0;
        dataJSON.forEach((element) => {
            sum = sum + element.Espresso;
        });
        res.send({ sum: sum });
    } catch (e) {
        res.send(e);
    }
});

app.post("/postdata", async (req, res) => {
    let incomingJSON = req.body;
    try {
        const buffer = await fs.readFileSync("datajson.json");
        dataJSON = await JSON.parse(buffer);
    } catch (e) {
        res.send(e);
    }
    const saveData = [...dataJSON, incomingJSON];
    fs.writeFile("datajson.json", JSON.stringify(saveData), (err) => {
        console.log("Saved Data");
        if (err) {
            res.render("Error writing data");
            return;
        }
    });
    res.send("Saved Data");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
