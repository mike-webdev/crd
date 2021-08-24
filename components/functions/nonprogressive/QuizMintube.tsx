//Quiz for Non Progressive


import QuestionItem from "../../items/QuestionItem";
import AnswerItem from "../../items/AnswerITem";
import { useState } from "react";


export default function QuizMintube() {

    const [score, setScore] = useState("");

    const questions = [
        {
            number: 1,
            question: "Very tiny living things that can cause diseases.",
            choices: ["Antibodies", "Coddle","Bacteria"],
            answer: "Bacteria"
        },

        {
            number: 2,
            question: "Dracula is a real-life vampire from Transylvania, Romania.",
            choices: ["True", "False"],
            answer: "False"
        },

        {
            number: 3,
            question: "You wake up with a fever but still go to school/work, what will you tell your classmate/workmate?",
            choices: ["I’m feeling over the rainbow.", "I’m feeling under the weather", "Cough while talking to the person."],
            answer: "I’m feeling under the weather"
        },

        {
            number: 4,
            question: "Sanitizing refers to...",
            choices: ["purifying evil spirits", "making clean and hygienic", "neutralizing dangerous substances"],
            answer: "making clean and hygienic"
        },

        {
            number: 5,
            question: "All of the expressions can be used when cutting expenses, except:",
            choices: ["To cut down (on something)", "Be sparing of our resources", "Trim the edges"],
            answer: "To cut down (on something)"
        },

        {
            number: 6,
            question: "The immune system is the body’s _________________.",
            choices: ["personal army against intruders", "defense against germs", "breeding ground for viruses"],
            answer: "defense against germs"
        },

        {
            number: 7,
            question: "These are blood proteins produced to fight off bacteria and viruses.",
            choices: ["Immune System", "Fecal Matter", "Antibodies"],
            answer: "Antibodies"
        },

        {
            number: 8,
            question: "For most people, personal hygiene is a ______ ritual.",
            choices: ["weekly", "yearly", "daily"],
            answer: "daily"
        },

        {
            number: 9,
            question: "What will you say when you are saying where a certain piece of information or idea has come from?",
            choices: ["“Having something against someone”", "“According to”", "“Cost someone something”"],
            answer: "“According to”"
        },

        {
            number: 10,
            question: "You can see all of these in a sanitizing station except...",
            choices: ["Alcohol", "Fecal Matter", "Soap"],
            answer: "Fecal Matter"
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
            <p>Instructions: Choose the correct answer from the given choices.<span className="float-end fw-bold">{score}</span></p>
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
            </div>
        </>
    )
}

