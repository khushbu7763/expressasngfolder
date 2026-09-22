import {
  listAllCats,
  findCatById,
  findCatsByUserId,
  addCat,
  modifyCat,
  removeCat,
} from "../models/cat-model.js";

const getCats = async (req, res) => {
  const cats = await listAllCats();
  res.json(cats);
};

const getCatById = async (req, res) => {
  const cat = await findCatById(req.params.id);

  if (!cat) {
    return res.status(404).json({ message: "Cat not found." });
  }

  res.json(cat);
};

const getCatsByUserId = async (req, res) => {
  const cats = await findCatsByUserId(req.params.id);
  res.json(cats);
};

const postCat = async (req, res) => {
  console.log("body:", req.body);
  console.log("file:", req.file);

  const newCat = {
    ...req.body,
    filename: req.file ? req.file.filename : null,
  };

  const result = await addCat(newCat);

  if (!result) {
    return res.status(400).json({ message: "Cat not added." });
  }

  res.status(201).json(result);
};

const putCat = async (req, res) => {
  const result = await modifyCat(req.body, req.params.id, res.locals.user);

  if (!result) {
    return res.status(403).json({ message: "Not authorized." });
  }

  res.json(result);
};

const deleteCat = async (req, res) => {
  const result = await removeCat(req.params.id, res.locals.user);

  if (!result) {
    return res.status(403).json({ message: "Not authorized." });
  }

  res.json(result);
};

export { getCats, getCatById, getCatsByUserId, postCat, putCat, deleteCat };
