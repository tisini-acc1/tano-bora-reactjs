import { img1, img2, img3 } from "@/assets/Hero";

export const data = [
  {
    id: 1,
    colorDeep: "#304e70",
    colorLite: "#d3dce0",
    mainText: "Math",
    shadow: "0px 10px 20px rgba(78, 112, 149, 0.8)",
    subText: "The Ultimate Prediction Game: Your Knowledge. Your Victory.",
    mobileShadow: "0px 5px 20px rgba(78, 112, 149, 0.8)",
    img: img1,
  },
  {
    id: 2,
    colorDeep: "#35553f",
    colorLite: "#dcdfc0",
    mainText: "Chance",
    subText: "Guess. Play. Win. Your Ultimate Prediction Challenge.",
    shadow: "0px 10px 20px rgba(130, 134, 99, 0.8)",
    mobileShadow: "0px 5px 20px rgba(130, 134, 99, 0.8)",
    img: img3,
  },
  {
    id: 3,
    colorDeep: "#431e1e",
    colorLite: "#e3d2c2",
    mainText: "Strategy",
    subText: "Five Events. One Winner. Are You Ready to Predict?",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: img2,
  },
];

export const navItems = [
  { id: "home", label: "Home", link: "/" },
  //   { id: "play", label: "Play", link: "/tanobora" },
  { id: "about", label: "About", link: "/about" },
  { id: "contactus", label: "Contact Us", link: "/contact" },
];
