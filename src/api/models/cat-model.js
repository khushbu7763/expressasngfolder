const cats = [
  {
    cat_id: 1,
    name: "meeau",
    birthdate: "1.7.2024",
    weight: 5,
    owner: "khush",
    image: "http://127.0.0.1:3000/public/cat.jpg",
  },
];

const listAllCats = () => {
  return cats;
};

const findCatById = (id) => {
  return cats.find((cat) => cat.cat_id === Number(id));
};

const addCat = (cat) => {
  cat.cat_id = cats.length + 1;
  cats.push(cat);
  return cat;
};

export { listAllCats, findCatById, addCat };
