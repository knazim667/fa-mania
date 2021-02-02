import netSemi from "../assets/images/fashionProducts/fashion-product.svg";
import netSemi2 from "../assets/images/fashionProducts/fashion-product-2.svg";
import netSemi3 from "../assets/images/fashionProducts/fashion-product3.svg";
import netSemi4 from "../assets/images/fashionProducts/fashion-product4.svg";

export const NAV_ITEMS = [
  {
    label: "collections",
    path: "/collections",
  },
  {
    label: "home",
    path: "/",
  },
  {
    label: "women",
    path: "/women",
  },
  {
    label: "home & furniture",
    path: "/home&furniture",
  },
  {
    label: "sports",
    path: "/sports",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Net Semi-stitched Dress",
    imgUrl: netSemi,
    background: "#bbd9e0",
    price: 199,
    size: [32, 34, 36, 38],
    categories: ["Dress", "stiched", "fashion products"],
    tags: ["semi dress", "dress", "fashion products"],
  },
  {
    id: 2,
    name: "Net Semi-stitched Dress",
    price: 299,
    imgUrl: netSemi2,
    background: "#c6bdde",
    size: [34, 38, 42, 40],
    categories: ["Dress", "stiched", "fashion products"],
    tags: ["semi dress", "dress", "fashion products"],
  },
  {
    id: 3,
    name: "fair N Flair Garments",
    price: 399,
    imgUrl: netSemi3,
    background: "#f4e8be",
    size: [32, 34, 36],
    categories: ["fashion products", "falir"],
    tags: ["fashion products", "dance wear"],
  },
  {
    id: 4,
    name: "Fashion Jacket",
    price: 499,
    imgUrl: netSemi4,
    background: "#dfc6bb",
    size: [42, 44, 46, 48],
    categories: ["fashion products", "Jacket"],
    tags: ["fashion products", "jacket", "winter collection"],
  },
];
