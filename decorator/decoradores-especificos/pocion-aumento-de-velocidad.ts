import { DecoradorPocion } from '../decorador-pocion';
export class ConAumentoDeVelocidad extends DecoradorPocion {
  efecto(): string {
    return `${this.pocion.efecto()} y le aumenta la velocidad`;
  }

  precio(): number {
    return this.pocion.precio() + 30;
  }
}