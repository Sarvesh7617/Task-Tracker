import mongoose from "mongoose";
import {DB_name} from "../constant.js"



const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_name}`)    
        console.log(`\n MongoDb connected !! DB Host:${connectionInstance.connection.host}`)
    } 
    catch (error) {
        console.log("MongoDb connection failed",error)
        process.exit(1);
    }
}


export default connectDB;