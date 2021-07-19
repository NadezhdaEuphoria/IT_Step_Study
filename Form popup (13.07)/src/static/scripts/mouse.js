let popupLinks = document.querySelectorAll(".popup-link"),
    body = document.querySelector("body"),
    lockPadding = document.querySelectorAll(".lock-padding"),
    unlock = true,
    timeout = 800;

console.log(popupLinks)

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        let popupLink = popupLinks[i];
        popupLink.addEventListener('click', (e) => {
            let popupName = popupLink.getAttribute('href').replace('#', '');
            let curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })
    }
}

let popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        let close = popupCloseIcon[i];
        close.addEventListener('click', (e) => {
            popupClose(close.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        let popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
}


function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}


//убрать сдвиг контента при появлении поп-апа
function bodyLock() {
    let lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            let el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
            body.classList.add('lock');
            unlock = false;
            setTimeout(function () {
                unlock = true;
            }, timeout);
        }
    }
}


function bodyUnLock() {
    if (lockPadding.length > 0) {
        setTimeout(function () {
            for (let i = 0; i < lockPadding.length; i++) {
                let el = lockPadding[i];
                el.style.paddingRight = "0px";
            }
            body.style.paddingRight = "0px";
            body.classList.remove('lock');
        }, timeout);
        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }
}

//закрытие по эскейпу
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        let popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});


