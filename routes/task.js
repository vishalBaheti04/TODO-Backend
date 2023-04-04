import express from "express";
import { isAuthentication } from "../middlewares/auth.js";

import {
  newTask,
  getMyTask,
  updateTask,
  delTask,
} from "../controllers/task.js";

const router = express.Router();

router.post("/new", isAuthentication, newTask);
router.get("/my", isAuthentication, getMyTask);
router
  .route("/:id")
  .put(isAuthentication, updateTask)
  .delete(isAuthentication, delTask);
export default router;
