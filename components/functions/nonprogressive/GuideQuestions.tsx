import TextBox from "../../items/TextBox";

export default function GuideQuestions(){
    return(
        <>
        <p>Answer the following questions regarding the topic: At the Cafe. You will have a discussion about the questions and your answers with your teacher during class.</p>
        <TextBox id="question1" question="Do you tip cafe servers in Korea? Why or why not?" answer=""/>
        <TextBox id="question2" question="What’s the trendiest cafe in Korea? Do you plan to visit it?" answer=""/>
        <TextBox id="question3" question="How often do you visit cafes? What do you like most about cafes when you visit one?" answer=""/>
        <TextBox id="question4" question="What’s your opinion on people studying in cafes?" answer=""/>
        </>
    )
}