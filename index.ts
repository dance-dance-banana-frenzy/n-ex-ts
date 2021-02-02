import express from "express";
const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  console.log("got request");
  res.send("Root Folder");
});
app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
