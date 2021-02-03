import express from "express";
import proxy from "express-http-proxy";
import path from "path";

const app = express();
const PORT = 8001;

interface Document {
  id: number;
  name: string;
}
let doc: Document;
const docs: { [key: number]: Document } = {
  "23": {
    id: 23,
    name: "Twenty Three"
  }
};

app.get("/", (req, res) => {
  console.log("got request");
  res.send('<html><body><img src="static/icon.png"> Root Folder</body></html>');
});

app.all("/doc/:id/:op?", (req, res, next) => {
  const id = parseInt(req.params.id);
  const doc = docs[id];
  if (doc) {
    next();
  } else {
    next(new Error(`Cannot find doc ${id}`));
  }
});

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/api", proxy("www.google.com"));

app.get("/doc/:id/edit", (req, res) => {
  console.log("edit doc: %s", doc.name);
  res.send(`I want to edit doc ${doc.name}?`);
});
app.get("/foo/:id/:bar?", (req, res) => {
  const id = req.params.id;
  const bar = req.params.bar;
  console.log("get foo by id: %s %s", id, bar);
  res.send(`where is foo ${id} ${bar}?`);
});
app.use((req, res) => {
  console.log("404", req.url);
  res.status(404).json({ message: "four oh foured" });
});

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
