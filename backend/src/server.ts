import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = Number(process.env.PORT)

app.listen(PORT,()=>{
    console.log(`Server listening at port:${PORT}`)
})