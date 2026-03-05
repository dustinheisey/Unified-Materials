import type { GemCfg } from "hytale-generators";
import { gem, resourceType } from "hytale-generators";

export const gems: GemCfg[] = [
  { id: "Amber", description: "C10H16O", color: "#FFB347" },
  { id: "Amethyst", description: "SiO2:Fe", color: "#B57EDC", baseMask: "dark" },
  { id: "Aquamarine", description: "Be3Al2Si6O18", color: "#7FFFD4" },
  { id: "Bloodstone", description: "SiO2:Fe2O3", color: "#B22222", baseMask: "dark" },
  { id: "Carnelian", description: "SiO2:Fe2O3", color: "#FF6F3C" },
  { id: "Citrine", description: "SiO2:Fe", color: "#FFD54F" },
  { id: "Diopside", description: "MgCaSi2O6", color: "#5BFFB0" },
  { id: "Garnet", description: "X3Y2(SiO4)3", color: "#C21833" },
  { id: "Jade", description: "NaAlSi2O6", color: "#3CBF7A" },
  { id: "Lazurite", description: "Na6Ca2Al6Si6O24", color: "#3F66E0", baseMask: "dark" },
  { id: "Moonstone", description: "KAlSi3O8", color: "#E6EAF5", baseMask: "light" },
  { id: "Obsidian", description: "SiO2:70-75%", color: "#2C1B3A", baseMask: "dark" },
  { id: "Olivine", description: "(Mg,Fe)2SiO4", color: "#B4E04A" },
  { id: "Onyx", description: "SiO2:Banded", color: "#2B2B2B", baseMask: "dark" },
  { id: "Opal", description: "SiO2·nH2O", color: "#FFFFFF", baseMask: "light" },
  { id: "Peridot", description: "(Mg,Fe)2SiO4", color: "#A4F11A" },
  { id: "Rose_Quartz", description: "SiO2:Ti", color: "#F7A8B8" },
  { id: "Sodalite", description: "Na8Al6Si6O24Cl2", color: "#3A4FA3", baseMask: "dark" },
  { id: "Sunstone", description: "(Ca,Na)Al2Si2O8", color: "#FF914D" },
  { id: "Tigers_Eye", description: "SiO2:FeOOH", color: "#C6862F", baseMask: "dark" },
  { id: "Turquoise", description: "CuAl6(PO4)4(OH)8", color: "#40E0D0" }
];

const gemTooltip = (cfg: GemCfg) => {
  return `<color is="#F2C230">${cfg.description}</color>`;
};

export const registerGems = () => {
  resourceType("Gems").icon("Natural-Ore").build();
  gem
    .many(gems.map(gem => ({ ...gem, description: gemTooltip(gem) })))
    .defaults({ icon: true })
    .build();
};
