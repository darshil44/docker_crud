import express from "express" ;
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5001;
dotenv.config();

app.use(express.json());
app.use(cors);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})