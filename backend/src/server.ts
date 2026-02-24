import express from "express";
import dotenv from "dotenv";
import { sendSuccess } from "./utils/response.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_,res)=>{
    return sendSuccess(res,{uptime:process.uptime()},"Service healthy")
  })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

