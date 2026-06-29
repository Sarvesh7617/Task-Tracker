import express from "express";
import cors from "cors";


const app=express();



app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))



app.use(express.json({limit:"16kb"}))




import TaskRouter from "./routes/task.route.js";


app.use("/api/v1/tasks",TaskRouter);


export {app};