// let myArr = [123, 43, 49, 65, 2],
//     mySwap = 0;
// p1a.innetHTML = myArr[0];

// for (let j = 0; j < myArr.length - 1; j++) {   
//     for (let i = 0; i < myArr.length - 1; i++) {
//         if (myArr[i] > myArr[i + 1]) {
//             mySwap = myArr[i];
//             myArr[i] = myArr[i + 1];
//             myArr[i + 1] = mySwap;
//         }
//     }
// }



//задача 1
// let summ = 100,
//     procent = 5,
//     summResult,
//     y = 100;

// for (let i = 1; i <= 18; i++) {
//     let x = 5;
//     procent = y * (x / 100) //5
//     y = summ + procent;
//     summ = y;
//     console.log(i + ": " + y + " procent: " + procent)
//     p1a.innerHTML = + y.toFixed(2) + " итоговая сумма";
// }

// //task 2

// const mass1 = [1, 2, 3, 324, 6, 23, 35645, 64, 5234, 54];
// const mass2 = [1, 2, 3, 123, 34, 23, 4342, 545, 534, 23, 385612];
// let newArr = [];


// function uniteArrays() {
//     for (let b in mass1)
//         if (!checkDuplicate(mass1[b], newArr))
//             newArr.push(mass1[b]);
//     for (let a in mass2)
//         if (!checkDuplicate(mass2[a], newArr))
//             newArr.push(mass2[a]);
//     console.log(newArr)
// }

// function checkDuplicate(value, arr) {
//     for (let j of arr) {
//         if (j === value)
//             return true;
//     }
//     return false;
// }
// uniteArrays();
// p2.innerHTML = newArr;
// console.log(newArr);


//task 3

// let btnAddQuestion = document.querySelector("#questions-btn");
// let div1 = document.querySelector(".questions");
// let i = 0;

// btnAddQuestion.addEventListener('click', (e) => {

//     let div2 = document.createElement("div");
//     div1.append(div2);
//     let input = document.createElement("input");
//     div1.append(input);

//     //  let input2 = input  
//     //  div1.append(input2);
//      i = i+1
//      input.setAttribute("id", `a${i}`)
 

//     p01a.innerHTML = p02a.value + "<br>";
//     p01b.innerHTML = `Correct: ${p03a.value}<br> `;
//     p01c.innerHTML = `Wrong: ${p04a.value}<br> `;
//     let a = `a${i}.value`
//     p01e.innerHTML +=  `a${i}.value` ;
//     console.log(`${a}`) ;
 
// })


//task4

let btnCapture = document.querySelector("#post");

let a = (Math.floor(Math.random() * 9));
let b = (Math.floor(Math.random() * 99));
random1.innerHTML = " + " + a +  " = "  + b ;
let num = num1.value 



btnCapture.addEventListener('click',(e) => {
   
    let c = num1.value;
    d = b - a;
    console.log(c + "c")
    console.log(a  + "a")
    console.log(b  + "b")
    console.log(d + "d")
    if(c == d) {
    btnCapture.style.backgroundColor = "red"
    alert("true")
    } else {
        alert("false")
        a = (Math.floor(Math.random() * 9));
        b = (Math.floor(Math.random() * 99)); 
        random1.innerHTML = " + " + a +  " = "  + b ;
    }
})


let btnAnimation = document.querySelector("#animation");
let circle = document.querySelector(".circle");

btnAnimation.addEventListener('click', (e) => {
    circle.style.backgroundColor = "red";
    circle.classList.add("animation")
 
    function deleteCircle() {
        // alert( "11111" );
        circle.classList.remove("animation")
      }

    setTimeout(deleteCircle, 1500)
})