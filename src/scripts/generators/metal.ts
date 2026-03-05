import type {
  HasColor,
  HasFilter,
  HasId,
  HasLang,
  HasTexture,
  MaterialCfg,
  OreBlockCfg,
  OreCfg,
  Strata
} from "hytale-generators";
import { builder, global, include, materials, ore, oreBlock, strata } from "hytale-generators";
import type { IntClosedRange as Range } from "type-fest";

export type MetalCfg = HasId &
  HasLang &
  HasColor &
  HasFilter<"ore" | "oreBlock" | "ores" | "dust" | "bar" | "bucket" | "fluid" | `ore_${Strata}`> & {
    atomicPrefix: string;
    atomicNumber: Range<1, 118>;
    atomicGroup:
      | "Alkali Metals"
      | "Alkaline Earth Metals"
      | "Transition Metals"
      | "Post Transition Metals"
      | "Metalloids"
      | "Halogens"
      | "Other Nonmetals"
      | "Noble Gases"
      | "Lanthanides"
      | "Actinides"
      | "Unknown";
    ore?: Partial<OreCfg>;
    ores?: Partial<OreBlockCfg & OreCfg>;
    oreBlock?: Partial<OreCfg>;
    bar?: Partial<MaterialCfg & HasTexture<"Dense" | "Ultra_Dense" | "Light">>;
    dust?: Partial<MaterialCfg>;
  };

export type MetallicElementCfg = MetalCfg & {};

function elementTooltip(config: MetallicElementCfg): string {
  return `<color is="#F2C230">${config.atomicPrefix} (${config.atomicNumber.toString()})</color> · ${config.atomicGroup}`;
}

export const metal = builder({
  build: (cfg: MetalCfg) => {
    const description = elementTooltip(cfg);
    const { bar, dust } = materials([
      {
        id: "Bar",
        defaults: {
          icon: true,
          model: "Resources/Materials/Ingot",
          resourceType: "Metal_Bars",
          baseName: "Ingot",
          categories: ["Items.Ingredients", `${global().modId}.Ingots`]
        }
      },
      { id: "Dust", defaults: { icon: true } }
    ]);

    oreBlock
      .many(
        strata
          .filter(strata => include(cfg, `ore_${strata}`))
          .map(strata => ({
            ...cfg,
            ...(cfg.ores ?? {}),
            ...(cfg.ore ?? {}),
            strata,
            description
          }))
      )
      .defaults({ icon: true })
      .build();
    if (include(cfg, "ore"))
      ore
        .many([{ ...cfg, ...(cfg.ores ?? {}), ...(cfg.ore ?? {}), description }])
        .defaults({ icon: true })
        .build();
    if (include(cfg, "dust")) dust.many([{ ...cfg, description }]).build();
    if (include(cfg, "bar")) bar.many([{ ...cfg, description }]).build();
  },
  init: (id: string) => ({ id })
});
