export class Excalibur {
  private static instance: Excalibur | null = null;

  private constructor() {}

  public static getInstance(): Excalibur {
    if (!Excalibur.instance) {
      Excalibur.instance = new Excalibur();
      console.log('Se ha forjado la legendaria espada de Excalibur');
    }
    return Excalibur.instance;
  }

  public portarEspada(portador: string): void {
    console.log(`El ${portador} empuña la legendaria espada de Excalibur`);
  }
}

// const espadaReyArturo = Excalibur.getInstance();
// const espadaPaladin = Excalibur.getInstance();

// espadaReyArturo.portarEspada();
// espadaPaladin.portarEspada();

// console.log(espadaReyArturo === espadaPaladin);
// console.log(espadaReyArturo, espadaPaladin);