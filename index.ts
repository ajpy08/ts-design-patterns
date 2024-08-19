import { Excalibur } from './singleton';
import { PocionBase } from './decorator/pocion-base';
import { ConAumentoDeFuerza } from './decorator/decoradores-especificos/pocion-aumento-de-fuerza';
import { ConAumentoDeVelocidad } from './decorator/decoradores-especificos/pocion-aumento-de-velocidad';
import { Artesano } from './builder/artesano';
import { Rey } from './builder/rey';
////////////////////// singleton ////////////////////
// console.log('SINGLETON');
// const espadaReyArturo = Excalibur.getInstance();
// const espadaPaladin = Excalibur.getInstance();

// espadaReyArturo.portarEspada('Rey Arturo');
// espadaPaladin.portarEspada('Paladin');

// console.log('La espada que usa el Rey Arturo y la que usa el Paladin son iguales?', espadaReyArturo === espadaPaladin);
// console.log('Espada del Rey Arturo =', espadaReyArturo);
// console.log('Espada del Paladin =', espadaPaladin);
////////////////////////////////////////////////////

//////////////// decorator ////////////////////
// console.log('DECORATOR');
// const pocion = new PocionBase('Merlin');
// console.log(`${pocion.efecto()} - Precio: ${pocion.precio()} monedas - [Alquimista: ${pocion.getAlquimista()}]`);

// const pocionDeFuerza = new ConAumentoDeFuerza(pocion);
// console.log(`${pocionDeFuerza.efecto()} - Precio: ${pocionDeFuerza.precio()} monedas`);

// const pocionDeFuerzaVelocidad = new ConAumentoDeVelocidad(pocionDeFuerza);
// console.log(`${pocionDeFuerzaVelocidad.efecto()} - Precio: ${pocionDeFuerzaVelocidad.precio()} monedas`);

//////////////////////////////////////////////////

//////////////// builder ////////////////////

// Forma numero 1.- Uso directo del builder
const artesano = new Artesano();

const castilloNorte = artesano.agregarRegion('Norte')
.agregarMuros(100)
.agregarCalabozos(3)
.build();
console.log(castilloNorte);

const castilloSur = artesano
.agregarRegion('Sur')
.agregarMuros(50)
.build();
console.log(castilloSur);

// Forma numero 2.- Uso del director
const rey = new Rey(artesano);

rey.crearSuperCastillo('Central', 1000, 10, 5);
const superCastillo = artesano.build();
console.log(superCastillo.mostrarCastillo());

