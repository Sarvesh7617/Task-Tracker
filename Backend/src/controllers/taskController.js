import { Task } from "../model/Task.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"





const getTask=asyncHandler(async(req,res)=>{
    try {
        const tasks=await Task.find().sort({createdAt:-1});
        
        if(!tasks.length===0)
            throw new ApiError(404,"No task found");
    
        return res.status(200).json(
            new ApiResponse(200,tasks,"Task fetch successfully")
        )
    } 
    catch (error) {
        throw new ApiError(500,error?.message,"Error while fetch task")
    }
})



const createTask=asyncHandler(async(req,res)=>{
    try {
        const {text}=req.body;

        if(!text || text.trim()=="")        //form validation logic     
            throw new ApiError(400,"Task text cannot be empty")

        const task=await Task.create({
            text,
            complete:false
        })

        if(!task)
            throw new ApiError("Something went wrong while creating task")

        return res.status(201).json(
            new ApiResponse(201,task,"Task created successfully")
        )
    }
    catch (error) {
        throw new ApiError(500,error?.message,"Error while creating task")
    }
})



const updateTask=asyncHandler(async(req,res)=>{
    try {
        const updatedTask=await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!updatedTask)
            throw new ApiError(404,"Task not found")

        return res.status(200).json(
            new ApiResponse(200,updatedTask,"Task update successfully")
        )
    } 
    catch (error) {
        throw new ApiError(500,error?.message,"Error while updating task")
    }
})




const deleteTask=asyncHandler(async(req,res)=>{
    try {
        const delTask=await Task.findByIdAndDelete(req.params.id)

        if(!delTask)
            throw new ApiError(404,"Task not found")

        return res.status(200).json(
            new ApiResponse(200,"Task deleted successfully")
        )
    } 
    catch (error) {
        throw new ApiError(500,error?.message,"Error while deleting task")
    }
})



export {getTask,createTask,deleteTask,updateTask};