import type { Child } from "hytale-generators";
import { categories } from "hytale-generators";

const categoryTypes: Child[] = [
  { id: "Ores", icon: "Blocks" },
  { id: "Gems", icon: "Natural-Ore" },
  "Dusts",
  "Ingots",
  "Alloys"
];

export const registerCategories = () => {
  categories().children(categoryTypes).build();
};
