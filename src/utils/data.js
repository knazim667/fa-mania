import netSemi from "../assets/images/fashionProducts/fashion-product.svg";
import netSemi2 from "../assets/images/fashionProducts/fashion-product-2.svg";
import netSemi3 from "../assets/images/fashionProducts/fashion-product3.svg";
import netSemi4 from "../assets/images/fashionProducts/fashion-product4.svg";
import cas1 from "../assets/images/casualDress/cas-1.gif";
import cas2 from "../assets/images/casualDress/cas-2.jpg";
import cas3 from "../assets/images/casualDress/cas-3.jpg";
import cas4 from "../assets/images/casualDress/cas-4.jpg";
import cas5 from "../assets/images/casualDress/cas-5.jpg";
import cas6 from "../assets/images/casualDress/cas-6.jpg";
import cas7 from "../assets/images/casualDress/cas-7.jpg";
import cas8 from "../assets/images/casualDress/cas-8.jpg";
import cas9 from "../assets/images/casualDress/cas-9.jpg";
import cas10 from "../assets/images/casualDress/cas-10.jpg";

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

export const PRODUCTS = {
  semiStitched: {
    id: 1,
    title: "Semi-stitched Dress",
    routeName: "/semi-stitched",
    items: [
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
    ],
  },
  flair: {
    id: 2,
    title: "Fair N Flair",
    routeName: "/fair-n-flair",
    items: [
      {
        id: 1,
        name: "fair N Flair Garments",
        price: 399,
        imgUrl: netSemi3,
        background: "#f4e8be",
        size: [32, 34, 36],
        categories: ["fashion products", "falir"],
        tags: ["fashion products", "dance wear"],
      },
    ],
  },
  jackets: {
    id: 3,
    title: "jackets",
    routeName: "/jackets",
    items: [
      {
        id: 1,
        name: "Fashion Jacket",
        price: 499,
        imgUrl: netSemi4,
        background: "#dfc6bb",
        size: [42, 44, 46, 48],
        categories: ["fashion products", "Jacket"],
        tags: ["fashion products", "jacket", "winter collection"],
      },
    ],
  },
  casualDress: {
    id: 4,
    title: "Casual Dress",
    routeName: "/casual-dress",
    items: [
      {
        id: 1,
        name: "Red Butterfly Dress",
        price: 199,
        imgUrl: cas1,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress"],
      },
      {
        id: 2,
        name: "Black Multi Dress",
        price: 259,
        imgUrl: cas2,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "black"],
      },
      {
        id: 3,
        name: "White Check Dress",
        price: 319,
        imgUrl: cas3,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "white"],
      },
      {
        id: 4,
        name: "Blue Multi Dress",
        price: 219,
        imgUrl: cas4,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "Blue"],
      },
      {
        id: 5,
        name: "white Dress",
        price: 320,
        imgUrl: cas5,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "white"],
      },
      {
        id: 6,
        name: "Orange Flower Dress",
        price: 199,
        imgUrl: cas6,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "Orange"],
      },
      {
        id: 7,
        name: "Blue Check Dress",
        price: 339,
        imgUrl: cas7,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "Blue"],
      },
      {
        id: 8,
        name: "Blue Check Dress",
        price: 190,
        imgUrl: cas1,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "blue"],
      },
      {
        id: 9,
        name: "Red check Dress",
        price: 259,
        imgUrl: cas9,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "red"],
      },
      {
        id: 10,
        name: "white Multi printed",
        price: 333,
        imgUrl: cas10,
        size: [32, 34, 36, 38],
        categories: ["dress", "semi dress"],
        tags: ["fashion dress", "casual dress", "dress", "multi"],
      },
    ],
  },
};
