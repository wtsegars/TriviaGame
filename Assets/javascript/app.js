$(document).ready(function () {
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var timeLeft = 15;
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
            answers: ["Zek Tsu,gan", "Vulkan He'stan", "Tu'Shan", "Sol Ba'ken"],
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
        }
    ]
})

