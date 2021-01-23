import { Router } from "express";
const router = Router();

import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  // deleteCustomer
} from "../controllers/customer.controller";

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", createCustomer);
router.put("/customers/:id", updateCustomer);
// router.delete("/users/:id", deleteUser);

export default router;