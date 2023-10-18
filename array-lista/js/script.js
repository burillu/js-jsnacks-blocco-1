
const fruits = [
    'banana', 
    'mela', 
    'pera', 
    'ciliegia', 
    'arancia', 
    'mandarino', 
    'cocomero', 
    'limone', 
    'fragola'  
];
fruits.push('pesca');
console.log(fruits);
let flag = false;
let a;
for (let i = 0; i < fruits.length; i++) {
    a = i;
    if (fruits[i] === 'cocomero'){
        flag = true;
        console.log('Trovato! Devo solo preparare il cocktail.');
    } 
    
}
if (!flag){
    console.log('Oh no, devo uscire a comprare il cocomero!');
}
