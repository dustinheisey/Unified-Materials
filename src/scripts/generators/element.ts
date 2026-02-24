import type { BlockType, Filter, MetalConfig } from "hytale-generators";
import { blockTypes, dust, ingot, ore, oreBlock, shouldInclude } from "hytale-generators";
import type { IntClosedRange as Range } from "type-fest";

export type AtomicGroup =
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

export type ElementConfig = MetalConfig & {
  atomicNumber: Range<1, 118>;
  atomicPrefix: string;
  atomicGroup: AtomicGroup;
};

/**
 *
 * @param config
 */
function elementTooltip(config: ElementConfig): string {
  return `<color is="#F2C230">${config.atomicPrefix} (${config.atomicNumber.toString()})</color> · ${config.atomicGroup}`;
}

/**
 *
 * @param config
 */
export function element(config: ElementConfig) {
  const description = elementTooltip(config);

  blockTypes.forEach(type => {
    if (shouldInclude(type as Filter, config.include, config.exclude)) {
      oreBlock({
        ...config,
        ...config.ores,
        type: type as Lowercase<BlockType>,
        description
      });
    }
  });

  if (shouldInclude("ore", config.include, config.exclude)) {
    ore({
      ...config,
      ...config.ores,
      ...config.ore,
      description
      // description: `${description}\\nCan be processed into a <b>${config.id} Ingot</b> at a <b>Furnace</b>, or ground into <b>${config.id} Dust</b> at a <b>Salvager's Workbench</b>`
    });
  }
  if (shouldInclude("dust", config.include, config.exclude)) {
    dust({
      ...config,
      ...config.dust,
      description
      // description: `${description}\\nCan be processed into an <b>${config.id} Ingot</b> at a <b>Furnace</b>`
    });
  }
  if (shouldInclude("ingot", config.include, config.exclude)) {
    ingot({ ...config, ...config.ingot, description });
  }
  // if (shouldInclude("potion", config.include, config.exclude)) {
  //   console.log(`potion: ${config}`);
  // }
  // if (shouldInclude("gas_block", config.include, config.exclude)) {
  //   console.log(`gas block: ${config}`);
  //   gas({ ...config, description });
  // }
  // if (shouldInclude("fluid", config.include, config.exclude)) {
  //   console.log(`fluid: ${config}`);
  // }
  // if (shouldInclude("bucket", config.include, config.exclude)) {
  //   console.log(`bucket: ${config}`);
  // }
}

/**
 *
 * @param icon
 * @param configs
 */
export function elements(icon: boolean, configs: ElementConfig[]) {
  configs.forEach(config => {
    element({ ...config, icon });
  });
}

/**
 *
 * @param config
 */
// export function renameElement(config: ElementConfig) {}
