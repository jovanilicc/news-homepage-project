import retroPcsImg from "./assets/images/image-retro-pcs.jpg";
import topLaptopsImg from "./assets/images/image-top-laptops.jpg";
import gamingGrowthImg from "./assets/images/image-gaming-growth.jpg";

export interface News {
  title: string;
  text: string;
}

export interface TechNews extends News {
  place: string;
  altText: string;
  imageUrl: string;
}

export const latestNews: News[] = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generations?",
  },
  {
    title: "Is VC Funding Drying Up",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const techNews: TechNews[] = [
  {
    place: "01",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    altText: "Retro PCs",
    imageUrl: retroPcsImg,
  },
  {
    place: "02",
    title: "Top 10 Laptops of 2025",
    text: "Our best picks for various needs and budgets.",
    altText: "Top 10 Laptops",
    imageUrl: topLaptopsImg,
  },
  {
    place: "03",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    altText: "The Growth of Gaming",
    imageUrl: gamingGrowthImg,
  },
];
