import TextBox from "../../items/TextBox";
import ConnectTeacher from "../../sections/ConnectTeacher";

export default function GuideQuestions(){
    return(
        <>
            <p>Answer the following questions regarding the topic: At the Cafe. You will have a discussion about the questions and your answers with your teacher during class.</p>
            <TextBox id="question1" question="Do you tip cafe servers in Korea? Why or why not?" answer=""/>
            <TextBox id="question2" question="What’s the trendiest cafe in Korea? Do you plan to visit it?" answer=""/>
            <TextBox id="question3" question="How often do you visit cafes? What do you like most about cafes when you visit one?" answer=""/>
            <TextBox id="question4" question="What’s your opinion on people studying in cafes?" answer=""/>
            <div className="row justify-content-between mt-4">
                <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                <button className="btn btn-dark col-sm-3">Start Guided Practice <i className="fas fa-caret-right"></i></button>
            </div>
            <div className="float-end mb-5">
                <ConnectTeacher connect="true" />
            </div>
        </>
    )
}