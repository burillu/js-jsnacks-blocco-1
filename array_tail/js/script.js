

// creo un array con dei numeri casuali

let randomic = [];
let lengthArray= 25;
// ciclo e ritorno ogni numero dentro randomic
for (let i = 0; i < lengthArray; i++) {
    const num = getRndInteger(1,100);
    randomic.push(num);
    console.log(num);
    
}
console.log(randomic);

// stampare ultimi 5 numeri

console.log(randomic.slice(-5))


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }