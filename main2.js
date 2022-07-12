// function sayHello(name) {
//     return `Привет, ${name}`;
// }

// console.log(sayHello('Марина'));

// function returnNeibouringNummers(num) {
//     let arr = [];
//     arr[0] = num - 1;
//     arr[1] = num;
//     arr[2] = num + 1;
//     return arr;
// }

// console.log(returnNeibouringNummers(5));

function returnNeibouringNummers(num) {
    let arr = [];
    
        for (let i = 0; i < 3; i++) {
            arr[i] = (num - 1);
            num++;
        }
        
    return arr;
}

console.log(returnNeibouringNummers(7));
console.log(typeof(arr));

// function getMathResult(a, b) {

//     if (typeof(b) !== 'number' || b <= 0) {
//         return a;
//     }
    
//     let res = '';

//     for (let i = 1; i <= b; i++) {
//         if (i === b) {
//             res += `${a * i}`;
//         } else {
//             res += `${a * i}---`;
//         }
//     }
       
//     return res;
// }

// console.log(getMathResult(5, 3));
// console.log(getMathResult(10, 5));