import { isString, resourceType } from "hytale-generators";
import type { MetalCfg } from "../generators/metal.ts";
import { metal } from "../generators/metal.ts";

export const metals: MetalCfg[] = [
  {
    id: "Lithium",
    atomicPrefix: "Li",
    color: "#B7D7B2",
    atomicNumber: 3,
    ores: { baseName: "Spodumene" },
    atomicGroup: "Alkali Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Beryllium",
    atomicPrefix: "Be",
    color: "#BEE3E6",
    atomicNumber: 4,
    ores: { baseName: "Bertrandite", color: "#a0ced2" },
    atomicGroup: "Alkaline Earth Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Boron",
    atomicPrefix: "B",
    color: "#2A2A2A",
    atomicNumber: 5,
    ores: { baseName: "Borax", color: "#F7F7F7" },
    atomicGroup: "Metalloids",
    bar: { baseMask: "light" }
  },
  {
    id: "Carbon",
    atomicPrefix: "C",
    color: "#1B1B1B",
    atomicNumber: 6,
    ores: { baseName: "Plumbago" },
    atomicGroup: "Other Nonmetals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Fluorine",
    atomicPrefix: "F",
    color: "#E6F36A",
    atomicNumber: 9,
    exclude: ["bucket", "dust", "fluid", "bar"],
    ores: { baseName: "Fluorite" },
    atomicGroup: "Halogens"
  },
  {
    id: "Sodium",
    atomicPrefix: "Na",
    color: "#F5F7FF",
    atomicNumber: 11,
    ores: { baseName: "Halite" },
    atomicGroup: "Alkali Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Magnesium",
    atomicPrefix: "Mg",
    color: "#D9E3EA",
    atomicNumber: 12,
    ores: { baseName: "Magnesite", color: "#d9d5c2" },
    atomicGroup: "Alkaline Earth Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Aluminum",
    atomicPrefix: "Al",
    color: "#C8CED6",
    atomicNumber: 13,
    ores: { baseName: "Bauxite", color: "#A35A3A" },
    atomicGroup: "Post Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Silicon",
    atomicPrefix: "Si",
    color: "#3A3F46",
    atomicNumber: 14,
    ores: { baseName: "Quartz", color: "#F7F7F7" },
    atomicGroup: "Metalloids",
    bar: { baseMask: "medium" }
  },
  {
    id: "Phosphorus",
    atomicPrefix: "P",
    color: "#E6D35C",
    atomicNumber: 15,
    ores: { baseName: "Apatite", color: "#4A90E2" },
    atomicGroup: "Other Nonmetals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Sulfur",
    atomicPrefix: "S",
    color: "#F2D21B",
    atomicNumber: 16,
    atomicGroup: "Other Nonmetals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Potassium",
    atomicPrefix: "K",
    color: "#DCC9B9",
    atomicNumber: 19,
    ores: { baseName: "Sylvite", color: "#C97B6A" },
    atomicGroup: "Alkali Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Calcium",
    atomicPrefix: "Ca",
    color: "#E8E2C9",
    atomicNumber: 20,
    ores: { baseName: "Calcite", color: "#e9e2d2" },
    atomicGroup: "Alkaline Earth Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Scandium",
    atomicPrefix: "Sc",
    color: "#C9D3D9",
    atomicNumber: 21,
    ores: { baseName: "Thortveitite", color: "#6E8B7C" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Titanium",
    atomicPrefix: "Ti",
    color: "#AEB8C6",
    atomicNumber: 22,
    ores: { baseName: "Ilmenite", color: "#1F1F1F" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Vanadium",
    atomicPrefix: "V",
    color: "#7d6c8e",
    atomicNumber: 23,
    ores: { baseName: "Vanadinite", color: "#B24A2A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Chromium",
    atomicPrefix: "Cr",
    color: "#BFCAD3",
    atomicNumber: 24,
    ores: { baseName: "Chromite", color: "#2B2B2B" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Manganese",
    atomicPrefix: "Mn",
    color: "#6F7478",
    atomicNumber: 25,
    ores: { baseName: "Pyrolusite", color: "#2A2A2A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Iron",
    atomicPrefix: "Fe",
    color: "#9AA0A6",
    atomicNumber: 26,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Cobalt",
    atomicPrefix: "Co",
    color: "#3D5DAA",
    atomicNumber: 27,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Nickel",
    atomicPrefix: "Ni",
    color: "#B5BDC4",
    atomicNumber: 28,
    ores: { baseName: "Pentlandite", color: "#B08A4A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Copper",
    atomicPrefix: "Cu",
    color: "#B86A3C",
    atomicNumber: 29,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Zinc",
    atomicPrefix: "Zn",
    color: "#C6CCD2",
    atomicNumber: 30,
    ores: { baseName: "Sphalerite", color: "#8A5A2B" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Gallium",
    atomicPrefix: "Ga",
    color: "#BFC7D0",
    atomicNumber: 31,
    ores: { baseName: "Gallite", color: "#3C3F46" },
    atomicGroup: "Post Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Germanium",
    atomicPrefix: "Ge",
    color: "#6B6F7A",
    atomicNumber: 32,
    ores: { baseName: "Germanite" },
    atomicGroup: "Metalloids",
    bar: { baseMask: "medium" }
  },
  {
    id: "Arsenic",
    atomicPrefix: "As",
    color: "#5A5E64",
    atomicNumber: 33,
    ores: { baseName: "Arsenopyrite" },
    atomicGroup: "Metalloids",
    bar: { baseMask: "medium" }
  },
  {
    id: "Selenium",
    atomicPrefix: "Se",
    color: "#6B0F0F",
    atomicNumber: 34,
    atomicGroup: "Other Nonmetals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Rubidium",
    atomicPrefix: "Rb",
    color: "#B8B5E8",
    atomicNumber: 37,
    ores: { baseName: "Lepidolite", color: "#C9A3E6" },
    atomicGroup: "Alkali Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Strontium",
    atomicPrefix: "Sr",
    color: "#BFD0FF",
    atomicNumber: 38,
    ores: { baseName: "Celestite", color: "#79AEEB" },
    atomicGroup: "Alkaline Earth Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Yttrium",
    atomicPrefix: "Y",
    color: "#C7D1D8",
    atomicNumber: 39,
    ores: { baseName: "Xenotime", color: "#7A5A3A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Zirconium",
    atomicPrefix: "Zr",
    color: "#C4CDD6",
    atomicNumber: 40,
    ores: { baseName: "Zircon", color: "#8C6A4A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Niobium",
    atomicPrefix: "Nb",
    color: "#7C8590",
    atomicNumber: 41,
    ores: { baseName: "Pyrochlore", color: "#B88A2A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Molybdenum",
    atomicPrefix: "Mo",
    color: "#AEB5BF",
    atomicNumber: 42,
    ores: { baseName: "Molybdenite", color: "#3A3A3A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Technetium",
    atomicPrefix: "Tc",
    color: "#5C9B7A",
    atomicNumber: 43,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Ruthenium",
    atomicPrefix: "Ru",
    color: "#A9B2BA",
    atomicNumber: 44,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Rhodium",
    atomicPrefix: "Rh",
    color: "#D4D7DC",
    atomicNumber: 45,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Palladium",
    atomicPrefix: "Pd",
    color: "#b46113",
    atomicNumber: 46,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Silver",
    atomicPrefix: "Ag",
    color: "#E5E9ED",
    atomicNumber: 47,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Cadmium",
    atomicPrefix: "Cd",
    color: "#D3E0B8",
    atomicNumber: 48,
    ores: { baseName: "Greenockite", color: "#E6C300" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Indium",
    atomicPrefix: "In",
    color: "#B7C3D0",
    atomicNumber: 49,
    ores: { baseName: "Roquesite", color: "#4A4E57" },
    atomicGroup: "Post Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Tin",
    atomicPrefix: "Sn",
    color: "#ccc9c6",
    atomicNumber: 50,
    ores: { baseName: "Cassiterite" },
    atomicGroup: "Post Transition Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Antimony",
    atomicPrefix: "Sb",
    color: "#737A80",
    atomicNumber: 51,
    ores: { baseName: "Stibnite" },
    atomicGroup: "Metalloids",
    bar: { baseMask: "medium" }
  },
  {
    id: "Tellurium",
    atomicPrefix: "Te",
    color: "#7A7E8F",
    atomicNumber: 52,
    ores: { baseName: "Tellurite" },
    atomicGroup: "Metalloids",
    bar: { baseMask: "medium" }
  },
  {
    id: "Iodine",
    atomicPrefix: "I",
    color: "#2E213A",
    atomicNumber: 53,
    atomicGroup: "Halogens",
    bar: { baseMask: "medium" }
  },
  {
    id: "Cesium",
    atomicPrefix: "Cs",
    color: "#CFE2B8",
    atomicNumber: 55,
    ores: { baseName: "Pollucite", color: "#bcd3a1" },
    atomicGroup: "Alkali Metals",
    bar: { baseMask: "light" }
  },
  {
    id: "Barium",
    atomicPrefix: "Ba",
    color: "#E6D2F0",
    atomicNumber: 56,
    ores: { baseName: "Barite", color: "#d2cce3" },
    atomicGroup: "Alkaline Earth Metals",
    bar: { baseMask: "medium" }
  },
  {
    id: "Lanthanum",
    atomicPrefix: "La",
    color: "#BFD7FF",
    atomicNumber: 57,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Cerium",
    atomicPrefix: "Ce",
    color: "#BFEBD8",
    atomicNumber: 58,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Praseodymium",
    atomicPrefix: "Pr",
    color: "#BDECC6",
    atomicNumber: 59,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Neodymium",
    atomicPrefix: "Nd",
    color: "#C7C8FF",
    atomicNumber: 60,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Promethium",
    atomicPrefix: "Pm",
    color: "#6FAE5B",
    atomicNumber: 61,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Samarium",
    atomicPrefix: "Sm",
    color: "#E0C2FF",
    atomicNumber: 62,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Europium",
    atomicPrefix: "Eu",
    color: "#E8F0B8",
    atomicNumber: 63,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Gadolinium",
    atomicPrefix: "Gd",
    color: "#BDE3F2",
    atomicNumber: 64,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Terbium",
    atomicPrefix: "Tb",
    color: "#BDF2DE",
    atomicNumber: 65,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Dysprosium",
    atomicPrefix: "Dy",
    color: "#CFE1FF",
    atomicNumber: 66,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Holmium",
    atomicPrefix: "Ho",
    color: "#D1F0D2",
    atomicNumber: 67,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Erbium",
    atomicPrefix: "Er",
    color: "#F0C6E9",
    atomicNumber: 68,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Thulium",
    atomicPrefix: "Tm",
    color: "#BFD6FF",
    atomicNumber: 69,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Ytterbium",
    atomicPrefix: "Yb",
    color: "#F2F0C8",
    atomicNumber: 70,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "medium" }
  },
  {
    id: "Lutetium",
    atomicPrefix: "Lu",
    color: "#D7F2F2",
    atomicNumber: 71,
    atomicGroup: "Lanthanides",
    bar: { baseMask: "dense" }
  },

  {
    id: "Hafnium",
    atomicPrefix: "Hf",
    color: "#B6C0C9",
    atomicNumber: 72,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Tantalum",
    atomicPrefix: "Ta",
    color: "#6B737B",
    atomicNumber: 73,
    ores: { baseName: "Tantalite", color: "#1E1E1E" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Tungsten",
    atomicPrefix: "W",
    color: "#68645b",
    atomicNumber: 74,
    ores: { baseName: "Wolframite", color: "#2A1F1B" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Rhenium",
    atomicPrefix: "Re",
    color: "#848C95",
    atomicNumber: 75,
    ores: { baseName: "Rheniite", color: "#6B6F7A" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Osmium",
    atomicPrefix: "Os",
    color: "#4C545C",
    atomicNumber: 76,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Iridium",
    atomicPrefix: "Ir",
    color: "#707880",
    atomicNumber: 77,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Platinum",
    atomicPrefix: "Pt",
    color: "#D6DADF",
    atomicNumber: 78,
    ores: { baseName: "Sperrylite", color: "#AEB4BB" },
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Gold",
    atomicPrefix: "Au",
    color: "#F2C230",
    atomicNumber: 79,
    include: ["dust"],
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Thallium",
    atomicPrefix: "Tl",
    color: "#8B9C8A",
    atomicNumber: 81,
    ores: { baseName: "Lorandite", color: "#6B1020" },
    atomicGroup: "Post Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Lead",
    atomicPrefix: "Pb",
    color: "#5b5466",
    atomicNumber: 82,
    ores: { baseName: "Galena" },
    atomicGroup: "Post Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Bismuth",
    atomicPrefix: "Bi",
    color: "#B8BCC2",
    atomicNumber: 83,
    ores: { baseName: "Bismuthinite", color: "#4B4F55" },
    atomicGroup: "Post Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Polonium",
    atomicPrefix: "Po",
    color: "#3B3F3B",
    atomicNumber: 84,
    atomicGroup: "Metalloids",
    bar: { baseMask: "dense" }
  },
  {
    id: "Astatine",
    atomicPrefix: "At",
    color: "#1F1F27",
    atomicNumber: 85,
    atomicGroup: "Halogens",
    bar: { baseMask: "medium" }
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
    bar: { baseMask: "light" }
  },
  {
    id: "Radium",
    atomicPrefix: "Ra",
    color: "#8CCB4A",
    atomicNumber: 88,
    atomicGroup: "Alkaline Earth Metals",
    bar: { baseMask: "medium" }
  },

  {
    id: "Actinium",
    atomicPrefix: "Ac",
    color: "#6B7C6A",
    atomicNumber: 89,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Thorium",
    atomicPrefix: "Th",
    color: "#7A8C78",
    atomicNumber: 90,
    include: ["dust"],
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Protactinium",
    atomicPrefix: "Pa",
    color: "#5E7563",
    atomicNumber: 91,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Uranium",
    atomicPrefix: "U",
    color: "#748b3e",
    atomicNumber: 92,
    ores: { baseName: "Uraninite" },
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Neptunium",
    atomicPrefix: "Np",
    color: "#2F7E6B",
    atomicNumber: 93,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Plutonium",
    atomicPrefix: "Pu",
    color: "#4B7A2A",
    atomicNumber: 94,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Americium",
    atomicPrefix: "Am",
    color: "#7BAA2D",
    atomicNumber: 95,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Curium",
    atomicPrefix: "Cm",
    color: "#6DA34C",
    atomicNumber: 96,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Berkelium",
    atomicPrefix: "Bk",
    color: "#4D8F3A",
    atomicNumber: 97,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Californium",
    atomicPrefix: "Cf",
    color: "#8CA33B",
    atomicNumber: 98,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Einsteinium",
    atomicPrefix: "Es",
    color: "#6B9B57",
    atomicNumber: 99,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Fermium",
    atomicPrefix: "Fm",
    color: "#5A8A6A",
    atomicNumber: 100,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Mendelevium",
    atomicPrefix: "Md",
    color: "#5C7E73",
    atomicNumber: 101,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Nobelium",
    atomicPrefix: "No",
    color: "#6E7F6A",
    atomicNumber: 102,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },
  {
    id: "Lawrencium",
    atomicPrefix: "Lr",
    color: "#687A6C",
    atomicNumber: 103,
    atomicGroup: "Actinides",
    bar: { baseMask: "dense" }
  },

  {
    id: "Rutherfordium",
    atomicPrefix: "Rf",
    color: "#8B1FA9",
    atomicNumber: 104,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Dubnium",
    atomicPrefix: "Db",
    color: "#1E3A8A",
    atomicNumber: 105,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Seaborgium",
    atomicPrefix: "Sg",
    color: "#2E8B74",
    atomicNumber: 106,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Bohrium",
    atomicPrefix: "Bh",
    color: "#84CC16",
    atomicNumber: 107,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Hassium",
    atomicPrefix: "Hs",
    color: "#FA6BD1",
    atomicNumber: 108,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Meitnerium",
    atomicPrefix: "Mt",
    color: "#FFE44D",
    atomicNumber: 109,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Darmstadtium",
    atomicPrefix: "Ds",
    color: "#FACC15",
    atomicNumber: 110,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Roentgenium",
    atomicPrefix: "Rg",
    color: "#F97316",
    atomicNumber: 111,
    atomicGroup: "Transition Metals",
    bar: { baseMask: "dense" }
  },
  {
    id: "Copernicium",
    atomicPrefix: "Cn",
    color: "#FF8A2A",
    atomicNumber: 112,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Nihonium",
    atomicPrefix: "Nh",
    color: "#E11D48",
    atomicNumber: 113,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Flerovium",
    atomicPrefix: "Fl",
    color: "#7C3AED",
    atomicNumber: 114,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Moscovium",
    atomicPrefix: "Mc",
    color: "#22C55E",
    atomicNumber: 115,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Livermorium",
    atomicPrefix: "Lv",
    color: "#B91C1C",
    atomicNumber: 116,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Tennessine",
    atomicPrefix: "Ts",
    color: "#14B8A6",
    atomicNumber: 117,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  },
  {
    id: "Organesson",
    atomicPrefix: "Og",
    color: "#270244",
    atomicNumber: 118,
    atomicGroup: "Unknown",
    bar: { baseMask: "dense" }
  }
];

export const registerMetals = () => {
  resourceType("Ores").icon("Blocks").build();
  resourceType("Dusts").build();

  metal.many(metals).build();
};
