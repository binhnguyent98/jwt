import { Router } from "express";
import userController from "../../app/controllers/client/userController";
import userValidator from "../../app/validators/userValidator";

const router = Router();

router.get("/profile", userValidator.user, userController.profile);
router.put("/update", userValidator.update, userController.update);

export default router;
