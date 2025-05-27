import express from "express";
import cors from "cors";
import ApiRoute from "./router/router.js";
import connect from "./dbConfig/dbConfig.js";
const app = express();
app.use(
  cors({
    origin: "https://statuesque-otter-b6848b.netlify.app",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
  app.use("/api/auth/", ApiRoute);
connect();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
