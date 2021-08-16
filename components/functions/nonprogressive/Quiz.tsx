//Quiz for Non Progressive


import QuestionItem from "../../items/QuestionItem";
import AnswerItem from "../../items/AnswerITem";
import { useState } from "react";


export default function Quiz() {

    const [score, setScore] = useState("");

    const questions = [
        {
            number: 1,
            question: "A coffee-based drink blended with milk.",
            choices: ["frappe", "milkshake"],
            answer: "frappe"
        },

        {
            number: 2,
            question: "Tipping in the US is normal because servers have very low salaries.",
            choices: ["True", "False"],
            answer: "False"
        },

        {
            number: 3,
            question: "You want to order an americano, how will you tell the cashier?",
            choices: ["Americano, please", "Hello, I’d like to order an americano.", "Point at your order."],
            answer: "Hello, I’d like to order an americano."
        },

        {
            number: 4,
            question: "Tipping refers to...",
            choices: ["To set or cause to be at an angle", "a gift or a sum of money tendered for a service performed or anticipated", "a usually small and informal establishment"],
            answer: "a gift or a sum of money tendered for a service performed or anticipated"
        },

        {
            number: 5,
            question: "All of the expressions can be used to order, except:",
            choices: ["“I’d like to order ...”", "“Do you have non-dairy options?”", "“May I see the menu, please?”", "“Will you marry me?”"],
            answer: "“Will you marry me?”"
        },

        {
            number: 6,
            question: "A barista is someone who...",
            choices: ["serves your coffee", "takes your order", "makes and serves coffee to the public", "likes going to bars"],
            answer: "makes and serves coffee to the public"
        },

        {
            number: 7,
            question: "A usually small and informal establishment serving various refreshments (such as coffee)",
            choices: ["cafe", "bar", "restaurant", "kitchenette"],
            answer: "cafe"
        },

        {
            number: 8,
            question: "For most people, _______ gets the day started and the continues to get us through the day.",
            choices: ["Tequila", "Beer", "Coffee", "Soda"],
            answer: "Coffee"
        },

        {
            number: 9,
            question: "What will a cashier tell you once you go to the counter?",
            choices: ["“May I take your order?”", "“Please go out.”", "“Will you marry me?”", "“The world is quiet here.”"],
            answer: "“May I take your order?”"
        },

        {
            number: 10,
            question: "You can see all of these in a cafe except...",
            choices: ["pantry", "espresso machine", "counter", "basketball hoops"],
            answer: "basketball hoops"
        }


    ];

    function Submit() {


        // gather answer containers from our quiz
        var quizContainer = document.getElementById('quiz');
        var answerContainers = quizContainer.querySelectorAll('.choices');


        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = ((answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}) as HTMLInputElement).value;


            // if answer is blank
            if (userAnswer == null) {

                (answerContainers[i] as HTMLElement).style.color = '#E11714';
            }
            else {
                    // if answer is correct
                if (userAnswer === questions[i].answer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    var choice = ((answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}) as HTMLInputElement);
                    choice.style.backgroundColor = "#82CA16";
                    choice.style.borderColor = "#82CA16";
                    (answerContainers[i].querySelector('label[for="' + choice.id + '"]') as HTMLElement).style.color = "#82CA16";

                    // if answer is wrong
                } else {
                    // color the answers red
                    var choice = ((answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}) as HTMLInputElement);
                    choice.style.backgroundColor = "#E11714";
                    choice.style.borderColor = "#E11714";
                    (answerContainers[i].querySelector('label[for="' + choice.id + '"]') as HTMLElement).style.color = "#E11714";
                }

            }



        }

        // show number of correct answers out of total
        setScore("(" + numCorrect + '/' + questions.length + ")");

    }






    return (
        <>
            <p>Mintography Vocabulary and Expressions<span className="float-end fw-bold">{score}</span></p>
            <div id="quiz">
                {questions.map((item: any, index: number) => {
                    return (
                        <QuestionItem key={index} question={item.number + ". " + item.question} >
                            <div className="choices">
                                {
                                    item.choices.map((choices, key) => {
                                        return (
                                            <AnswerItem key={key} val={choices} id={item.number + "choice" + key} name={"question" + index} />
                                        )
                                    })
                                }
                            </div>
                        </QuestionItem>
                    )
                })}
                <div className="row mt-4">
                    <div className="col-sm-12">
                        <a className="btn btn-dark">Bookmark Quiz</a>
                        <a className="btn btn-dark float-end" onClick={Submit}>Submit and Save</a>
                    </div>
                </div>
            </div>
        </>
    )
}

