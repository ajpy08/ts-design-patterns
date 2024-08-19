import { Artesano } from "./artesano";

// Director
export class Rey {
  private artesano: Artesano;

  constructor(artesano: Artesano) {
    this.artesano = artesano;
  }

  crearSuperCastillo(
    region: string,
    muros: number,
    torres: number,
    calabozos: number,
  ) {
    if (muros > 10) {
      this.artesano
        .agregarRegion(region)
        .agregarMuros(muros)
        .agregarTorres(torres)
        .agregarCalabozos(calabozos);
    } else {
      console.log('No se puede construir un super castillo con menos de 10 muros');
    }
  }
}