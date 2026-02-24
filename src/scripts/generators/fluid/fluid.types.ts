import type { BlockType, Tags, TranslationProperties } from "hytale-generators";

// experience of being inside fluid
export interface FluidFX {
  Fog: string;
  FogColor: string;
  FogDistance: number[];
  ColorsSaturation: number;
  ColorsFilter: number[];
  DistortionAmplitude: number;
  DistortionFrequency: number;
  MovementSettings: MovementSettings;
}

export interface MovementSettings {
  SwimUpSpeed: number;
  SwimDownSpeed: number;
  HorizontalSpeedMultiplier: number;
  SinkSpeed: number;
  FieldOfViewMultiplier: number;
  EntryVelocityMultiplier: number;
}

// Item that appears in inventory

export interface FluidItem {
  TranslationProperties: TranslationProperties;
  Icon: string;
  Categories: string[];
  Interactions: FluidItemInteractions;
  BlockType: BlockType;
  PlayerAnimationsId: string;
  Tags: Tags;
  MaxStack: number;
  ItemSoundSetId: string;
}

export type Flags = object;

export interface BlockTypeInteractions {
  Collision: Collision;
}

export interface Collision {
  Cooldown: Cooldown;
  Interactions: CollisionInteraction[];
}

export interface Cooldown {
  Id: string;
  Cooldown: number;
}

export interface CollisionInteraction {
  Type: string;
  RequiredGameMode: string;
  Next: Next;
}

export interface Next {
  Type: string;
  EffectId: EffectID;
}

export interface EffectID {
  Duration: number;
  OverlapBehavior: string;
  ApplicationEffects: ApplicationEffects;
  StatModifiers: StatModifiers;
}

export interface ApplicationEffects {
  HorizontalSpeedMultiplier: number;
}

export interface StatModifiers {
  Oxygen: number;
}

export interface FluidItemInteractions {
  Secondary: Secondary;
}

export interface Secondary {
  Interactions: SecondaryInteraction[];
}

export interface SecondaryInteraction {
  Type: string;
  FluidToPlace: string;
}

type Effect = "Slime";
type Opacity = "Transparent";
type MaxFluidLevel = 1;
// type FluidFXId = "Lava" | "Mud" | "Slime" | "Water";
export interface FluidSource {
  MaxFluidLevel: MaxFluidLevel;
  Effect?: Effect[];
  Opacity: Opacity;
  BlockParticleSetId: string;
  Textures: Texture[];
  ParticleColor: string;
  BlockSoundSetId: string;
  FluidFXId: string;
  Ticker: Ticker;
}

export interface Texture {
  Weight: number;
  All: string;
}

export interface Ticker {
  CanDemote: boolean;
  SpreadFluid: string;
  FlowRate: number;
}

export interface FluidFlowing {
  Parent: `${string}_Source`;
  MaxFluidLevel: number;
  Ticker: Ticker;
}

export interface Ticker {
  CanDemote: boolean;
  SupportedBy: `${string}_Source`;
}
