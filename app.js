import express from "express";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // o la URL de tu frontend
    credentials: true,
  })
);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`servidor corriendo en el puerto ${PORT}`);
});