import express from "express";
import { sendSuccess } from "./utils/response.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { AppError } from "./utils/error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get("/api/health",(_,res)=>{
    return sendSuccess(res,{status:"ok"},"Corpflow api is running")
});

app.get("/api/test-error",()=>{
    throw new AppError("test error",400,"TEST_ERROR");
});

app.use(errorMiddleware)

export default app;
