import { Router } from "express";
const router = Router();

import {
  getExtings,
  getExting,
  // createExting,
  updateExting,
  // deleteExting
} from "../controllers/exting.controller";

router.get("/extings", getExtings);
router.get("/extings/:id", getExting);
// router.post("/extings", createExting);
router.put("/extings/:id", updateExting);
// router.delete("/extings/:id", deleteExting);

export default router;