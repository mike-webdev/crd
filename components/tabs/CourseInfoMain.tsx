import CourseInfoList from './CourseInfoList'

export default function CourseInfoMain(props) {
    let courseSummary = ""

    if (props.type === 'progressive') {
        courseSummary = props.courseSummaryPro
    } else if (props.type === 'nonprogressive') {
        if (props.course === "Mintography") {
            courseSummary = props.courseSummaryNonPro
        } else {
            courseSummary = props.courseSummaryNonPro2
        }
    } else if (props.type === 'pro-category') {
        courseSummary = props.courseSummaryCateg
    } else {
        courseSummary = props.courseNonProCateg
    }
    
    return (
        <>
            <div className="course-info-main">
                <h3>COURSE SUMMARY</h3>
                <>
                    {props.course === "IELTS" ? (
                        <>
                            {props.page === "step1" ? (
                                <>
                                    <p>Introduce the four evaluation items (fluency and consistency, vocabulary ability, grammatical range and accuracy, pronunciation) and detailed items of IELTS Speaking one by one, and practice to put these skills in the test according to the standards. training.</p>
                                </>
                            ) : (
                                <>
                                    <p>IELTS is the worlds most popular English language test for those who want to work or study in higher education in an English-speaking country.</p>
                                    <p>Backed by highly trained and qualified English tutors, reliable learning materials, and built with machine learning technology. Mint English IELTS Speaking course will prepare you to take the IELTS Speaking test with confidence.</p>
                                    <p>Our booking system allows you to select your preferred tutor and add special requests that you want to make in your classes. There will be homework set per lesson which gives you the chance to apply the lessons focused skills. Also, chapter tests are provided to check your understanding of the lessons. And speaking evaluation or an online simulation of the actual IELTS speaking test.</p>
                                    <p>Each lesson of this course includes the IELTS test procedure and format, together with the IELTS speaking strategies and techniques. These are accompanied by a wide variety of authentic IELTS-style exercises and interactive activities that provide focused practice of the skills, strategies, and techniques which are useful for your IELTS speaking test.</p>
                                    <p>Let Mint English IELTS Speaking Course help you reach your target band score. Start a study session with us now.</p>
                                </>
                            )}
                        </>
                    ) : props.course === "Mintography" ? (
                        <>
                            <p>Everyday for 30 minutes, you will gain a deeper understanding of the English language through cascading lessons using categorized sets of photography that will introduce you to inter-related English concepts to hone your skills better.</p>
                            <p>This course will gradually show you how to use the English language from an integrated standpoint combining inter-related sets of vocabulary and expressions that will surely be useful to you as you apply them in your daily life.</p>
                        </>
                    ) : props.course === "MintTube" ? (
                        <>
                            <p>Everyday for 30 minutes, you will learn how to discuss real-life events in English with the aid of videos containing a variety of situational contexts. Never did an interactive video language training before? No worries.</p>
                            <p>This course will take you on a step-by-step journey from introducing you to terms, expressions, and situations categorized under a theme of your choice. We laid out the stairs for you, and all you need to do is climb with us.</p>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </>

                <CourseInfoList type={props.type} course={props.course} isStarted={props.isStarted} />
            </div>
        </>
    )
}