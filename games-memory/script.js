window.console = window.console || function (t) { };

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}

$(document).ready(function () {
    //fallback for safari as it doesn't support vh
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $(".game").height($(window).height() * 0.9);
    }


    let cards = [
        'anchor', 'compass',
        'diver', 'lighthouse',
        'pirate', 'prawn',
        'starfish', 'whale'
    ],
        pairs = cards.concat(cards),
        chosenCards = [],
        cardsToFlip = [],
        gameStarted = false,
        running = false,
        outOfTime = false,
        countdownStarted = false,
        win = false,
        pairCount = 0,
        time = 35;

    $('canvas').css("display", "none");

    shuffleArray(pairs);

    $('.back').each(function (i, element) {
        $(this).attr('id', pairs[i]);
    });

    $('.flip-container').click(function () {

        if (!outOfTime) {

            if ($(this).find('.back').attr('id') == chosenCards[0] && chosenCards[1] == null && $(this).hasClass('flip') && !running) {

                running = true;

                chosenCards[0] = null;
                $(this).toggleClass('flip');

                running = false;

            }

            else if ($(this).hasClass('flip')) {

                return;

            }

            else if (chosenCards[0] == null && chosenCards[1] == null && !$(this).hasClass('flip') && !running) {

                if (!countdownStarted) {
                    countdown();
                }

                running = true;

                chosenCards[0] = $(this).find('.back').attr('id');//if no cards have been chosen, store the chosen card's in chosenCards[0]
                $(this).toggleClass('flip');

                running = false;

            }


            else if (chosenCards[0] != null && chosenCards[1] == null && !$(this).hasClass('flip') && !running) {

                running = true;

                chosenCards[1] = $(this).find('.back').attr('id');//if no second card has been flipped, store the chosen card's brand in chosenCards[1] and flip it
                $(this).toggleClass('flip');

                if (chosenCards[0] == chosenCards[1]) {

                    chosenCards[0] = null;
                    chosenCards[1] = null;

                    pairCount++;

                    if (pairCount == cards.length) {
                        win = true;
                        alert("ПОБЕДА!");
                        $('.game').css("display", "none");
                        $('canvas').css("display", "block");
                        $('.timer').css("display", "none");
                    }

                    running = false;

                }

                else {//if the brands did not match - empty the chosenCards & flip the cards back over 

                    cardsToFlip[0] = chosenCards[0];
                    cardsToFlip[1] = chosenCards[1];

                    chosenCards[0] = null;
                    chosenCards[1] = null;

                    setTimeout(function () {//flip back the chosen cards that did not match

                        $('*[id*=' + cardsToFlip[0] + ']').each(function () {
                            $(this).closest('.flip').toggleClass('flip');
                        });
                        $('*[id*=' + cardsToFlip[1] + ']').each(function () {
                            $(this).closest('.flip').toggleClass('flip');
                        });

                        running = false;

                    }, 800);
                }

            }

        } else {
            alert("Время закончилось... :(");
        };

    });//Flip Container Click End

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function countdown() {

        countdownStarted = true;

        var timeStart = +new Date;
        var timer = setInterval(function () {

            var timeNow = +new Date;
            var difference = (timeNow - timeStart) / 1000; //calculates time difference if game isn't in focus

            if (time > 0 && !win) {// if there is still time left and game isn't won, deduct time

                time = 55;
                time = Math.floor(time - difference);
                $('.timer').text(time);

            } else if (win) {

                clearInterval(timer);

            } else {

                outOfTime = true;
                alert("Время закончилось... :(");

                clearInterval(timer);

            }

        }, 250);

    };
});





