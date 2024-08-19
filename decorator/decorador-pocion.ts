import { Pocion } from './pocion.interface';

export abstract class DecoradorPocion implements Pocion {
  protected pocion: Pocion;

  constructor(pocion: Pocion) {
    this.pocion = pocion;
  }

  abstract efecto(): string;
  abstract precio(): number;
}