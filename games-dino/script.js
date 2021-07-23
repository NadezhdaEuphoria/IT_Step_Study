// $('.js--task-header li').click((e) => {
//     const $target = $(e.target);
//     if($target.hasClass('active')) {
//         return false;
//     }
//     $('.task-1 .active').removeClass('active');
//     $target.addClass('active');
//     const index = +$target.attr('data-id');
//     $($('.task-1__body__item')[index]).addClass('active');
// });


// let myArr = [];
// let btn = $('#btn');
// let datalist = $('#p2a');


// btn.click((e) => {
//     $('#btn').css("backgroundColor", "red");
//     let valueOfInput = $('#p1a').val();
//     myArr.push(valueOfInput)
//     console.log(myArr) ;
//     console.log(valueOfInput) ;
//     let a = document.createElement('option');
//     datalist.append(a);
//     // a.append(p1a.value);
//     a.setAttribute("value",p1a.value )
//     console.log(i)
//     console.log(a)
// });


// //task 4

// const maxValue = 250;

// let obj = {
//     "header": "string",
//     "maxvalue": 123,
//     "data": [
//     {
//     "title": "string",
//     "value": 123
//     }
//     ]
//    }

//    const dateNormal = JSON.parse(`{
//     "header": "User rating",
//     "maxvalue": 254,
//     "data": [
//     {
//     "title": "5 stars",
//     "value": 150
//     },
//     {
//     "title": "4 stars",
//     "value": 63
// },
// {
// "title": "3 stars",
// "value": 15
// },
// {
// "title": "2 stars",
// "value": 6
// },
// {
// "title": "1 star",
// "value": 20
// }
// ]
// }`) 

//    let progress1 = document.querySelector('#p1'),
//    progress2 = document.querySelector('#p2'),
//    progress3 = document.querySelector('#p3');

// dateNormal.data.forEach(value => {
//     const progress = document.createElement("progress");
//     $(progress).attr('max', dateNormal.maxvalue);
//     $(progress).attr('value', value.value);
//     div = $(".task-3");
//     div.append(progress)
// });

const dino = document.querySelector('#dino'),
    cactus = document.querySelector('#cactus'),
    game = document.querySelector('.game'),
    game2 = document.querySelector('.game2'),
    btn = document.querySelector('#btn'),
    btnStart = document.querySelector('#btn2');

document.addEventListener('keydown', (e) => {
    jump();
})

btn.addEventListener('click', (e) => {
    jump();
})

btnStart.addEventListener('click', (e) => {
    game.style.display = "block";
    game2.style.display = "none";
    btn.style.display = "block";
})

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300)
}

game2.style.display = "none";

let isAlive = setInterval(function () {

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        game.style.display = "none";
        game2.style.display = "flex";
        btn.style.display = "none";
        document.body.style.backgroundColor = "red";
        cactus.setAttribute("left", "1160px");
    }
}, 10);

let backGround = setInterval(function () {
    document.body.style.backgroundColor = "white";

}, 3000);