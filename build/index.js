"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 8001;
app.get("/", (req, res) => {
    console.log("got request");
    res.send("Root Folder");
});
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`);
});
