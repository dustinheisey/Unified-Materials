import { isString, materials, resourceType } from "hytale-generators";
import { alloys } from "./alloys.ts";
import { metals } from "./metals.ts";

const { rod } = materials([
  { id: "Rod", defaults: {} }
  // { id: "Plate", defaults: {} },
  // { id: "Gear", defaults: {} }
]);

const components = [...metals, ...alloys];

export const registerComponents = () => {
  resourceType("Rods").build();
  rod.many(components).build();
  // plate.many(components).build();
  // gear.many(components).build();
};
