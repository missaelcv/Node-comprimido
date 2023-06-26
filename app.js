const {frutas, dinero} = require('./frutas')

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello MCV",
    e : "O-O",
    T : "UU "
}));

// or cowsay.think()
frutas.forEach(item => {
    console.log(item)
})

console.log(dinero)