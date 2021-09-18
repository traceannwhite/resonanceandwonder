// import products from "../../../products.json";

// export function getProductsById(products) {
//   const products = products.filter((product) => product.id === id);
//   return products;
// }

//   export default function handler(req, res) {
//     if (req.method !== "GET") {
//       res.setHeader("Allow", ["GET"]);
//       res.status(404).json({ Message: `Method ${req.method} is not allowed` });
//     } else {
//       const products = getProductsById(req.query.id);
//       res.status(200).json(products);
//     }
//   }
