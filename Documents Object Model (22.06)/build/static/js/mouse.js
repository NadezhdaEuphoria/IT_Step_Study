// Задание 1
// Создать html-страницу с трекбаром.
//     Предоставить пользователю возможность изменять положение
// синего указателя.


let tumbler = document.getElementById("js-input"),
    valueText = document.getElementById("js-input-icon");
valueText.innerHTML = tumbler.value;

tumbler.oninput = function () {
    valueText.innerHTML = this.value;
    if (this.value > 0) {
        tumbler.style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 256)) + ","
            + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")"

    }
}

// Задание 2
// Создать html-страницу с галереей.
//     В один момент времени на экране отображается одно изо-
// бражение и две кнопки: Назад и Вперед. При нажатии на кнопки
// изображения должны переключатся в указанном порядке. Когда
// следующего/предыдущего изображения нет, то соответствующую
// кнопку необходимо блокировать. Изображения хранить в заранее
// подготовленном массиве.

let sliderImgArr = document.querySelectorAll(".item"),
    indexSlider = 0,
    btnNext = document.querySelector(".js-slider-btn-next"),
    btnPrev = document.querySelector(".js-slider-btn-previous");


function ShowSlider(indexSlider) {
    for (let slide of sliderImgArr) {
        slide.style.display = "none";
    }
    if (indexSlider === 0) {
        btnPrev.style.backgroundColor = "red";
    } else if (indexSlider === sliderImgArr.length - 1) {
        btnNext.style.backgroundColor = "red";
    }
    sliderImgArr[indexSlider].style.display = "flex";
}

ShowSlider(indexSlider)

function showNextSlide() {
    btnPrev.style.backgroundColor = "gray";
    btnPrev.removeAttribute("disabled", "disabled")
    ShowSlider(++indexSlider)
    if (indexSlider === sliderImgArr.length - 1) {
        btnNext.setAttribute("disabled", "disabled");
        // btnNext.style.backgroundColor = "red";
    } else {
        btnNext.removeAttribute("disabled", "disabled");
        btnNext.style.backgroundColor = "gray";
    }
}

function showPrevSlide() {
    ShowSlider(indexSlider--)
    btnNext.style.backgroundColor = "gray";
    btnNext.removeAttribute("disabled", "disabled")
    if (indexSlider === -1) {
        btnPrev.setAttribute("disabled", "disabled");
    } else {
        btnPrev.removeAttribute("disabled", "disabled");
        btnPrev.style.backgroundColor = "gray";
    }
}


// Задание 3
// Создать html-страницу с блоками информации, которые от-
// крываются по щелчку на заголовок. В один момент времени может
// быть развернут только один блок информации.

let acc = document.getElementsByClassName("accordion"),
    panels = document.getElementsByClassName("panel"),
    i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let panel = this.nextElementSibling;
        for (let j = 0; j < panels.length; j++) {
            if (i !== j) {
                panels[j].style.display = "none";
            }
        }
        this.classList.toggle("active");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}

// Задание 4
// Создать html-страницу с новостями.
//     Необходимо отлавливать, когда скролл доходит до конца стра-
// ницы, и догружать еще новости в список. Новости для подгрузки
// хранить в заранее подготовленном массиве.
//     Облегченный вариант: вместо отлова, когда скролл дойдет до
// конца страницы, используйте кнопку в конце списка новостей.


let block = document.getElementById('infinite-scroll');
window.addEventListener('scroll', function () {
    if (pageYOffset >= 1500) {
        arrowTop.hidden = (pageYOffset >= 7000);
    } else if (pageYOffset <= 1500) {
        arrowTop.hidden = (pageYOffset <= 1500);
    }
});


window.addEventListener("scroll", function () {

    let block = document.getElementById('infinite-scroll'),
        counter = 1,
        contentHeight = block.offsetHeight,      // 1) высота блока контента вместе с границами
        yOffset = window.pageYOffset,      // 2) текущее положение скролбара
        window_height = window.innerHeight,      // 3) высота внутренней области окна документа
        y = yOffset + window_height;

    // если пользователь достиг конца
    if (yOffset < 6000) {
        if (y >= contentHeight) {
            block.innerHTML = block.innerHTML + yOffset + "<div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam blanditiis consequatur debitis dolores dolorum fugit inventore iusto libero minus, nobis nostrum odit officia quia, quisquam, reiciendis saepe tempora voluptatibus.</div>";

        }
    }
});

//
// Задание 5
// Создать html-страницу, на которой пользователь может вве-
// сти номер месяца, год, и получить календарь на указанный месяц.
//     Календарь можно генерировать с помощью таблицы. Начальный
// день недели всегда должен быть понедельник.

function genCalendar() {
    let calendarBody = document.querySelector('.calendar .calendar-body'),
        dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        userDay = Number(p1c.value),
        userMonth = p1a.value,
        userYear = Number(p1b.value),
        userDate = new Date(userMonth + " " + userDay + ", " + userYear);
    a1.innerHTML = "TODAY IS: " + userDay + " of " + userMonth + " , " + userYear + " year.";
    let date = userDate;
    let curDay = date.getDate();
    date.setDate(1);
    let startDay = date.getDay();
    let daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()];
    let content = '';
    for (let i = 0; i < startDay; i++) {
        content += '<div class="no-day"></div>';
    }
    for (let i = 1; i <= daysTotal; i++) {
        if (i === curDay) {
            content += '<div class="cur-day">' + i + '</div>';
        } else {
            content += '<div>' + i + '</div>';
        }
    }
    calendarBody.innerHTML = content;
}
