import express from "express";
import { regiter, getMyProfile, login, logout } from "../controllers/user.js";

import { isAuthentication } from "../middlewares/auth.js";
// import { User } from "../models/user.js";

const router = express.Router();

router.post("/new", regiter);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthentication, getMyProfile);

export default router;
