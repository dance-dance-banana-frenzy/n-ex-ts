import express from "express";
const app = express();
const PORT = 8001;

function handleListen() {
  console.log(`Listening http://localhost:${PORT}`);
}

function handleRootRequest(req, res) {
  console.log("got request");
  res.send("Root Folder");
}

app.get("/", handleRootRequest);
app.listen(PORT, handleListen);
