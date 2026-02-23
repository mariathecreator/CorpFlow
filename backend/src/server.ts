import express  from "express";
import type {Request,Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/api/health",(req:Request,res:Response)=>{
    res.json({
        success:true,
        data:{},
        message:"CorpFlow backend is running",
        errorCode:""
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})