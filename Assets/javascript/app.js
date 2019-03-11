$(document).ready(function () {
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var timeRemaining = 15;
    var intervalID;
    var indexQnA = 0;
    var answered = false;
    var correct;
    var triviaQuestions = [
        {
            question: "Who is the enigmatic ruler over all of humanity?",
            answers: ["The High Lords of Terra", "Malcador the Sigillite", "The Emperor of Mankind", "Donald Trump"],
            correct: "2",
            image: ("Assets/images/Lord_of_Mankind.jpg")
        },
        {
            question: "What is the name of the overall organization that only answers to the Emperor even in his state of undeath?",
            answers: ["Adeptes Astarties", "The Inquisition", "The Ecclesiarchy", "The High Lords of Terra"],
            correct: "1",
            image: ("Assets/images/Inquisition.jpg")
        },
        {
            question: "What is the splinter faction of the Tau empire called?",
            answers: ["Vior'la Sept", "The Traitor Legions", "Spineward Front", "Farsight Enclaves"],
            correct: "3",
            image: ("Assets/images/Farsight_enclaves.png")
        },
        {
            question: "What is the name of the fortress world that has been guarding the Eye of Terror for nearly 10,000 years?",
            answers: ["Cadia", "Caliban", "Prospero", "Vraks"],
            correct: "0",
            image: ("Assets/images/Eye.jpg")
        },
        {
            question: "Who was the primarch that was killed at the final battle of the Horus Heresy while fighting the arch-traitor himself?",
            answers: ["Lion El'Jonson", "Ferrus Manus", "Sigmar", "Sanguinius"],
            correct: "3",
            image: ("Assets/images/Primarch_Sanguinius_Victorious.jpg")
        },
        {
            question: "What was the name of the first publication that came from the Black Library?",
            answers: ["Gaunt's Ghosts", "Eisnhorn", "Inferno!", "Space Wolves"],
            correct: "2",
            image: ("Assets/images/Inferno_Magazine.jpg")
        },
        {
            question: "Which metal band has WH40K artwork on the cover of one of their albums?",
            answers: ["Cannibal Corpse", "Bolt Thrower", "Crowbar", "Megadeth"],
            correct: "1",
            image: ("Assets/images/Bolt_realm.jpg")
        },
        {
            question: "In the Salamanders novels, who was Hazon Dak'ir's rival?",
            answers: ["Zek Tsu'gan", "Vulkan He'stan", "Tu'Shan", "Sol Ba'ken"],
            correct: "0",
            image: ("Assets/images/FiredrakeBookCover.jpg")
        },
        {
            question: "In the Gaunt's Ghost's novels, what is the name of the planet where most of the Ghosts come from?",
            answers: ["Menzoid Epsilon", "Fortis Binary", "Tanith", "Mundus Planus"],
            correct: "2",
            image: ("Assets/images/Badge_6784.jpg")
        },
        {
            question: "What was the original name of the Legion of the Damned?",
            answers: ["Flame Falcons", "Sky Hunters", "Soul Drinkers", "Fire Hawks"],
            correct: "3",
            image: ("Assets/images/Firehawksmarine.jpg")
        },
        {
            question: "Of the 20 original legions of space marines, which two legions are 'the lost and the purged'?",
            answers: ["I and XX", "II and XI", "X and XVIII", "XIV and XVI"],
            correct: "1",
            image: ("Assets/images/Missing.jpg")
        },
        {
            question: "In the relm of chaos, who is the god of anarchy and terror?",
            answers: ["Malal", "Gork", "Khorne", "Khaine"],
            correct: "0",
            image: ("Assets/images/Malal.jpg")
        },
        {
            question: "What was the name of the genestealer cult that Ortan Cassius and his kill-team were sent to exterminate?",
            answers: ["Pauper Princes", "Twisted Helix", "Cult of the Four-Armed Emperor", "Genestealer cults don't have names"],
            correct: "2",
            image: ("Assets/images/Cultofthe4ArmedEmperorIcon.jpg")
        },
        {
            question: "What sector of the Milky Way Galaxy is beyond the reach of the astranomicon?",
            answers: ["Calixis Sector", "Aurelia Sector", "Gothic Sector", "Koronus Sector"],
            correct: "3",
            image: ("Assets/images/Koronus_Expanse.jpg")
        },
        {
            question: "What area of Earth was the Emperor of Mankind born?",
            answers: ["Germany", "Turkey", "Nepal", "Iran"],
            correct: "1",
            image: ("Assets/images/turkey.gif")
        }
    ];
    function gameStart() {
        console.log("Game Start");
        correctAnswers = 0;
        wrongAnswers = 0;
        loadQuiz();
    };
    function loadQuiz() {
        answered = false;
        timeLeft = 15;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaQuestions[indexQnA].correct;
        let question = triviaQuestions[indexQnA].question;
        $('#question').html(question);
        for (let i = 0; i < 4; i++) {
            var answer = triviaQuestions[indexQnA].answers[i];
            $('#answers').append('<h3 class=answersAll id=' + i + '>' + answer + '</h3>');
        }
        $("h3").click(function () {
            let guess = $(this).attr('id');
            if (guess === correct) {
                answered = true;
                $('#question').text("You are correct!");
                correctAnswer();
            }
            else {
                answered = true;
                $('#question').text("Incorrect! The answer is: " + triviaQuestions[indexQnA].answers[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('#question').text("The answer is: " + triviaQuestions[indexQnA].answers[correct]);
            incorrectAnswer();
        }
        else if (answered === true) {
            clearInterval(intervalID);
            timeRemaining = 15;
        }
        else {
            timeRemaining--;
            $('#time').text(timeRemaining);
        }
    }

    function correctAnswer() {
        correctAnswers++;
        resetRound();
    }

    function incorrectAnswer() {
        wrongAnswers++;
        resetRound();
    }

    function resetRound() {
        $('.answersAll').remove();
        $('#answers').append('<img class=answerImage src="' + triviaQuestions[indexQnA].image + '">');
        indexQnA++;
        if (indexQnA < triviaQuestions.length) {
            setTimeout(function () {
                loadQuiz();
                $('.answerImage').remove();
            }, 5000);
        }
        else {
            setTimeout(function () {
                $('#question').remove();
                $('#timeRemaining').remove();
                $('.answerImage').remove();
                $('#answers').append('<h4 class= answersAll end>Correct Answers: ' + correctAnswers + '</h4>');
                $('#answers').append('<h4 class= answersAll end>Incorrect Answers: ' + wrongAnswers + '</h4>');
                setTimeout(function () {
                    location.reload();
                }, 7000);
            }, 5000);
        }
    };

    gameStart()
})

