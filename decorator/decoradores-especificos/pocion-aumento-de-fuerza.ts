import { DecoradorPocion } from '../decorador-pocion';

export class ConAumentoDeFuerza extends DecoradorPocion {
  efecto(): string {
    return `${this.pocion.efecto()} y le aumenta la fuerza`;
  }

  precio(): number {
    return this.pocion.precio() + 20;
  }
}