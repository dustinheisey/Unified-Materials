import type {} from "hytale-generators";
import {} from "hytale-generators";

const fluids = [
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
    id: "Bromine",
    atomicPrefix: "Br",
    color: "#5C0F0F",
    atomicNumber: 35,
    atomicGroup: "Halogens",
    include: ["bucket", "fluid"]
  }
];

export const registerFluids = () => {};
