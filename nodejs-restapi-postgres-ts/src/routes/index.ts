import { Router } from "express";
import { createUser, getUser, getUserById } from "../controllers/idex.controller";

const router = Router();

router.get("/users", getUser); 
router.get("/users/:id", getUserById); 
router.post("/users", createUser); 
// router.put("/users/:id", getUser); 
// router.delete("/users/:id", getUser);

export default router;