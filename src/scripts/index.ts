import { setGlobal, syncPublic } from "hytale-generators";
import { registerAlloys } from "./collections/alloys.ts";
import { registerCategories } from "./collections/categories.ts";
import { registerComponents } from "./collections/components.ts";
import { registerFluids } from "./collections/fluids.ts";
import { registerGases } from "./collections/gases.ts";
import { registerGems } from "./collections/gems.ts";
import { registerMetals } from "./collections/metals.ts";

setGlobal({ modId: "UnifiedMaterials", outDir: "../main/resources" });

syncPublic();

registerCategories();
registerAlloys();
registerComponents();
registerFluids();
registerGases();
registerGems();
registerMetals();
