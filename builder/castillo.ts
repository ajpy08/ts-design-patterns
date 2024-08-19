// Producto
export class Castillo {
  private region: string;
  private muros: number;
  private torres: number;
  private calabozos: number;

  constructor(region: string, muros: number, torres: number, calabozos: number) {
    this.region = region;
    this.muros = muros;
    this.torres = torres;
    this.calabozos = calabozos;
  }

  mostrarCastillo(): this {
    return this;
  }
}
