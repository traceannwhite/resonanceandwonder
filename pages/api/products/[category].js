import products from "../../.././products.json";

export function getProductsByCategory(category) {
  const products = products.filter((product) => product.category === category);
  return products;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(404).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}
