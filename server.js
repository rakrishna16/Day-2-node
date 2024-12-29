import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./Routers/productRouter.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome to our API day 2");
});

app.use("/api/product", productRouter);

const port = process.env.PORT || 5000;

// app.use(cors())

app.listen(port, () => {
  console.log("server started and running onn port");
});
