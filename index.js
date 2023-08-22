let readlineSync  = require("readline-sync");
let kuler = require("kuler");

let score = 0 ;

let username = readlineSync.question("what's your name : ")
console.log(kuler(`Hello , ${username} Welcome to my quiz ` , "#15803d"));


const database = {

    data: [
        {
            question: " 7 + 7 = ? ",
            options: {
                a: "3",
                b: "14",
                c: "34",
                d: "13"
            },
            CorrectAnswer: "b"
        },
        {
            question: " 7 + 9 = ? ",
            options: {
                a: "32",
                b: "16",
                c: "34",
                d: "13"
            },
            CorrectAnswer: "b"
        },
        {
            question: " 70 + 7 = ? ",
            options: {
                a: "3",
                b: "14",
                c: "77",
                d: "13"
            },
            CorrectAnswer: "c"
        },

    ]

}

const leaderboard = {
    data : [
        {
            name  : "pranjal",
            score : 5
        },
        {
            name : "rohan",
            score: 2
        },
        {
            name : "shyam",
            score: 4
        }
    ]
}

function playgame(userAnswer , CorrectAnswer) {
    if (userAnswer == CorrectAnswer) {
        console.log("correct answer");
        score++;
    }
    else{
        console.log("wrong answer");
        console.log(`correct answer is ${CorrectAnswer}`);
    }
}


function showquestionandoptions(database) {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\n Q${i + 1} - ${database.data[i].question}`);

        for (let key in database.data[i].options) {
            console.log(`${key} ) ${database.data[i].options[key]}`);
        }

        let userAnswer =  readlineSync.question("enter your answer (a.b.c.d) - ").toLowerCase();
        playgame(userAnswer,database.data[i].CorrectAnswer)

    }
}

function highscorer(leaderboard) {
    leaderboard.data.push({name:username,score:score})
    // console.log(leaderboard);
    let sortedlist = leaderboard.data.sort((a,b)=> b.score - a.score);
    // console.log(sortedlist);
    console.log("\n leaderboard  : ");
    for (const leader of sortedlist) {
        console.log(`${leader.name} - score: ${leader.score}`);
    }
}






showquestionandoptions(database);
console.log(`your score is  ${score}`);
highscorer(leaderboard)