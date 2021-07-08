// Задание 1
// Создать html-страницу со списком сообщений на форуме и
// формой для добавления нового сообщения. После заполнения
// формы добавить сообщение к списку на экране.


let posts = document.querySelector(".posts"),
    btnRed = document.createElement("button"),
    btnText = "add",
    nameInput = document.createElement("input"),
    textInput = document.createElement("textarea"),
    postsFormDiv = document.querySelector(".posts-form"),
    newPostDiv = document.querySelector(".container-posts");

postsFormDiv.append(nameInput);
postsFormDiv.append(textInput);
postsFormDiv.append(btnRed);
btnRed.append(btnText);
btnRed.style.width = "100%";
nameInput.style.width = "100%";
textInput.style.width = "100%";

nameInput.setAttribute("placeholder", "Name...")
textInput.setAttribute("placeholder", "Your message...")

btnRed.addEventListener('click', (e) => {
    let div1 = document.createElement("div");
    div1.classList.add("red", "container")
    div1.style.marginTop = "2rem";
    newPostDiv.append(div1);
    let div2 = document.createElement("div");
    div2.classList.add("red-flex")
    div1.append(div2);

    let p1 = document.createElement("p"); // name
    let userName = nameInput.value;
    div2.append(p1);
    p1.append(userName);

    let divSpace = document.createElement("div");
    divSpace.classList.add("space")
    div2.append(divSpace);

    let p2 = document.createElement("p"); //date
    let userDate = new Date(),
        day = userDate.getDate(),
        month = userDate.getMonth(),
        year = userDate.getFullYear(),
        hours = userDate.getHours(),
        minutes = userDate.getMinutes();
    div2.append(p2);
    p2.append(`${hours}:${minutes} ${day}.${month}.${year}`);

    let p3 = document.createElement("p"); //text
    let userText = textInput.value;
    div1.append(p3);
    p3.append(userText);

    nameInput.value = "";
    textInput.value = "";
})


// Задание 2
// Создать html-страницу для прохождения теста. Вопросы теста
// имеют два варианта ответа (только 1 правильный). После прохож-
// дения теста, вывести количество правильных ответов.
let countAnswer = 0,
    countMistakes = 0,
    btnNext = document.querySelector("#btn-next"),
    btnFinish = document.querySelector("#btn-finish"),
    chbox1 = document.getElementById('one'),
    chbox2 = document.getElementById('two'),
    chbox3 = document.getElementById('2one'),
    chbox4 = document.getElementById('2two'),
    nextQuestion = document.querySelector(".show"),
    secondQuestion = document.querySelector(".show1"),
    answers = document.querySelector(".answers"),
    questions = document.querySelector(".container-questions");

nextQuestion.classList.toggle("display-none");

btnNext.addEventListener('click', (e) => {

    if (!chbox1.checked && !chbox2.checked) {
        btnNext.setAttribute("disabled", "disabled");
        btnNext.removeAttribute("disabled", "disabled");
    } else {
        nextQuestion.classList.toggle("display-none");
        secondQuestion.classList.toggle("display-none");
        if (chbox1.checked) {
            countAnswer++;
        } else {
            countAnswer = 0;
        }
        if (chbox2.checked) {
            countAnswer = 0;
            countMistakes++;
        } else {
            countMistakes = 0;
        }
    }
})

btnFinish.addEventListener('click', (e) => {


    if (!chbox3.checked && !chbox4.checked) {
        btnFinish.setAttribute("disabled", "disabled");
        btnFinish.removeAttribute("disabled", "disabled");

    } else {

        secondQuestion.style.display = "none";
        nextQuestion.style.display = "none";
        btnFinish.style.backgroundColor = "blue";
        if (chbox3.checked) {
            countAnswer++;


        } else {
            countAnswer = 0;
        }

        if (chbox4.checked) {
            countAnswer = 0;
            countMistakes++;


        } else {
            countMistakes = 0;
        }
        answers.classList.add("container", "red");
        questions.classList.remove("container", "red");
        result.innerHTML = `Result: <hr><b> Correct ${countAnswer}</b> Mistakes ${countMistakes}`;
    }
})


// Задание 3
// Создать html-страницу с формой для ввода стилизованного
// текста. После заполнения формы, вывести текст на экран в соот-
// ветствии с указанными стилями.

let styleBtn = document.getElementById("style-btn"),
    style1 = document.getElementById('style1'),
    style2 = document.getElementById('style2'),
    style3 = document.getElementById('style3'),
    style4 = document.getElementById('style4'),
    style5 = document.getElementById('style5'),
    style6 = document.getElementById('style6'),
    res = document.querySelector(".style-change-result"),
    textValue = document.getElementById('style-textarea');

styleBtn.addEventListener('click', (e) => {
    p1.innerHTML = textValue.value;
    p1.style.fontWeight = "";
    p1.style.textDecoration = "";
    p1.style.fontStyle = "";
    p1.style.textAlign = 'center';
    p1.style.textJustify = 'none';
    if (style1.checked) {
        p1.style.fontWeight = "bold";
    } else if (style2.checked) {
        p1.style.textDecoration = "underline";
    } else if (style3.checked) {
        p1.style.fontStyle = "italic";
    } else if (style4.checked) {
        p1.style.textAlign = 'left';
    } else if (style5.checked) {
        p1.style.textAlign = 'right';
    } else if (style6.checked) {
        p1.style.textJustify = 'auto';
    }
})

// Задание 4
// Создать html-страницу для магазина книг.
//     Пользователь должен иметь возможность выбрать книгу,
//     указать количество экземпляров, ввести свое имя, дату доставки,
//     адрес доставки и комментарий.
//     После заполнения формы необходимо вывести на экран: «Имя
// покупателя, спасибо за заказ. Такой-то товар будет доставлен в
// такую-то дату по такому-то адресу».

let selectBook1 = document.getElementById('select-btn1'),
    selectBook2 = document.getElementById('select-btn2'),
    selectBook3 = document.getElementById('select-btn3'),
    bookName1 = document.getElementById('book-name1'),
    bookName2 = document.getElementById('book-name2'),
    bookName3 = document.getElementById('book-name3'),
    buyBooks = document.getElementById('buy-book-btn'),
    bookName = document.getElementById('book-name'),
    booksAll = document.getElementById('all-books');

booksResult.classList.toggle("red");

selectBook1.addEventListener('click', (e) => {
    bookName.style.backgroundColor = "#5ec4c4";
    bookName.value = bookName1.textContent
})

selectBook2.addEventListener('click', (e) => {
    bookName.style.backgroundColor = "#efe41c";
    bookName.value = bookName2.textContent
})


selectBook3.addEventListener('click', (e) => {
    bookName.style.backgroundColor = "#b58d57";
    bookName.value = bookName3.textContent
})

buyBooks.addEventListener('click', (e) => {
    let userName = a1.value,
        choosenBook = bookName.value,
        date = a2.value,
        adress = a3.value;

    booksAll.style.backgroundColor = "pink";
    booksAll.style.display = "none"
    booksResult.classList.toggle("red");
    booksResult.classList.toggle("res");
    booksResult.innerHTML = `<b>${userName},</b> thanks for the order! <br> Book "${choosenBook}"<br> will be delivered on ${date} to ${adress}.`
})


// Задание 5
// Создать html-страницу с возможностью отмечать присутству-
// ющих на паре. Для начала пользователь выбирает группу и пару,
//     дальше вводит тему занятия и отмечает присутствующих. Также
// добавить возможность посмотреть уже отмеченные пары. Хранить
// информацию в заранее подготовленных массивах.


// function getSelectedCheckboxValues(name) {
//     const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
//     let values = [];
//     checkboxes.forEach((checkbox) => {
//         values.push(checkbox.value);
//     });
//     return values;
// }

let btn = document.querySelector('#save'),
    btnSelect = document.querySelector('#select-btn'),
    btnOk = document.querySelector('#ok'),
    btnSelectAll = document.querySelector('#selectAll'),
    student1 = document.querySelector("#student1"),
    student2 = document.querySelector("#student2"),
    student3 = document.querySelector("#student3"),
    students = document.querySelector(".students-all"),
    studentsDiv = document.querySelector(".student-present"),
    topicDiv = document.querySelector(".topic-div"),
    okDiv = document.querySelector(".ok-btn-hide");


let group1 = ["Kate Bill", "Hillary Toe", "Greg Lois"];
let group2 = ["John Doe", "Shevchenko Ann", "Kovalenko Jenia"];
let group3 = ["Stewart Donald", "Porter Alexander", "Kristina Lois"];
let group4 = ["Riley Mark", "Roberts Cleva", "West Jamesina"];
let a;

const select = document.querySelector('#select').getElementsByTagName('option');


btnSelect.addEventListener('click', (e) => {

    for (let i = 0; i < select.length; i++) {
        if (select[i].value === 'gr1' && select[i].selected) {
            a = group1;
        } else if (select[i].value === 'gr2' && select[i].selected) {
            a = group2;
        } else if (select[i].value === 'gr3' && select[i].selected) {
            a = group3;
        } else if (select[i].value === 'gr4' && select[i].selected) {
            a = group4;
        }
    }


    for (let j in a) {
        if (Number(j) === 0) {
            student1.innerHTML = a[j];
        }
        if (Number(j) === 1) {
            student2.innerHTML = a[j];
        }
        if (Number(j) === 2) {
            student3.innerHTML = a[j];
        }
    }

    for (let i = 0; i < select2.length; i++) {
        if (select2[i].value === '1' && select2[i].selected) {
            select2.style.backgroundColor = "#97DFFC";
        } else if (select2[i].value === '2' && select2[i].selected) {
            select2.style.backgroundColor = "#858AE3";
        } else if (select2[i].value === '3' && select2[i].selected) {
            select2.style.backgroundColor = "#613DC1";
        }
    }
})

btnOk.addEventListener('click', (e) => {
    okDiv.style.display = "none"
})


btn.addEventListener('click', (event) => {
        let theme = document.querySelector("#topic");
        topicDiv.style.display = "none";
        students.style.display = "none";
        a01.innerHTML = `Topic: ${theme.value}<br>`;
        a01.style.color = "green";
        studentsDiv.style.height = "500px";
        studentsDiv.style.backgroundColor = "white";

        for (let i = 0; i < select.length; i++) {
            if (select[i].value === 'gr1') {
                a = group1;
            } else a = group2;
        }

        student1 = student1.textContent
        student2 = student2.textContent
        student3 = student3.textContent

        if (check1.checked && check2.checked && check3.checked) {
            a0.innerHTML = ` ${student1} present<br> ${student2} present  <br>${student3} present<br>  `;
        } else if (check1.checked && check2.checked) {
            a0.innerHTML = `  ${student1} present  <br>${student2} present<br>  `;
        } else if (check1.checked && check2.checked) {
            a0.innerHTML = ` ${student1} present  <br>${student2} present<br>  `;
        } else if (check1.checked && check3.checked) {
            a0.innerHTML = ` ${student1} present  <br>${student3} present<br> `;
        } else if (check2.checked && check3.checked) {
            a0.innerHTML = ` ${student2} present  <br>${student3} present<br>  `;
        } else if (check1.checked) {
            a0.innerHTML = `${student1} present  <br> `;
        } else if (check2.checked) {
            a0.innerHTML = `  ${student2} present  <br> `;
        } else if (check3.checked) {
            a0.innerHTML = `  ${student3} present  `;
        }
    }
);

btnSelectAll.addEventListener('click', (e) => {
    check1.setAttribute("checked", "checked");
    check2.setAttribute("checked", "checked");
    check3.setAttribute("checked", "checked");
})

// Задание 6
// Создать html-страницу с возможностью забронировать билеты
// на поезд. Для начала пользователь выбирает направление поезда
// и дату поездки, дальше отмечает места для брони. Также добавить
// возможность посмотреть уже забронированные билеты. Хранить
// информацию в заранее подготовленных массивах.

let searchBtn = document.getElementById('search');
let biletsDiv = document.getElementById('bilets');
let select3 = document.getElementById('select3');
let delDiv = document.querySelector('.del');

order.style.display = "none";
order2.style.display = "none";
order3.style.display = "none";

searchBtn.addEventListener('click', (e) => {

    let div1 = document.createElement("div");
    biletsDiv.append(div1)
    div1.classList.add("students", "students1")
    div1.style.backgroundColor = "white"

    for (let i = 0; i < 30; i++) {
        let div2 = document.createElement("div");
        let check = document.createElement("input");
        check.setAttribute("id", `place${i + 1}`);
        check.setAttribute("type", "checkbox");
        check.setAttribute("value", i + 1);
        check.setAttribute("name", "places");
        div1.append(div2);
        div2.style.backgroundColor = "gray";
        div2.style.width = "50px";
        div2.style.height = "50px";
        div2.style.margin = ".2rem";
        div2.innerHTML = `${i + 1}`;
        div2.append(check);
        for (let i = 0; i < select3.length; i++) {
            if (select3[i].value === 'odessa' && select3[i].selected) {
                select3.style.backgroundColor = "#97DFFC";
                div2.style.backgroundColor = "#97DFFC";
            } else if (select3[i].value === 'che' && select3[i].selected) {

                div2.style.backgroundColor = "#613DC1";
            }
        }
    }

    let btn = document.createElement("button");
    btn.setAttribute("id", "btn")
    div1.append(btn);
    btn.append("Book");

    function getSelectedCheckboxValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        return values;
    }

    btn = document.querySelector('#btn');
    btn.addEventListener('click', (event) => {
        order.style.display = "flex";
        order2.style.display = "flex";
        order3.style.display = "flex";
        div1.style.display = "none";
        delDiv.style.display = "none";
        order.innerHTML = `Вы забронировали ${getSelectedCheckboxValues('places')} место`;
        order2.innerHTML = select3.value;
        order3.innerHTML = date1.value;

    });
})



