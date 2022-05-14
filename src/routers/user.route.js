import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import getUsersProfileController from "../controllers/getUserProfile.controller";
import getUsersController from "../controllers/getUsers.controller";
import loginController from "../controllers/login.controller";
import updateUserController from "../controllers/updateUser.controller";
import verifyAdmin from "../middlewares/verifyAdmin.middleware";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyUserByIdOr404 from "../middlewares/verifyUserByIdOr404.middleware";

const router = Router();

router.post("", verifyEmailMiddleware, createUserController);
router.post("/login", loginController);
router.get("", verifyAuthTokenMiddleware, verifyAdmin, getUsersController);
router.get("/profile", verifyAuthTokenMiddleware, getUsersProfileController);
router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAdmin,
  updateUserController
);
router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAdmin,
  deleteUserController
);

export default router;
