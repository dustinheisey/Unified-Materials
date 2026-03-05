import type { MaterialCfg } from "hytale-generators";
import { isString, materials, resourceType } from "hytale-generators";

const { alloy } = materials([
  {
    id: "Alloy",
    defaults: {
      id: "Bar",
      mask: "Bars/Bar",
      baseName: "Ingot",
      icon: true,
      model: "Resources/Materials/Ingot",
      baseIconPath: "Bar",
      resourceType: "Metal_Bars"
    }
  }
]);

function alloyTooltip(cfg: MaterialCfg): string {
  return `<color is="#F2C230">${
    cfg.description
      ?.toString()
      .match(/[A-Z][a-z]?/g)
      ?.join(" · ") ?? cfg.description
  }</color>`;
}

export const alloys: (MaterialCfg & { input?: { id: string; name: string }[] })[] = [
  {
    id: "Alnico",
    description: "AlNiCoFe",
    color: "#6b4a3a",
    baseMask: "ultra-dense",
    input: [
      { id: "Ingredient_Bar_Aluminum", name: "Aluminum" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" },
      { id: "Ingredient_Bar_Iron", name: "Iron" }
    ]
  },
  {
    id: "Duralumin",
    description: "AlCuMgMn",
    baseMask: "light",
    color: "#b8c6d8",
    input: [
      { id: "Ingredient_Bar_Aluminum", name: "Aluminum" },
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Magnesium", name: "Magnesium" },
      { id: "Ingredient_Bar_Manganese", name: "Manganese" }
    ]
  },
  {
    id: "Bismanol",
    description: "MnBi",
    baseMask: "dense",
    color: "#344657",
    input: [
      { id: "Ingredient_Bar_Manganese", name: "Manganese" },
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" }
    ]
  },
  {
    id: "Rose_Metal",
    description: "BiPbSn",
    baseMask: "medium",
    color: "#b9c2cb",
    input: [
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" },
      { id: "Ingredient_Bar_Lead", name: "Lead" },
      { id: "Ingredient_Bar_Tin", name: "Tin" }
    ]
  },
  {
    id: "Nichrome",
    description: "NiCr",
    baseMask: "medium",
    color: "#9f9a87",
    input: [
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" }
    ]
  },
  {
    id: "Ferrochrome",
    description: "FeCr",
    color: "#586457",
    baseMask: "medium",
    input: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" }
    ]
  },
  {
    id: "Megallium",
    description: "CoCrMo",
    color: "#466a7d",
    baseMask: "medium",
    input: [
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Molybdenum", name: "Molybdenum" }
    ]
  },
  {
    id: "Talonite",
    description: "CoCrW",
    baseMask: "medium",
    color: "#3c5b6e",
    input: [
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Tungsten", name: "Tungsten" }
    ]
  },
  {
    id: "Vitallium",
    description: "CoCrMo",
    baseMask: "dense",
    color: "#4F8A73",
    input: [
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Molybdenum", name: "Molybdenum" }
    ]
  },
  {
    id: "Brass",
    description: "CuZn",
    baseMask: "medium",
    color: "#d6a33a",
    input: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Zinc", name: "Zinc" }
    ]
  },
  {
    id: "Bronze",
    description: "CuSn",
    color: "#b06a2a",
    baseMask: "dense",
    input: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Tin", name: "Tin" }
    ]
  },
  {
    id: "Arsenical_Bronze",
    description: "CuAs",
    color: "#9a6a3a",
    baseMask: "dense",
    input: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Arsenic", name: "Arsenic" }
    ]
  },
  {
    id: "Bismuth_Bronze",
    description: "CuSnBi",
    color: "#a77b5a",
    baseMask: "dense",
    input: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Tin", name: "Tin" },
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" }
    ]
  },
  {
    id: "Constantan",
    description: "CuNi",
    baseMask: "medium",
    color: "#b0a79b",
    input: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" }
    ]
  },
  {
    id: "Hepatizon",
    description: "CuAuAg",
    baseMask: "ultra-dense",
    color: "#3b2a3e",
    input: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Silver", name: "Silver" }
    ]
  },
  {
    id: "Galinstan",
    description: "GaInSn",
    baseMask: "light",
    color: "#d2dae5",
    input: [
      { id: "Ingredient_Bar_Gallium", name: "Gallium" },
      { id: "Ingredient_Bar_Indium", name: "Indium" },
      { id: "Ingredient_Bar_Tin", name: "Tin" }
    ]
  },
  {
    id: "Electrum",
    description: "AuAg",
    baseMask: "medium",
    color: "#d9cf6a",
    input: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Silver", name: "Silver" }
    ]
  },
  {
    id: "Purple_Gold",
    description: "AuAl",
    baseMask: "ultra-dense",
    color: "#7c4aa8",
    input: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Aluminum", name: "Aluminum" }
    ]
  },
  {
    id: "Blue_Gold",
    description: "AuIn",
    baseMask: "ultra-dense",
    color: "#2f63c7",
    input: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Indium", name: "Indium" }
    ]
  },
  {
    id: "Gray_Gold",
    description: "AuPd",
    baseMask: "medium",
    color: "#b7ad9e",
    input: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Palladium", name: "Palladium" }
    ]
  },
  {
    id: "Rose_Gold",
    description: "AuCu",
    baseMask: "medium",
    color: "#d38b7f",
    input: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Copper", name: "Copper" }
    ]
  },
  {
    id: "White_Gold",
    description: "AuNiPd",
    baseMask: "light",
    color: "#d7dbe2",
    input: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Palladium", name: "Palladium" }
    ]
  },
  {
    id: "Invar",
    description: "FeNi",
    color: "#8e979f",
    baseMask: "medium",
    input: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" }
    ]
  },
  {
    id: "Cast_Iron",
    description: "FeCSi",
    baseMask: "dense",
    color: "#243443",
    input: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Carbon", name: "Carbon" },
      { id: "Ingredient_Bar_Silicon", name: "Silicon" }
    ]
  },
  {
    id: "Stainless_Steel",
    description: "FeCrNi",
    baseMask: "medium",
    color: "#9aa3ad",
    input: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" }
    ]
  },
  {
    id: "Wrought_Iron",
    description: "FeSi",
    baseMask: "ultra-dense",
    color: "#1b2835",
    input: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Silicon", name: "Silicon" }
    ]
  },
  {
    id: "Tool_Steel",
    description: "FeCCr",
    baseMask: "dense",
    color: "#172a37",
    input: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Carbon", name: "Carbon" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" }
    ]
  },
  {
    id: "Pewter",
    description: "SnSbCu",
    baseMask: "dense",
    color: "#9ea7b3",
    input: [
      { id: "Ingredient_Bar_Tin", name: "Tin" },
      { id: "Ingredient_Bar_Antimony", name: "Antimony" },
      { id: "Ingredient_Bar_Copper", name: "Copper" }
    ]
  },
  {
    id: "Sterling_Silver",
    description: "AgCu",
    baseMask: "light",
    color: "#d6dde6",
    input: [
      { id: "Ingredient_Bar_Silver", name: "Silver" },
      { id: "Ingredient_Bar_Copper", name: "Copper" }
    ]
  },
  {
    id: "Nitinol",
    description: "NiTi",
    baseMask: "light",
    color: "#b2bcc8",
    input: [
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Titanium", name: "Titanium" }
    ]
  },
  {
    id: "Permalloy",
    description: "NiFe",
    baseMask: "light",
    color: "#5f8aa3",
    input: [
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Iron", name: "Iron" }
    ]
  },
  {
    id: "Queens_Metal",
    description: "SnSbCuBi",
    baseMask: "dense",
    color: "#bfc8d2",
    input: [
      { id: "Ingredient_Bar_Tin", name: "Tin" },
      { id: "Ingredient_Bar_Antimony", name: "Antimony" },
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" }
    ]
  }
];

export const registerAlloys = () => {
  resourceType("Alloys").build();
  alloy.many(alloys.map(alloy => ({ ...alloy, description: alloyTooltip(alloy) }))).build();
};
