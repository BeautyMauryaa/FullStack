import { Router } from "express";
import { verifyToken } from "../middlewares/authmiddleware.js";
import { getAllusernotes,getusernotebyId,Createnote } from "../controller/notesController.js";


const router = Router();

//apply authentication middleware to protect al routes
router.use(verifyToken);

//routes mapping
//1. create note
router
.route("/notes")
.get(getAllusernotes)
.get(getusernotebyId)
.post(Createnote)

export default router;
