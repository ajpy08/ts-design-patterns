import { Castillo } from "./castillo";

// Builder (Interface)
export interface PlanoDeCastillo {
  region: string;
  muros: number;
  torres: number;
  calabozos: number;

  agregarRegion(region: string): PlanoDeCastillo;
  agregarMuros(muros: number): PlanoDeCastillo;
  agregarTorres(torres: number): PlanoDeCastillo;
  agregarCalabozos(calabozos: number): PlanoDeCastillo;
  mostrarCastillo(): Castillo;
  build(): Castillo
}