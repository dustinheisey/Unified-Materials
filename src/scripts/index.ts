import { alloys, categories, gems, renameMetals, resourceType, setGlobal, syncPublic } from "hytale-generators";
import { elements } from "./generators/element.ts";

setGlobal({ modId: "UnifiedMaterials", outDir: "../main/resources" });

syncPublic();

const resourceTypes = [
  // "Gases",
  // { id: "Fluids", icon: "Natural-Fluid" },
  { id: "Ores", icon: "Blocks" },
  { id: "Gems", icon: "Natural-Ore" },
  "Dusts",
  "Ingots",
  "Alloys"
];

categories({ children: resourceTypes });
resourceTypes.forEach(resource => {
  resourceType(resource);
});

renameMetals([
  { id: "Iron", name: "Hematite", include: ["basalt", "sandstone", "shale", "slate", "stone", "volcanic", "ore"] },
  { id: "Cobalt", name: "Cobaltite", include: ["slate", "shale", "ore"] },
  { id: "Copper", name: "Malachite", include: ["ore", "sandstone", "shale", "stone"] },
  { id: "Gold", name: "Gold", include: ["ore"] },
  { id: "Silver", name: "Acanthite", include: ["ore", "basalt", "sandstone", "shale", "slate", "stone", "volcanic"] },
  { id: "Thorium", name: "Thorium", include: ["ore"] }
]);

elements(true, [
  // {
  //   id: "Hydrogen",
  //   atomicPrefix: "H",
  //   color: "#DFF6FF",
  //   atomicNumber: 1,
  //   include: [],
  //   atomicGroup: "Other Nonmetals"
  // },
  // {
  //   id: "Helium",
  //   atomicPrefix: "He",
  //   include: [],
  //   color: "#FFB37A",
  //   atomicNumber: 2,
  //   atomicGroup: "Noble Gases"
  // },
  {
    id: "Lithium",
    atomicPrefix: "Li",
    color: "#B7D7B2",
    atomicNumber: 3,
    ores: { baseName: "Spodumene" },
    atomicGroup: "Alkali Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Beryllium",
    atomicPrefix: "Be",
    color: "#BEE3E6",
    atomicNumber: 4,
    ores: { name: "Bertrandite", color: "#a0ced2" },
    atomicGroup: "Alkaline Earth Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Boron",
    atomicPrefix: "B",
    color: "#2A2A2A",
    atomicNumber: 5,
    ores: { baseName: "Borax", color: "#F7F7F7" },
    atomicGroup: "Metalloids",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Carbon",
    atomicPrefix: "C",
    color: "#1B1B1B",
    atomicNumber: 6,
    ores: { baseName: "Plumbago" },
    atomicGroup: "Other Nonmetals",
    ingot: { maskVariant: "dense" }
  },

  // {
  //   id: "Nitrogen",
  //   atomicPrefix: "N",
  //   color: "#7C4DFF",
  //   atomicNumber: 7,
  //   include: [],
  //   atomicGroup: "Other Nonmetals"
  // },
  // {
  //   id: "Oxygen",
  //   atomicPrefix: "O",
  //   include: [],
  //   color: "#66D9FF",
  //   atomicNumber: 8,
  //   atomicGroup: "Other Nonmetals"
  // },
  {
    id: "Fluorine",
    atomicPrefix: "F",
    color: "#E6F36A",
    atomicNumber: 9,
    exclude: ["bucket", "dust", "fluid", "ingot"],
    ores: { baseName: "Fluorite" },
    atomicGroup: "Halogens"
  },
  // {
  //   id: "Neon",
  //   atomicPrefix: "Ne",
  //   color: "#FF3B1F",
  //   atomicNumber: 10,
  //   atomicGroup: "Noble Gases",
  //   include: []
  // },
  {
    id: "Sodium",
    atomicPrefix: "Na",
    color: "#F5F7FF",
    atomicNumber: 11,
    ores: { baseName: "Halite" },
    atomicGroup: "Alkali Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Magnesium",
    atomicPrefix: "Mg",
    color: "#D9E3EA",
    atomicNumber: 12,
    ores: { name: "Magnesite", color: "#d9d5c2" },
    atomicGroup: "Alkaline Earth Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Aluminum",
    atomicPrefix: "Al",
    color: "#C8CED6",
    atomicNumber: 13,
    ores: { baseName: "Bauxite", color: "#A35A3A" },
    atomicGroup: "Post Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Silicon",
    atomicPrefix: "Si",
    color: "#3A3F46",
    atomicNumber: 14,
    ores: { baseName: "Quartz", color: "#F7F7F7" },
    atomicGroup: "Metalloids",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Phosphorus",
    atomicPrefix: "P",
    color: "#E6D35C",
    atomicNumber: 15,
    ores: { name: "Apatite", color: "#4A90E2" },
    atomicGroup: "Other Nonmetals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Sulfur",
    atomicPrefix: "S",
    color: "#F2D21B",
    atomicNumber: 16,
    atomicGroup: "Other Nonmetals",
    ingot: { maskVariant: "medium" }
  },
  // {
  //   id: "Chlorine",
  //   atomicPrefix: "Cl",
  //   include: [],
  //   color: "#B7E600",
  //   atomicNumber: 17,
  //   atomicGroup: "Halogens"
  // },
  // {
  //   id: "Argon",
  //   include: [],
  //   atomicPrefix: "Ar",
  //   color: "#B39DFF",
  //   atomicNumber: 18,
  //   atomicGroup: "Noble Gases"
  // },
  {
    id: "Potassium",
    atomicPrefix: "K",
    color: "#DCC9B9",
    atomicNumber: 19,
    ores: { baseName: "Sylvite", color: "#C97B6A" },
    atomicGroup: "Alkali Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Calcium",
    atomicPrefix: "Ca",
    color: "#E8E2C9",
    atomicNumber: 20,
    ores: { baseName: "Calcite", color: "#e9e2d2" },
    atomicGroup: "Alkaline Earth Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Scandium",
    atomicPrefix: "Sc",
    color: "#C9D3D9",
    atomicNumber: 21,
    ores: { baseName: "Thortveitite", color: "#6E8B7C" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Titanium",
    atomicPrefix: "Ti",
    color: "#AEB8C6",
    atomicNumber: 22,
    ores: { baseName: "Ilmenite", color: "#1F1F1F" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Vanadium",
    atomicPrefix: "V",
    color: "#7d6c8e",
    atomicNumber: 23,
    ores: { name: "Vanadinite", color: "#B24A2A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Chromium",
    atomicPrefix: "Cr",
    color: "#BFCAD3",
    atomicNumber: 24,
    ores: { baseName: "Chromite", color: "#2B2B2B" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Manganese",
    atomicPrefix: "Mn",
    color: "#6F7478",
    atomicNumber: 25,
    ores: { name: "Pyrolusite", color: "#2A2A2A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Iron",
    atomicPrefix: "Fe",
    color: "#9AA0A6",
    atomicNumber: 26,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Cobalt",
    atomicPrefix: "Co",
    color: "#3D5DAA",
    atomicNumber: 27,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Nickel",
    atomicPrefix: "Ni",
    color: "#B5BDC4",
    atomicNumber: 28,
    ores: { name: "Pentlandite", color: "#B08A4A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Copper",
    atomicPrefix: "Cu",
    color: "#B86A3C",
    atomicNumber: 29,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Zinc",
    atomicPrefix: "Zn",
    color: "#C6CCD2",
    atomicNumber: 30,
    ores: { baseName: "Sphalerite", color: "#8A5A2B" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Gallium",
    atomicPrefix: "Ga",
    color: "#BFC7D0",
    atomicNumber: 31,
    ores: { baseName: "Gallite", color: "#3C3F46" },
    atomicGroup: "Post Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Germanium",
    atomicPrefix: "Ge",
    color: "#6B6F7A",
    atomicNumber: 32,
    ores: { name: "Germanite" },
    atomicGroup: "Metalloids",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Arsenic",
    atomicPrefix: "As",
    color: "#5A5E64",
    atomicNumber: 33,
    ores: { name: "Arsenopyrite" },
    atomicGroup: "Metalloids",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Selenium",
    atomicPrefix: "Se",
    color: "#6B0F0F",
    atomicNumber: 34,
    atomicGroup: "Other Nonmetals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Bromine",
    atomicPrefix: "Br",
    color: "#5C0F0F",
    atomicNumber: 35,
    atomicGroup: "Halogens",
    include: ["bucket", "fluid"]
  },
  // {
  //   id: "Krypton",
  //   include: [],
  //   atomicPrefix: "Kr",
  //   color: "#CFFFE3",
  //   atomicNumber: 36,
  //   atomicGroup: "Noble Gases"
  // },
  {
    id: "Rubidium",
    atomicPrefix: "Rb",
    color: "#B8B5E8",
    atomicNumber: 37,
    ores: { name: "Lepidolite", color: "#C9A3E6" },
    atomicGroup: "Alkali Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Strontium",
    atomicPrefix: "Sr",
    color: "#BFD0FF",
    atomicNumber: 38,
    ores: { name: "Celestite", color: "#79AEEB" },
    atomicGroup: "Alkaline Earth Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Yttrium",
    atomicPrefix: "Y",
    color: "#C7D1D8",
    atomicNumber: 39,
    ores: { baseName: "Xenotime", color: "#7A5A3A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Zirconium",
    atomicPrefix: "Zr",
    color: "#C4CDD6",
    atomicNumber: 40,
    ores: { baseName: "Zircon", color: "#8C6A4A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Niobium",
    atomicPrefix: "Nb",
    color: "#7C8590",
    atomicNumber: 41,
    ores: { name: "Pyrochlore", color: "#B88A2A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Molybdenum",
    atomicPrefix: "Mo",
    color: "#AEB5BF",
    atomicNumber: 42,
    ores: { name: "Molybdenite", color: "#3A3A3A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Technetium",
    atomicPrefix: "Tc",
    color: "#5C9B7A",
    atomicNumber: 43,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Ruthenium",
    atomicPrefix: "Ru",
    color: "#A9B2BA",
    atomicNumber: 44,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Rhodium",
    atomicPrefix: "Rh",
    color: "#D4D7DC",
    atomicNumber: 45,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Palladium",
    atomicPrefix: "Pd",
    color: "#b46113",
    atomicNumber: 46,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Silver",
    atomicPrefix: "Ag",
    color: "#E5E9ED",
    atomicNumber: 47,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Cadmium",
    atomicPrefix: "Cd",
    color: "#D3E0B8",
    atomicNumber: 48,
    ores: { baseName: "Greenockite", color: "#E6C300" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Indium",
    atomicPrefix: "In",
    color: "#B7C3D0",
    atomicNumber: 49,
    ores: { baseName: "Roquesite", color: "#4A4E57" },
    atomicGroup: "Post Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Tin",
    atomicPrefix: "Sn",
    color: "#ccc9c6",
    atomicNumber: 50,
    ores: { baseName: "Cassiterite" },
    atomicGroup: "Post Transition Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Antimony",
    atomicPrefix: "Sb",
    color: "#737A80",
    atomicNumber: 51,
    ores: { baseName: "Stibnite" },
    atomicGroup: "Metalloids",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Tellurium",
    atomicPrefix: "Te",
    color: "#7A7E8F",
    atomicNumber: 52,
    ores: { name: "Tellurite" },
    atomicGroup: "Metalloids",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Iodine",
    atomicPrefix: "I",
    color: "#2E213A",
    atomicNumber: 53,
    atomicGroup: "Halogens",
    ingot: { maskVariant: "medium" }
  },
  // {
  //   id: "Xenon",
  //   include: [],
  //   atomicPrefix: "Xe",
  //   color: "#A6E7FF",
  //   atomicNumber: 54,
  //   atomicGroup: "Noble Gases"
  // },
  {
    id: "Cesium",
    atomicPrefix: "Cs",
    color: "#CFE2B8",
    atomicNumber: 55,
    ores: { baseName: "Pollucite", color: "#bcd3a1" },
    atomicGroup: "Alkali Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Barium",
    atomicPrefix: "Ba",
    color: "#E6D2F0",
    atomicNumber: 56,
    ores: { baseName: "Barite", color: "#d2cce3" },
    atomicGroup: "Alkaline Earth Metals",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Lanthanum",
    atomicPrefix: "La",
    color: "#BFD7FF",
    atomicNumber: 57,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Cerium",
    atomicPrefix: "Ce",
    color: "#BFEBD8",
    atomicNumber: 58,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Praseodymium",
    atomicPrefix: "Pr",
    color: "#BDECC6",
    atomicNumber: 59,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Neodymium",
    atomicPrefix: "Nd",
    color: "#C7C8FF",
    atomicNumber: 60,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Promethium",
    atomicPrefix: "Pm",
    color: "#6FAE5B",
    atomicNumber: 61,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Samarium",
    atomicPrefix: "Sm",
    color: "#E0C2FF",
    atomicNumber: 62,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Europium",
    atomicPrefix: "Eu",
    color: "#E8F0B8",
    atomicNumber: 63,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Gadolinium",
    atomicPrefix: "Gd",
    color: "#BDE3F2",
    atomicNumber: 64,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Terbium",
    atomicPrefix: "Tb",
    color: "#BDF2DE",
    atomicNumber: 65,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Dysprosium",
    atomicPrefix: "Dy",
    color: "#CFE1FF",
    atomicNumber: 66,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Holmium",
    atomicPrefix: "Ho",
    color: "#D1F0D2",
    atomicNumber: 67,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Erbium",
    atomicPrefix: "Er",
    color: "#F0C6E9",
    atomicNumber: 68,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Thulium",
    atomicPrefix: "Tm",
    color: "#BFD6FF",
    atomicNumber: 69,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Ytterbium",
    atomicPrefix: "Yb",
    color: "#F2F0C8",
    atomicNumber: 70,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "medium" }
  },
  {
    id: "Lutetium",
    atomicPrefix: "Lu",
    color: "#D7F2F2",
    atomicNumber: 71,
    atomicGroup: "Lanthanides",
    ingot: { maskVariant: "dense" }
  },

  {
    id: "Hafnium",
    atomicPrefix: "Hf",
    color: "#B6C0C9",
    atomicNumber: 72,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Tantalum",
    atomicPrefix: "Ta",
    color: "#6B737B",
    atomicNumber: 73,
    ores: { name: "Tantalite", color: "#1E1E1E" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Tungsten",
    atomicPrefix: "W",
    color: "#68645b",
    atomicNumber: 74,
    ores: { name: "Wolframite", color: "#2A1F1B" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Rhenium",
    atomicPrefix: "Re",
    color: "#848C95",
    atomicNumber: 75,
    ores: { baseName: "Rheniite", color: "#6B6F7A" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Osmium",
    atomicPrefix: "Os",
    color: "#4C545C",
    atomicNumber: 76,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Iridium",
    atomicPrefix: "Ir",
    color: "#707880",
    atomicNumber: 77,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Platinum",
    atomicPrefix: "Pt",
    color: "#D6DADF",
    atomicNumber: 78,
    ores: { baseName: "Sperrylite", color: "#AEB4BB" },
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Gold",
    atomicPrefix: "Au",
    color: "#F2C230",
    atomicNumber: 79,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Mercury",
    atomicPrefix: "Hg",
    color: "#B8BCC2",
    atomicNumber: 80,
    exclude: ["gas_block", "ingot", "potion", "bucket", "fluid"],
    ores: { name: "Cinnabar", color: "#A9201B" },
    atomicGroup: "Transition Metals"
  },
  {
    id: "Thallium",
    atomicPrefix: "Tl",
    color: "#8B9C8A",
    atomicNumber: 81,
    ores: { name: "Lorandite", color: "#6B1020" },
    atomicGroup: "Post Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Lead",
    atomicPrefix: "Pb",
    color: "#5b5466",
    atomicNumber: 82,
    ores: { baseName: "Galena" },
    atomicGroup: "Post Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Bismuth",
    atomicPrefix: "Bi",
    color: "#B8BCC2",
    atomicNumber: 83,
    ores: { name: "Bismuthinite", color: "#4B4F55" },
    atomicGroup: "Post Transition Metals",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Polonium",
    atomicPrefix: "Po",
    color: "#3B3F3B",
    atomicNumber: 84,
    atomicGroup: "Metalloids",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Astatine",
    atomicPrefix: "At",
    color: "#1F1F27",
    atomicNumber: 85,
    atomicGroup: "Halogens",
    ingot: { maskVariant: "medium" }
  },
  // {
  //   id: "Radon",
  //   include: [],
  //   atomicPrefix: "Rn",
  //   color: "#5B2BFF",
  //   atomicNumber: 86,
  //   atomicGroup: "Noble Gases"
  // },
  {
    id: "Francium",
    atomicPrefix: "Fr",
    color: "#7C6A6A",
    atomicNumber: 87,
    atomicGroup: "Alkali Metals",
    ingot: { maskVariant: "light" }
  },
  {
    id: "Radium",
    atomicPrefix: "Ra",
    color: "#8CCB4A",
    atomicNumber: 88,
    atomicGroup: "Alkaline Earth Metals",
    ingot: { maskVariant: "medium" }
  },

  {
    id: "Actinium",
    atomicPrefix: "Ac",
    color: "#6B7C6A",
    atomicNumber: 89,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Thorium",
    atomicPrefix: "Th",
    color: "#7A8C78",
    atomicNumber: 90,
    include: ["dust"],
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Protactinium",
    atomicPrefix: "Pa",
    color: "#5E7563",
    atomicNumber: 91,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Uranium",
    atomicPrefix: "U",
    color: "#748b3e",
    atomicNumber: 92,
    ores: { baseName: "Uraninite" },
    atomicGroup: "Actinides",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Neptunium",
    atomicPrefix: "Np",
    color: "#2F7E6B",
    atomicNumber: 93,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Plutonium",
    atomicPrefix: "Pu",
    color: "#4B7A2A",
    atomicNumber: 94,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Americium",
    atomicPrefix: "Am",
    color: "#7BAA2D",
    atomicNumber: 95,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Curium",
    atomicPrefix: "Cm",
    color: "#6DA34C",
    atomicNumber: 96,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Berkelium",
    atomicPrefix: "Bk",
    color: "#4D8F3A",
    atomicNumber: 97,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Californium",
    atomicPrefix: "Cf",
    color: "#8CA33B",
    atomicNumber: 98,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Einsteinium",
    atomicPrefix: "Es",
    color: "#6B9B57",
    atomicNumber: 99,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Fermium",
    atomicPrefix: "Fm",
    color: "#5A8A6A",
    atomicNumber: 100,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Mendelevium",
    atomicPrefix: "Md",
    color: "#5C7E73",
    atomicNumber: 101,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Nobelium",
    atomicPrefix: "No",
    color: "#6E7F6A",
    atomicNumber: 102,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },
  {
    id: "Lawrencium",
    atomicPrefix: "Lr",
    color: "#687A6C",
    atomicNumber: 103,
    atomicGroup: "Actinides",
    ingot: { maskVariant: "dense" }
  },

  {
    id: "Rutherfordium",
    atomicPrefix: "Rf",
    color: "#8B1FA9",
    atomicNumber: 104,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Dubnium",
    atomicPrefix: "Db",
    color: "#1E3A8A",
    atomicNumber: 105,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Seaborgium",
    atomicPrefix: "Sg",
    color: "#2E8B74",
    atomicNumber: 106,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Bohrium",
    atomicPrefix: "Bh",
    color: "#84CC16",
    atomicNumber: 107,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Hassium",
    atomicPrefix: "Hs",
    color: "#FA6BD1",
    atomicNumber: 108,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Meitnerium",
    atomicPrefix: "Mt",
    color: "#FFE44D",
    atomicNumber: 109,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Darmstadtium",
    atomicPrefix: "Ds",
    color: "#FACC15",
    atomicNumber: 110,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Roentgenium",
    atomicPrefix: "Rg",
    color: "#F97316",
    atomicNumber: 111,
    atomicGroup: "Transition Metals",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Copernicium",
    atomicPrefix: "Cn",
    color: "#FF8A2A",
    atomicNumber: 112,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Nihonium",
    atomicPrefix: "Nh",
    color: "#E11D48",
    atomicNumber: 113,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Flerovium",
    atomicPrefix: "Fl",
    color: "#7C3AED",
    atomicNumber: 114,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Moscovium",
    atomicPrefix: "Mc",
    color: "#22C55E",
    atomicNumber: 115,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Livermorium",
    atomicPrefix: "Lv",
    color: "#B91C1C",
    atomicNumber: 116,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Tennessine",
    atomicPrefix: "Ts",
    color: "#14B8A6",
    atomicNumber: 117,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  },
  {
    id: "Organesson",
    atomicPrefix: "Og",
    color: "#270244",
    atomicNumber: 118,
    atomicGroup: "Unknown",
    ingot: { maskVariant: "ultra-dense" }
  }
]);

gems(true, [
  { id: "Amber", color: "#FFB347" }, // warm golden honey
  { id: "Amethyst", color: "#B57EDC", maskVariant: "dark" }, // bright violet
  { id: "Aquamarine", color: "#7FFFD4" }, // light aqua blue
  { id: "Bloodstone", color: "#B22222", maskVariant: "dark" }, // brighter deep red
  { id: "Carnelian", color: "#FF6F3C" }, // vivid orange-red
  { id: "Citrine", color: "#FFD54F" }, // bright lemon gold
  { id: "Diopside", color: "#5BFFB0" }, // luminous emerald-green
  { id: "Garnet", color: "#C21833" }, // rich ruby-red
  { id: "Jade", color: "#3CBF7A" }, // lighter imperial green
  { id: "Lazurite", color: "#3F66E0", maskVariant: "dark" }, // brighter royal blue
  { id: "Moonstone", color: "#E6EAF5", maskVariant: "light" }, // pale iridescent blue-white
  { id: "Obsidian", color: "#2C1B3A", maskVariant: "dark" }, // glossy volcanic purple-black
  { id: "Olivine", color: "#B4E04A" }, // bright yellow-green
  { id: "Onyx", color: "#2B2B2B", maskVariant: "dark" }, // polished charcoal
  { id: "Opal", color: "#FFFFFF", maskVariant: "light" }, // bright milky white
  { id: "Peridot", color: "#A4F11A" }, // vivid lime green
  { id: "Rose_Quartz", color: "#F7A8B8" }, // soft luminous pink
  { id: "Sodalite", color: "#3A4FA3", maskVariant: "dark" }, // brighter sapphire-blue
  { id: "Sunstone", color: "#FF914D" }, // glowing peach-orange
  { id: "Tigers_Eye", color: "#C6862F", maskVariant: "dark" }, // golden brown
  { id: "Turquoise", color: "#40E0D0" } // bright tropical cyan
]);

alloys(true, [
  {
    id: "Alnico",
    color: "#6b4a3a",
    maskVariant: "ultra-dense",
    inputs: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" }
    ]
  },
  {
    id: "Duralumin",
    maskVariant: "light",
    color: "#b8c6d8",
    inputs: [
      { id: "Ingredient_Bar_Aluminum", name: "Aluminum" },
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Magnesium", name: "Magnesium" }
    ]
  },
  {
    id: "Bismanol",
    maskVariant: "dense",
    color: "#344657",
    inputs: [
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" },
      { id: "Ingredient_Bar_Manganese", name: "Manganese" }
    ]
  },
  {
    id: "Rose_Metal",
    maskVariant: "medium",
    color: "#b9c2cb",
    inputs: [
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" },
      { id: "Ingredient_Bar_Lead", name: "Lead" },
      { id: "Ingredient_Bar_Tin", name: "Tin" }
    ]
  },
  {
    id: "Nichrome",
    maskVariant: "medium",
    color: "#9f9a87",
    inputs: [
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" }
    ]
  },
  {
    id: "Ferrochrome",
    color: "#586457",
    maskVariant: "medium",
    inputs: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" }
    ]
  },
  {
    id: "Megallium",
    color: "#466a7d",
    maskVariant: "medium",
    inputs: [
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Molybdenum", name: "Molybdenum" }
    ]
  },
  {
    id: "Talonite",
    maskVariant: "medium",
    color: "#3c5b6e",
    inputs: [
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Molybdenum", name: "Molybdenum" }
    ]
  },
  {
    id: "Vitallium",
    maskVariant: "dense",
    color: "#4F8A73",
    inputs: [
      { id: "Ingredient_Bar_Cobalt", name: "Cobalt" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Molybdenum", name: "Molybdenum" }
    ]
  },
  {
    id: "Brass",
    maskVariant: "medium",
    color: "#d6a33a",
    inputs: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Zinc", name: "Zinc" }
    ]
  },
  {
    id: "Bronze",
    color: "#b06a2a",
    maskVariant: "dense",
    inputs: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Tin", name: "Tin" }
    ]
  },
  {
    id: "Arsenical_Bronze",
    color: "#9a6a3a",
    maskVariant: "dense",
    inputs: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Arsenic", name: "Arsenic" },
      { id: "Ingredient_Bar_Tin", name: "Tin" }
    ]
  },
  {
    id: "Bismuth_Bronze",
    color: "#a77b5a",
    maskVariant: "dense",
    inputs: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Tin", name: "Tin" },
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" }
    ]
  },
  {
    id: "Constantan",
    maskVariant: "medium",
    color: "#b0a79b",
    inputs: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" }
    ]
  },
  {
    id: "Hepatizon",
    maskVariant: "ultra-dense",
    color: "#3b2a3e",
    inputs: [
      { id: "Ingredient_Bar_Copper", name: "Copper" },
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Silver", name: "Silver" }
    ]
  },
  {
    id: "Galinsstan",
    maskVariant: "light",
    color: "#d2dae5",
    inputs: [
      { id: "Ingredient_Bar_Gallium", name: "Gallium" },
      { id: "Ingredient_Bar_Indium", name: "Indium" },
      { id: "Ingredient_Bar_Tin", name: "Tin" }
    ]
  },
  {
    id: "Electrum",
    maskVariant: "medium",
    color: "#d9cf6a",
    inputs: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Silver", name: "Silver" }
    ]
  },
  {
    id: "Purple_Gold",
    maskVariant: "ultra-dense",
    color: "#7c4aa8",
    inputs: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Aluminum", name: "Aluminum" }
    ]
  },
  {
    id: "Blue_Gold",
    maskVariant: "ultra-dense",
    color: "#2f63c7",
    inputs: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Indium", name: "Indium" }
    ]
  },
  {
    id: "Gray_Gold",
    maskVariant: "medium",
    color: "#b7ad9e",
    inputs: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Palladium", name: "Palladium" }
    ]
  },
  {
    id: "Rose_Gold",
    maskVariant: "medium",
    color: "#d38b7f",
    inputs: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Copper", name: "Copper" }
    ]
  },
  {
    id: "White_Gold",
    maskVariant: "light",
    color: "#d7dbe2",
    inputs: [
      { id: "Ingredient_Bar_Gold", name: "Gold" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Palladium", name: "Palladium" }
    ]
  },
  {
    id: "Invar",
    color: "#8e979f",
    maskVariant: "medium",
    inputs: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" }
    ]
  },
  {
    id: "Cast_Iron",
    maskVariant: "dense",
    color: "#243443",
    inputs: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Carbon", name: "Carbon" },
      { id: "Ingredient_Bar_Silicon", name: "Silicon" }
    ]
  },
  {
    id: "Stainless_Steel",
    maskVariant: "medium",
    color: "#9aa3ad",
    inputs: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" },
      { id: "Ingredient_Bar_Nickel", name: "Nickel" }
    ]
  },
  {
    id: "Wrought_Iron",
    maskVariant: "ultra-dense",
    color: "#1b2835",
    inputs: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Silicon", name: "Silicon" }
    ]
  },
  {
    id: "Tool_Steel",
    maskVariant: "dense",
    color: "#172a37",
    inputs: [
      { id: "Ingredient_Bar_Iron", name: "Iron" },
      { id: "Ingredient_Bar_Carbon", name: "Carbon" },
      { id: "Ingredient_Bar_Chromium", name: "Chromium" }
    ]
  },
  {
    id: "Pewter",
    maskVariant: "dense",
    color: "#9ea7b3",
    inputs: [
      { id: "Ingredient_Bar_Tin", name: "Tin" },
      { id: "Ingredient_Bar_Lead", name: "Lead" },
      { id: "Ingredient_Bar_Antimony", name: "Antimony" }
    ]
  },
  {
    id: "Sterling_Silver",
    maskVariant: "light",
    color: "#d6dde6",
    inputs: [
      { id: "Ingredient_Bar_Silver", name: "Silver" },
      { id: "Ingredient_Bar_Lead", name: "Lead" }
    ]
  },
  {
    id: "Nitinol",
    maskVariant: "light",
    color: "#b2bcc8",
    inputs: [
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Titanium", name: "Titanium" }
    ]
  },
  {
    id: "Permalloy",
    maskVariant: "light",
    color: "#5f8aa3",
    inputs: [
      { id: "Ingredient_Bar_Nickel", name: "Nickel" },
      { id: "Ingredient_Bar_Iron", name: "Iron" }
    ]
  },
  {
    id: "Queens_Metal",
    maskVariant: "dense",
    color: "#bfc8d2",
    inputs: [
      { id: "Ingredient_Bar_Tin", name: "Tin" },
      { id: "Ingredient_Bar_Antimony", name: "Antimony" },
      { id: "Ingredient_Bar_Lead", name: "Lead" },
      { id: "Ingredient_Bar_Bismuth", name: "Bismuth" }
    ]
  }
]);
