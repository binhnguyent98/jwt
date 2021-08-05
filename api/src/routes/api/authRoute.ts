import { Router } from "express";
import authController from "../../app/controllers/client/authController";
import userValidator from "../../app/validators/userValidator";

const router = Router();

router.post("/refresh-token", authController.refreshToken);
router.post("/register", userValidator.user, authController.register);
router.post("/login", userValidator.user, authController.login);

export default router;
