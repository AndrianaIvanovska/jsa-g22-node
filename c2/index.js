function mnozenje(a,b){
    let c = a*b;
    console.log(c);
}

const Mnozenje = (a,b) => console.log(a*b);

function c2f (a) {
    let b = (a*9/5)+32;
    console.log (b);
}

function f2c (a) {
    let b = ((a-32)*5)/9;
    return b;
}

c2f(12);
let res = f2c(100);
console.log(res);

const fun = (parm, c) => {

    let r = parm(c) + 100;
    return r;
}

let rez = fun(f2c, 12);

console.log('FUN:', rez);

const handler = (e) => {
    console.log(e);
}

el.addEventListener ('click',handler);

el.addEventListener('click', (e) => {
    console.log(e);
})