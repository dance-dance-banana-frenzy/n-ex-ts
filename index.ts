import express from "express";
const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  console.log("got request");
  res.send("Root Folder");
});
app.use((req, res) => {
  console.log("404", req.url);
  res.status(404).json({ message: "four oh foured" });
});

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
