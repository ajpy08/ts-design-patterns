import { Pocion } from './pocion.interface';

export class PocionBase implements Pocion {
  private alquimista: string;

  constructor(alquimista: string) {
    this.alquimista = alquimista;
  }
  
  efecto(): string {
    return 'electrolitos para el cuerpo';
  }

  precio(): number {
    return 10;
  }

  getAlquimista(): string {
    return this.alquimista;
  }
}