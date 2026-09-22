import express from "express";
import cors from "cors";
import api from "./api/index.js";
import { notFoundHandler, errorHandler } from "./middlewares/error-handlers.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));
app.use("/docs", express.static("docs"));

app.get("/", (req, res) => {
  res.send("Welcome to REST API");
});

app.use("/api/v1", api);

// Default for all routes not handled by routers above
app.use(notFoundHandler);

// Add error handler middleware as the last middleware in the chain
app.use(errorHandler);

export default app;
