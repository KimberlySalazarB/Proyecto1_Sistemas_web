import { StringValidacion} from "./dist/validacion/stringValidacion.js";

const stringValidacion = new StringValidacion()
const esValido = stringValidacion.validar("Hello, World!");
console.log(`Es valido string: ${esValido}`);