import connectDB from "./db/index.js"
import {app} from "./app.js";
import dns from 'node:dns/promises';
dns.setServers(['1.1.1.1', '8.8.8.8']);



connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 5000,()=>{
            console.log(`Server is running on prot http://localhost:${process.env.PORT}`)
        })
    })
    .catch((error)=>{
        console.log("MongoDB connection failed !!!",error)
    })