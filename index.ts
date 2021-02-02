import express from "express";
const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  console.log("got request");
  res.send("Root Folder");
});
app.get("/doc/:id", (req, res) => {
  console.log("get doc by id: %s", req.params.id);
  res.send(`where is doc ${req.params.id}?`);
});
app.use((req, res) => {
  console.log("404", req.url);
  res.status(404).json({ message: "four oh foured" });
});

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
