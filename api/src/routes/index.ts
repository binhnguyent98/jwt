import { Router } from "express";
import userRoute from "./api/userRoute";
import authRoute from "./api/authRoute";
import authticationMiddleware from "../app/middleware/authenticationMiddleware";

const router = Router();

router.use(authRoute);
router.use("/user", authticationMiddleware, userRoute);

export default router;
