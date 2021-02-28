import express from "express";
const router = express.Router();
import { authUser, registerUser } from "../controllers/userController.js";

route.route("/").post(registerUser).get(getUsers);
router.post("/login", authUser);

export default router;
