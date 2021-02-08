import express from "express";
import proxy from "express-http-proxy";
import path from "path";
import foo from "./foo";

const app = express();
const PORT = 8001;

// location of files served from the server without server-side processing
app.use("/public", express.static(path.join(__dirname, "..", "public")));
// any path with "public" goes to public assets
// so that relative path is not necessary
// especially useful when using react app routing from any url
// and root of app is not in root of domain
// Relative path to public changes based on where apps root path is,
// and relative path to root path.
// "/public/image.jpg" root is "/"
// "public/image.jpg" root is "./"
// "../public/image.jpg" root is "../"
// ie http://domain.com/app/react/route/here
// would change relative path of "public"
app.use("*/public", express.static(path.join(__dirname, "..", "public")));

// proxy any calls to api folder to another server
app.use("/api", proxy("www.google.com"));

// route call to import fn
app.use("/foo", (req, res) => {
  res.send(foo());
});
// all other paths go to index to support react app routing
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
