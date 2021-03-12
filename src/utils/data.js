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
import jack1 from "../assets/images/jackets/jackets-1.jpg";
import jack2 from "../assets/images/jackets/jackets-2.jpg";
import jack3 from "../assets/images/jackets/jackets-3.jpg";
import jack4 from "../assets/images/jackets/jackets-4.jpg";
import jack5 from "../assets/images/jackets/jackets-5.jpg";
import jean1 from "../assets/images/jeans/jeans-1.jpeg";
import jean2 from "../assets/images/jeans/jeans-2.jpeg";
import jean3 from "../assets/images/jeans/jeans-3.jpg";
import jean4 from "../assets/images/jeans/jeans-4.jpg";
import jean5 from "../assets/images/jeans/jeans-5.jpg";
import shirt1 from "../assets/images/Shirts/shirts-1.jpg";
import shirt2 from "../assets/images/Shirts/shirts-2.jpg";
import shirt3 from "../assets/images/Shirts/shirts-3.jpg";
import shirt4 from "../assets/images/Shirts/shirts-4.jpg";
import shirt5 from "../assets/images/Shirts/shirts-5.jpg";
import trouser1 from "../assets/images/Trouser/trouser-1.jpg";
import trouser2 from "../assets/images/Trouser/trouser-2.jpg";
import trouser3 from "../assets/images/Trouser/trouser-3.jpg";
import trouser4 from "../assets/images/Trouser/trouser-4.png";
import trouser5 from "../assets/images/Trouser/trouser-5.jpg";

export const NAV_ITEMS = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "products",
    path: "/products",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Net Semi-stitched Dress",
    background: "#bbd9e0",
    price: 199,
    imgUrl: netSemi,
    size: [32, 34, 36, 38],
    categories: "dress",
    tags: ["semi dress", "dress", "fashion products"],
  },
  {
    id: 2,
    name: "Net Semi-stitched Dress",
    price: 299,
    imgUrl: netSemi2,
    background: "#c6bdde",
    size: [34, 38, 42, 40],
    categories: "dress",
    tags: ["semi dress", "dress", "fashion products"],
  },

  {
    id: 3,
    name: "fair N Flair Garments",
    price: 399,
    imgUrl: netSemi3,
    background: "#f4e8be",
    size: ["sm", "md"],
    colors: ["yellow"],
    categories: "shirts",
    tags: ["fashion products", "dance wear"],
  },

  {
    id: 4,
    name: "Fashion jackets",
    price: 499,
    imgUrl: netSemi4,
    background: "#dfc6bb",
    size: ["md", "lg"],
    categories: "jackets",
    colors: ["brown"],
    tags: ["fashion products", "jackets", "winter collection"],
  },

  {
    id: 5,
    name: "Red Butterfly Dress",
    price: 199,
    imgUrl: cas1,
    size: ["sm", "md", "lg"],
    categories: "dress",
    colors: ["red", "white"],
    tags: ["fashion dress", "casual dress", "dress"],
  },
  {
    id: 6,
    name: "Black Multi Dress",
    price: 259,
    imgUrl: cas2,
    size: ["md", "lg", "xlg"],
    categories: "dress",
    colors: ["Black", "yellow"],
    tags: ["fashion dress", "casual dress", "dress", "black"],
  },
  {
    id: 7,
    name: "White Check Dress",
    price: 319,
    imgUrl: cas3,
    size: ["md", "lg"],
    categories: "dress",
    colors: ["white", "black"],
    tags: ["fashion dress", "casual dress", "dress", "white"],
  },
  {
    id: 8,
    name: "Blue Multi Dress",
    price: 219,
    imgUrl: cas4,
    size: ["md", "lg", "xlg"],
    categories: "dress",
    colors: ["blue"],
    tags: ["fashion dress", "casual dress", "dress", "Blue"],
  },
  {
    id: 9,
    name: "white Dress",
    price: 320,
    imgUrl: cas5,
    size: ["md", "lg"],
    categories: "dress",
    colors: ["white", "blue"],
    tags: ["fashion dress", "casual dress", "dress", "white"],
  },
  {
    id: 10,
    name: "Orange Flower Dress",
    price: 199,
    imgUrl: cas6,
    size: ["sm", "md"],
    categories: "dress",
    colors: ["orange"],
    tags: ["fashion dress", "casual dress", "dress", "Orange"],
  },
  {
    id: 11,
    name: "Blue Check Dress",
    price: 339,
    imgUrl: cas7,
    size: ["sm", "md", "lg"],
    categories: "dress",
    colors: ["blue"],
    tags: ["fashion dress", "casual dress", "dress", "Blue"],
  },
  {
    id: 12,
    name: "Blue Check Dress",
    price: 190,
    imgUrl: cas8,
    size: ["sm", "md", "lg"],
    categories: "dress",
    colors: ["blue"],
    tags: ["fashion dress", "casual dress", "dress", "blue"],
  },
  {
    id: 13,
    name: "Red check Dress",
    price: 259,
    imgUrl: cas9,
    size: ["sm", "md"],
    categories: "dress",
    colors: ["red"],
    tags: ["fashion dress", "casual dress", "dress", "red"],
  },
  {
    id: 14,
    name: "white Multi printed",
    price: 333,
    imgUrl: cas10,
    size: ["sm", "md"],
    categories: "dress",
    colors: ["white"],
    tags: ["fashion dress", "casual dress", "dress", "multi"],
  },
  {
    id: 15,
    name: "Light Brown jackets",
    price: 400,
    imgUrl: jack1,
    size: ["sm", "md"],
    categories: "jackets",
    colors: ["brown"],
  },
  {
    id: 16,
    name: "Blue jackets",
    price: 450,
    imgUrl: jack2,
    size: ["md", "lg"],
    categories: "jackets",
    colors: ["Blue"],
  },
  {
    id: 17,
    name: "Red jackets",
    price: 350,
    imgUrl: jack3,
    size: ["md"],
    categories: "jackets",
    colors: ["Red"],
  },
  {
    id: 18,
    name: "Black jackets",
    price: 450,
    imgUrl: jack4,
    size: ["lg", "xlg"],
    categories: "jackets",
    colors: ["Black"],
  },
  {
    id: 19,
    name: "Red check jackets",
    price: 550,
    imgUrl: jack5,
    size: ["lg", "xlg"],
    categories: "jackets",
    colors: ["Black", "Red"],
  },
  {
    id: 20,
    name: "Jeans",
    price: 30,
    imgUrl: jean1,
    size: ["lg", "md"],
    categories: "jeans",
    colors: ["Blue"],
  },
  {
    id: 21,
    name: "Jeans",
    price: 40,
    imgUrl: jean2,
    size: ["sm", "md"],
    categories: "jeans",
    colors: ["Blue"],
  },
  {
    id: 22,
    name: "Jeans",
    price: 50,
    imgUrl: jean3,
    size: ["sm", "md"],
    categories: "jeans",
    colors: ["Blue"],
  },
  {
    id: 23,
    name: "Jeans",
    price: 60,
    imgUrl: jean4,
    size: ["sm", "md"],
    categories: "jeans",
    colors: ["Blue"],
  },
  {
    id: 24,
    name: "Jeans",
    price: 80,
    imgUrl: jean5,
    size: ["sm", "md"],
    categories: "jeans",
    colors: ["Blue"],
  },
  {
    id: 25,
    name: "Multi Shirts",
    price: 80,
    imgUrl: shirt1,
    size: ["lg", "md"],
    categories: "shirts",
    colors: ["Green"],
  },
  {
    id: 26,
    name: "Sexy Shirts",
    price: 100,
    imgUrl: shirt2,
    size: ["lg", "md"],
    categories: "shirts",
    colors: ["Black"],
  },
  {
    id: 27,
    name: "classic Shirts",
    price: 150,
    imgUrl: shirt3,
    size: ["sm", "md"],
    categories: "shirts",
    colors: ["Green"],
  },
  {
    id: 28,
    name: "See Through Shirts",
    price: 250,
    imgUrl: shirt4,
    size: ["sm", "md"],
    categories: "shirts",
    colors: ["Blue"],
  },
  {
    id: 29,
    name: "Shirts",
    price: 250,
    imgUrl: shirt5,
    size: ["lg", "md"],
    categories: "shirts",
    colors: ["Blue"],
  },
  {
    id: 31,
    name: "Trouser",
    price: 250,
    imgUrl: trouser1,
    size: ["lg", "md"],
    categories: "trousers",
    colors: ["green"],
  },
  {
    id: 32,
    name: "Trouser",
    price: 350,
    imgUrl: trouser2,
    size: ["sm", "md", "lg"],
    categories: "trousers",
    colors: ["Brown"],
  },
  {
    id: 32,
    name: "Trouser",
    price: 450,
    imgUrl: trouser3,
    size: ["sm", "md", "lg"],
    categories: "trousers",
    colors: ["Black"],
  },
  {
    id: 33,
    name: "Trouser",
    price: 400,
    imgUrl: trouser4,
    size: ["sm", "md", "lg"],
    categories: "trousers",
    colors: ["Purple"],
  },
  {
    id: 34,
    name: "Trouser",
    price: 400,
    imgUrl: trouser5,
    size: ["sm", "md", "lg"],
    categories: "trousers",
    colors: ["Pink"],
  },
];
