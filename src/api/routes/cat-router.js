import express from "express";
import { body } from "express-validator";

import { upload, createThumbnail } from "../../middlewares/upload.js";

import { authenticateToken } from "../../middlewares/authentication.js";
import { validationErrors } from "../../middlewares/error-handlers.js";

import {
  getCats,
  getCatById,
  getCatsByUserId,
  postCat,
  putCat,
  deleteCat,
} from "../controllers/cat-controller.js";

const catRouter = express.Router();

catRouter
  .route("/")
  .get(getCats)
  .post(
    authenticateToken,
    upload.single("cat"),
    body("cat_name").trim().isLength({ min: 3, max: 50 }),
    body("weight").isNumeric(),
    body("owner").isInt(),
    body("birthdate").isDate(),
    validationErrors,
    createThumbnail,
    postCat,
  );

catRouter.route("/user/:id").get(getCatsByUserId);

catRouter
  .route("/:id")
  .get(getCatById)
  .put(authenticateToken, putCat)
  .delete(authenticateToken, deleteCat);

export default catRouter;
