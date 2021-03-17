const express = require("express");
const port = 5000;

const app = express();
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../frontend/build")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
