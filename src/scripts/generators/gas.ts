import type { BlockTypes, CommonTypes, ItemData, Tab } from "hytale-generators";
import { global, syncJson, syncLang } from "hytale-generators";
import type { IntClosedRange as Range } from "type-fest";

export type PlaceFluidInteraction = {
  Secondary: {
    Interactions: [
      {
        Type: "PlaceFluid";
        FluidToPlace: string;
      }
    ];
  };
};

export type CollideFluidInteraction = {
  Collision: {
    Cooldown: {
      Id: "SlowEffect";
      Cooldown: 0.1;
    };
    Interactions: [
      {
        Type: "Condition";
        RequiredGameMode: "Adventure";
        Next: {
          Type: "ApplyEffect";
          EffectId: {
            Duration: 0.1;
            OverlapBehavior: "Overwrite";
            ApplicationEffects: {
              HorizontalSpeedMultiplier: 0.2;
            };
            StatModifiers: {
              Oxygen: -1;
            };
          };
        };
      }
    ];
  };
};

export type GasData = Required<
  Pick<ItemData, CommonTypes | BlockTypes | "IconProperties"> & {
    PlayerAnimationsId: "Block";
    Interactions: PlaceFluidInteraction;
  }
>;

export interface GasConfig {
  id: string;
  color: string;
  icon?: boolean;
  name?: string;
  baseName?: string;
  description?: string;
  categories?: Tab[];
  maxStack?: number;
  effect?: string[];
  blockParticleSetId?: string;
  blockSoundSetId?: string;
  fluidFXId?: string;
  opacity?: "Transparent" | "Solid";
  ticker?: {
    canDemote?: boolean;
    supportedBy?: string;
    spreadFluid?: string;
    flowRate?: number;
  };
}

export interface SourceData {
  MaxFluidLevel: Range<1, 15>;
  Effect?: string[];
  Opacity: string;
  BlockParticleSetId?: string;
  Textures: {
    Weight: number;
    All: string;
  }[];
  ParticleColor: string;
  BlockSoundSetId?: string;
  FluidFXId: string;
  Ticker: {
    CanDemote?: boolean;
    SpreadFluid?: string;
    FlowRate?: number;
  };
}

export interface FluidData {
  Parent: string;
  MaxFluidLevel: Range<1, 15>;
  Ticker: {
    CanDemote: boolean;
    SupportedBy?: string;
    SpreadFluid?: string;
  };
}

/**
 *
 * @param config
 */
export function gas(config: GasConfig) {
  const { modId, outDir } = global();
  const path = `${outDir}/Server/Item/Items/Gasses/Gas_${config.id}`;

  // Generate the main gas item
  syncJson<GasData>(`${path}/Gas_${config.id}`, {
    TranslationProperties: {
      Name: `server.items.Gas_${config.id}.name`
    },
    ...(config.icon ? { Icon: `Icons/ItemsGenerated/Gas_${config.id}.png` } : {}),
    Categories: [`${modId}.Gasses`],
    Interactions: {
      Secondary: {
        Interactions: [
          {
            Type: "PlaceFluid",
            FluidToPlace: `${config.id}_Source`
          }
        ]
      }
    },
    BlockType: {
      DrawType: "Cube",
      Group: "Gas",
      Material: "Solid",
      Flags: {},
      Textures: [
        {
          Weight: 1,
          All: "Resources/Gas.png"
        }
      ],
      ParticleColor: config.color,
      BlockSoundSetId: config.blockSoundSetId ?? "Mud",
      Interactions: {
        Collision: {
          Cooldown: {
            Id: "SlowEffect",
            Cooldown: 0.1
          },
          Interactions: [
            {
              Type: "Condition",
              RequiredGameMode: "Adventure",
              Next: {
                Type: "ApplyEffect",
                EffectId: {
                  Duration: 0.1,
                  OverlapBehavior: "Overwrite",
                  ApplicationEffects: {
                    HorizontalSpeedMultiplier: 0.2
                  },
                  StatModifiers: {
                    Oxygen: -1
                  }
                }
              }
            }
          ]
        }
      }
    },
    PlayerAnimationsId: "Block",
    Tags: {
      Material: ["Fluid"]
    },
    MaxStack: config.maxStack ?? 100,
    ItemSoundSetId: "ISS_Blocks_Soft",
    IconProperties: {
      Scale: 0.58823,
      Rotation: [22.5, 45, 22.5],
      Translation: [0, -13.5]
    }
  });

  // Generate the source fluid
  syncJson<SourceData>(`${path}/${config.id}_Source`, {
    MaxFluidLevel: 1,
    Effect: config.effect,
    Opacity: config.opacity ?? "Transparent",
    Textures: [
      {
        Weight: 1,
        All: "Resources/Gas.png"
      }
    ],
    ParticleColor: config.color,
    BlockParticleSetId: config.blockParticleSetId,
    BlockSoundSetId: config.blockSoundSetId,
    FluidFXId: config.fluidFXId ?? "Water",
    Ticker: {
      CanDemote: config.ticker?.canDemote ?? false,
      SpreadFluid: config.ticker?.spreadFluid
    }
  });

  // Generate the fluid
  syncJson<FluidData>(`${path}/${config.id}`, {
    Parent: `${config.id}_Source`,
    MaxFluidLevel: 8,
    Ticker: {
      CanDemote: config.ticker?.canDemote ?? true,
      SupportedBy: `${config.id}_Source`,
      SpreadFluid: config.ticker?.spreadFluid
    }
  });

  // Generate translations
  syncLang([
    {
      key: `items.${modId}.Gas_${config.id}.name`,
      value: config.name ?? `${config.baseName ?? config.id} Gas`
    },
    ...(config.description
      ? [
          {
            key: `items.${modId}.Gas_${config.id}.description`,
            value: config.description
          }
        ]
      : [])
  ]);
}
