const express = require("express");
const { PORT } = require("./config/server.config");

const app = express();

app.get("/", (req, res) => {
    return res.json({ msg: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
