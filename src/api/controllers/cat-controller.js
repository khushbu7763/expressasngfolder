import {
  listAllCats,
  findCatById,
  findCatsByUserId,
  addCat,
  modifyCat,
  removeCat,
} from "../models/cat-model.js";

const getCats = async (req, res, next) => {
  const cats = await listAllCats();
  res.json(cats);
};

const getCatById = async (req, res, next) => {
  const cat = await findCatById(req.params.id);

  if (!cat) {
    const error = new Error("Cat not found.");
    error.status = 404;
    return next(error);
  }

  res.json(cat);
};

const getCatsByUserId = async (req, res, next) => {
  const cats = await findCatsByUserId(req.params.id);
  res.json(cats);
};

const postCat = async (req, res, next) => {
  console.log("body:", req.body);
  console.log("file:", req.file);

  if (!req.file) {
    const error = new Error("Invalid or missing file");
    error.status = 400;
    return next(error);
  }

  const newCat = {
    ...req.body,
    filename: req.file.filename,
  };

  const result = await addCat(newCat);

  if (!result) {
    const error = new Error("Cat not added.");
    error.status = 400;
    return next(error);
  }

  res.status(201).json(result);
};

const putCat = async (req, res, next) => {
  const result = await modifyCat(req.body, req.params.id, res.locals.user);

  if (!result) {
    const error = new Error("Not authorized.");
    error.status = 403;
    return next(error);
  }

  res.json(result);
};

const deleteCat = async (req, res, next) => {
  const result = await removeCat(req.params.id, res.locals.user);

  if (!result) {
    const error = new Error("Not authorized.");
    error.status = 403;
    return next(error);
  }

  res.json(result);
};

export { getCats, getCatById, getCatsByUserId, postCat, putCat, deleteCat };
