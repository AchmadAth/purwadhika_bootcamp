let result;

const greet = (str) => {
    result = str;
}

const hello = () => {
    greet('hello')
}

const arigato = () => {
    greet('arigato')
}

arigato()
hello()
greet('hei')

console.log(result);