const products = [
  { id: 1, name: "iphone16", price: 25000 },
  { id: 2, name: "Dell", price: 55000 },
  { id: 3, name: "Samsung", price: 5000 },
  { id: 4, name: "printer", price: 15000 },
];

export const getProducts = (req, res) => {
  res
    .status(200)
    .json({ message: "products retrived Successfully", data: products });
};

export const getProductById = (req, res) => {
  const productId = req.params.id;
  console.log("productId", productId);

  const productDetail = products.find((ele) => ele.id == productId);
  if (!productDetail) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  res
    .status(200)
    .json({ message: "Product Retrieved Successfully", data: productDetail });
};

export const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };
  products.push(newProduct);
  res
    .status(200)
    .json({ message: "Product Added Successfully", data: newProduct });
};

export const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  const index = products.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  products[index].name = name;
  products[index].price = price;
  res
    .status(200)
    .json({ message: "Product Updated Successfully", data: products[index] });
};

export const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const index = products.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  products.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
};
