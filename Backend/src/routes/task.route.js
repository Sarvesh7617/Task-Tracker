import { Router } from "express";
import {createTask, deleteTask, getTask, updateTask} from "../controllers/taskController.js"



const router=Router();


router.route("/").get(getTask).post(createTask);

router.route("/:id").put(updateTask).delete(deleteTask);



export default router;