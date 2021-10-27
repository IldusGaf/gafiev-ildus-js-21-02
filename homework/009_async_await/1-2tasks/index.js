// 1 задание

let a = prompt("Введите цифру i", 1);
let b = prompt("Введите цифру j", 5);

function printNumbTimeout(a, b) {
    console.log(a);
    a++;
    if (a<=b){
        setTimeout(printNumbTimeout, 1000, a, b);
    }
}

function printNumbInterval(a, b) {
    const timer = setInterval(()=>{
        console.log(a);
        if (a==b){
            clearInterval(timer);
        }
        a++;
    },1000)
}
//printNumbTimeout(a,b);
printNumbInterval(a, b);
