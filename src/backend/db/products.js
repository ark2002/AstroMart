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
    imageUrl: "assets/product1_img.jpeg",
    description: "Amethyst is one of the most effective crystalsfor healing people, plants that won’t grow, and calming animals.",
    rating: 3.5
  },
  {
    _id: uuid(),
    title: "Obsidian Pyramid",
    price: 5500,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 7,
    imageUrl: "/assets/product2_img.jpeg",
    description: "Obsidian is formed when volcanic lava comes into contact with water; this forces it to cool so quickly.",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Lapis Sphere",
    price: 6700,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 8,
    imageUrl: "/assets/product3_img.jpeg",
    description: "Lapis Lazuli helps disconnect the conscious and subconscious mind and boosts intuition. Lapis lazuli is also a very protective stone.",
    rating: 5
  },
  {
    _id: uuid(),
    title: "Sun & Moon Hoodie",
    price: 1800,
    categoryName: "Clothing",
    newArrival: false,
    inStock: 1,
    imageUrl: "/assets/product4_img.jpeg",
    description: "A Black hoddie made out of the best quality cotton to provide you with supreme comfort with the a Sun And the moon design printed on the back.",
    rating: 4.2
  },
  {
    _id: uuid(),
    title: "Zodiac Keychain",
    price: 450,
    categoryName: "Accessories",
    newArrival: true,
    inStock: 10,
    imageUrl: "/assets/product5_img.jpg",
    description: "Get a fully costumized Keychain based on Your zodiac sign in premium quality metal. U can rock these on your keys , purses or even your bags.",
    rating: 2.5
  },
  {
    _id: uuid(),
    title: "Zodiac Rings",
    price: 1200,
    categoryName: "Jewellery",
    newArrival: false,
    inStock: 3,
    imageUrl: "/assets/product6_img.jpg",
    description: "Your star sign has a strong influence on your personality, character, and emotions. This ring is an elegant reminder of your star sign and its potent meaning.",
    rating: 5
  },
  {
    _id: uuid(),
    title: "Zodiac Pendant",
    price: 500,
    categoryName: "Jewellery",
    newArrival: false,
    inStock: 10,
    imageUrl: "/assets/product7_img.jpg",
    description: "Gorgeous Zodiac and birthstone pendant, a great gift for your friends or yourself! Costumize it according to your signs !",
    rating: 3.8
  },
  {
    _id: uuid(),
    title: "Zodiac WoodBox",
    price: 1500,
    categoryName: "Accessories",
    newArrival: false,
    inStock: 9,
    imageUrl: "/assets/product8_img.jpg",
    description: "This keepsake box is a marvelous gift! Personalized engraving makes your box unique and perfect for any occasion. It the perfect way to store all the little things in one place.",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Galaxy Tshirt",
    price: 700,
    categoryName: "Clothing",
    newArrival: false,
    inStock: 5,
    imageUrl: "/assets/product9_img.jpg",
    description: "Hand screen printed on a Next Level t shirt. Made with 100% combed and ring-spun cotton. The shirts are very lightweight and extremely soft.",
    rating: 3.9
  },
  {
    _id: uuid(),
    title: "Fluorite Crystal",
    price: 4900,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 10,
    imageUrl: "/assets/product10_img.jpg",
    description: "Fluorite is a highly protective and stabilizing stone, useful for grounding and harmonizing spiritual energy.  When working with the upper Chakras.",
    rating: 2.2
  },
  {
    _id: uuid(),
    title: "Quartz Sphere",
    price: 3000,
    categoryName: "Spiritual",
    newArrival: true,
    inStock: 3,
    imageUrl: "/assets/product11_img.jpeg",
    description: "Quartz is the most versatile and powerful healing stone in the mineral kingdom. It can open, balance, and energize all the chakras, especially the crown.",
    rating: 5
  },
  {
    _id: uuid(),
    title: "Quartz Crystal",
    price: 7300,
    categoryName: "Spiritual",
    newArrival: false,
    inStock: 9,
    imageUrl: "/assets/product12_img.png",
    description: "Quartz is the most versatile and powerful healing stone in the mineral kingdom. It can open, balance, and energize all the chakras, especially the crown.",
    rating: 3
  },
];
