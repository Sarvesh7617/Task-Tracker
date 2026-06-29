import { text } from 'express';
import mongoose,{Schema} from 'mongoose';





const taskSchema=new Schema(
    {
        text: {
            type: String,
            required: true,
            trim: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
    },{timestamps:true}
)


export const Task=mongoose.model("Task",taskSchema);
