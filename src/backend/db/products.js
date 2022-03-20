import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Amethyst Cluster",
    price: 5200,
    categoryName: "Spiritual",
    newArrival: true,
    inStock: 10,
    imageUrl: "assets/product1_img.jpeg"
  },
  {
    _id: uuid(),
    title: "Obsidian Pyramid",
    price: 5500,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 7,
    imageUrl: "/assets/product2_img.jpeg"
  },
  {
    _id: uuid(),
    title: "Lapis Sphere",
    price: 6700,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 8,
    imageUrl: "/assets/product3_img.jpeg"
  },
  {
    _id: uuid(),
    title: "Sun & Moon Hoodie",
    price: 1800,
    categoryName: "Clothing",
    newArrival: false,
    inStock: 1,
    imageUrl: "/assets/product4_img.jpeg"
  },
  {
    _id: uuid(),
    title: "Zodiac Keychain",
    price: 450,
    categoryName: "Accessories",
    newArrival: true,
    inStock: 10,
    imageUrl: "/assets/product5_img.jpg"
  },
  {
    _id: uuid(),
    title: "Zodiac Rings",
    price: 1200,
    categoryName: "Accessories",
    newArrival: false,
    inStock: 3,
    imageUrl: "/assets/product6_img.jpg"
  },
  {
    _id: uuid(),
    title: "Zodiac Pendant",
    price: 500,
    categoryName: "Accessories",
    newArrival: false,
    inStock: 10,
    imageUrl: "/assets/product7_img.jpg"
  },
  {
    _id: uuid(),
    title: "Zodiac WoodBox",
    price: 1500,
    categoryName: "Accessories",
    newArrival: false,
    inStock: 9,
    imageUrl: "/assets/product8_img.jpg"
  },
  {
    _id: uuid(),
    title: "Galaxy Tshirt",
    price: 700,
    categoryName: "Clothing",
    newArrival: false,
    inStock: 5,
    imageUrl: "/assets/product9_img.jpg"
  },
  {
    _id: uuid(),
    title: "Fluorite Crystal",
    price: 4900,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 10,
    imageUrl: "/assets/product10_img.jpg"
  },
  {
    _id: uuid(),
    title: "Quartz Sphere",
    price: 3000,
    categoryName: "Spiritual",
    newArrival: true,
    inStock: 3,
    imageUrl: "/assets/product11_img.jpeg"
  },
  {
    _id: uuid(),
    title: "Quartz Crystal",
    price: 7300,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 9,
    imageUrl: "/assets/product12_img.png"
  },
];
