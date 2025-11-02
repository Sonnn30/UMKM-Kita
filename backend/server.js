import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

// Load the JSON data
const data = JSON.parse(fs.readFileSync("./backend/umkm.json", "utf8"));

// Get all UMKM
app.get("/api/umkm", (req, res) => {
    res.json(data);
});

// Get UMKM by ID
app.get("/api/umkm/:id", (req, res) => {
    const umkm = data.find(u => u.id === parseInt(req.params.id));
    if (!umkm) return res.status(404).json({ message: "Not found" });
    res.json(umkm);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
