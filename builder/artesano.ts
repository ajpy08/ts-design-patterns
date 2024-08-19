import { Castillo } from "./castillo";
import { PlanoDeCastillo } from "./plano-castillo.interface";

// Builder Concreto
export class Artesano implements PlanoDeCastillo {
  region: string;
  muros: number;
  torres: number;
  calabozos: number;

  constructor() {
    this.region = '';
    this.muros = 0;
    this.torres = 0;
    this.calabozos = 0;
  }
  mostrarCastillo(): Castillo {
    return new Castillo(this.region, this.muros, this.torres, this.calabozos);
  }

  agregarRegion(region: string): PlanoDeCastillo {
    this.region = `<< ${region.toUpperCase()} >>`;
    return this;
  }

  agregarMuros(muros: number): PlanoDeCastillo {
    this.muros = muros;
    return this;
  }

  agregarTorres(torres: number): PlanoDeCastillo {
    this.torres = torres;
    return this;
  }

  agregarCalabozos(calabozos: number): PlanoDeCastillo {
    this.calabozos = calabozos;
    return this;
  }

  build(): Castillo {
    const castillo = new Castillo(this.region, this.muros, this.torres, this.calabozos);

    this.reset();
    return castillo;
  }

  reset() {
    this.region = '';
    this.muros = 0;
    this.torres = 0;
    this.calabozos = 0;
  }
}