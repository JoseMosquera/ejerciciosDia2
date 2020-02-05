const users = require('./users.json');

//
// TODO 1
// Obtener el usuario cuyo teléfono es "024-648-3804"
//

console.log('=== 1 ===');
users.find(user => user.phone == "024-648-3804")

//
// TODO 2
// Crear una función que devuelva true si existe un usuario cuyo email
// sea el que se pasa como parámetro
//

console.log('=== 2 ===');

//Esta constante devolvera true o false 
const existsUserBoolean = email => users.some(user => user.email === email);

//Esta constante devuelve el usuario que tenga ese mail
const existsUser = email => users.find(user => user.email === email); // TODO en vez de false, debe devolver el resultado

console.log(existsUser('Nathan@yesenia.net')); // true
console.log(existsUser('japostigo@atsistemas.com')); // false

//
// TODO 3
// Obtener el número de usuarios que tienen website
//

console.log('=== 3 ===');

users.filter(user => user.website).length


//
// TODO 4
// Obtener el índice de la posición que toma en el array el primer usuario
// cuyo número de la calle de su dirección es menor que 300
//

console.log('=== 4 ===');

users.findIndex(user => user.address.number < 300)

//
// TODO 5
// Obtener un array que sólo contenga las cadenas de los emails de los usuarios
//

console.log('=== 5 ===');

users.map(user => user.email)


//
// TODO 6
// Obtener un array que contengan objetos {id: "id", username: "username"},
// que contienen los ids y los nombres de usuarios de los usuarios
//

console.log('=== 6 ===');

users.map(user => ({ id: user.id, username: user.username }))

//
// TODO 7
// Obtener el array de usuarios pero con los números de sus direcciones en
// formato de número (y no de cadena que es como está ahora mismo)
//

console.log('=== 7 ===');

users.map(user => {
    if (user.address) {
        user.address.number = parseInt(user.address.number)
    }
    return user;
})

//
// TODO 8
// Obtener el array de usuarios cuya dirección está ubicada entre la
// latitud -50 y 50, y la longitud -100 y 100
//

console.log('=== 8 ===');

users.filter(user => user.address)
    .filter(user => user.address.geo.lat >= -50)
    .filter(user => user.address.geo.lat <= 50)
    .filter(user => user.address.geo.lng >= -100)
    .filter(user => user.address.geo.lng <= 100);

users.filter(user => user.address && user.address.geo.lat >= -50 && user.address.geo.lat <= 50 && user.address.geo.lng >= -100 && user.address.geo.lng <= 100)

//
// TODO 9
// Obtener un array con los teléfonos de los usuarios cuyo website
// pertenezca a un dominio biz
//

console.log('=== 9 ===');

users.filter(user => user.website)
    .filter(user => user.website.substr(-3) == 'biz')
    .map(user => user.phone)

//
// TODO 10
// Escriba una función processArray que, dado un array de números
// enteros, devuelva un nuevo array en que aquellos elementos que
// sean pares se multipliquen por 2.
//
// ;)
//

console.log('=== 10 ===');

const testArray = [2, 3, 5, 6, 5, 9, 10, 12, 13];

const processArray = () => testArray.filter(num => num % 2 == 0)
    .map(num => num * 2);

console.log(processArray(testArray)); // [4, 12, 20, 24]