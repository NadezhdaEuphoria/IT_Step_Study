// Задание 3
// Создать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100
// пикселей.
//     Сделать так, чтобы при клике мышкой по полю, мяч плавно
// перемещался на место клика. Учтите: необходимо, чтобы центр
// мяча останавливался именно там, где был совершен клик мышкой.
//     Также предусмотрите, чтобы мяч не выходил за границы поля.

function moveBall(e){
    ball.style.left=e.pageX+'px';
    ball.style.top =e.pageY+'px'
}

// Задание 4
// Создать html-страницу со светофором и кнопкой, которая
// переключает светофор на следующий цвет.

let light = 0;
function switchLight() {
    if(light === 0) {
        red.style.backgroundColor = 'red'
        green.style.backgroundColor = '#555555'
    }
    if(light === 1) {
        yellow.style.backgroundColor = 'yellow'
        red.style.backgroundColor = '#555555'
    }
    if(light === 2) {
        yellow.style.backgroundColor = '#555555'
        red.style.backgroundColor = '#555555'
        green.style.backgroundColor = 'green'
        light=-1
    }
    light++
}


// Задание 2
// Создать html-страницу с кнопкой Открыть и модальным
// окном. На модальном окне должен быть текст и кнопка Закрыть.
//     Изначально модальное окно не отображается. При клике на
// кнопку Открыть появляется модальное окно, на кнопку Закрыть –
// исчезает.

let modal = document.getElementById("myModal"),
    btn = document.getElementById("myBtn"),
    span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Задание 1
// Создать html-страницу для ввода имени пользователя.
//     Необходимо проверять каждый символ, который вводит поль-
// зователь. Если он ввел цифру, то не отображать ее в input.

input_1.oninput = function() {
    r = input_1.value.slice(-1)
    if(isNaN(r) == false) {
        input_1.value = input_1.value.substr(0,input_1.value.length-1)
    }
};

//
// Задание 5
// Создать html-страницу со списком книг.
//     При щелчке на книгу, цвет фона должен меняться на оранжевый.
//     Учтите, что при повторном щелчке на другую книгу, предыдущей –
// необходимо возвращать прежний цвет.




function F1(a){
    for(i = 1; i < 6; i++){
        document.getElementById("k"+i).style.background = "#d6d2d2";
    }

    document.getElementById("k"+a).style.background = "orange";
}




// Задание 6
// Создать html-страницу с несколькими кнопками.
//     При наведении на кнопку, должна появляться подсказка с тек-
// стом. По умолчанию – подсказка появляется сверху от кнопки. Но
// если она не помещается сверху от кнопки, тогда отображается снизу.