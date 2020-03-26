const getData = require("../utils/getData");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

app.get("/location", async (req, res) => {
  try {
    const data = await getData(req.query.location);
    res.send(data);
  } catch (e) {
    res.status(500).send({ error: e });
  }
});

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
