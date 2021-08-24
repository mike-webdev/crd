import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseSummary from  '../../components/sections/CourseSummary'
import data from "../../sample_data/proStartedCourse.json"

export default function ProMainCategory({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {
    
    // Side nav sample data
    const importantDates = data.importantDates
    const toLearn = data.toLearn
    
    // const importantDates = [
    //     "Start of course",
    //     "Duedates: Homework",
    //     "Duedates: Quiz (Chapter Mock Tests)",
    //     "End of Course"
    // ]

    // const toLearn = [
    //     {
    //         title: "Sample Lesson Tag",
    //         content: [
    //             "Sample subtag",
    //             "Sample subtag",
    //             "Sample subtag"
    //         ]
    //     }
    // ]

    return (
        <>
            <CourseBanner 
                bannerImg={bannerImg} 
                bannerHeading={bannerHeading} 
                bannerSubHeading="[ 4 COURSES UNDER THIS CATEGORY ]"
                bannerText={bannerText} 
                redirect="/student/pro-startedcourse"
                isStarted="false"
                course="IELTS"
                courseType={courseType}
                page="specialization"
            />
            <CourseDetails 
                courseTimeLine={courseTimeLine} 
                applicableLevel={applicableLevel} 
                courseType={courseType} 
                mainCategory={mainCategory} 
                toKnow={toKnow} 
                type="progressive"
                course="IELTS"
            />
            <CourseSummary 
                sideTags="Speaking Bands, Assessment Criteria, IELTS Test Result, Fluency and Coherence, Pause, Pauses, Types of pauses, Short Pauses, Medium Pause, Long Pause, Filler words, Speech Rate, Conversational Speech Rate, Normal Speech Rate, Staying On Topic, Topic, Cohesive Device, Answer Structure, Thinking Vocab, Pausing Vocabulary, Lexical Resource, Synonyms, Antonyms, Paraphrasing, Collocations, Idiomatic Expressions, Grammatical Range and Accuracy, Sentence Structures, Simple sentence, Complex sentence, Compound sentence, Verb Tenses, Functional Language, Pronunciation, Speech Intelligibility, Stress, Intonation, Accent, Individual Sounds" 
                type="pro-category" 
                importantDates={importantDates} 
                toLearn={toLearn} 
                course="IELTS"
                page="specialization"
            />
        </>
    )
}

ProMainCategory.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bannerHeading: 'IELTS Specialization',
    bannerText: 'IELTS is sed ipsum tellus. Nulla libero lacus, pulvinar tincidunt enim ut, placerat porta quam. Nam vel viverra libero. Vivamus lectus ipsum, porta nec quam eu, maximus condimentum dolor.',
    courseTimeLine: '4-5 Months',
    applicableLevel: 'LEVELS 1-15',
    courseType: 'SELF-PACED',
    mainCategory: 'IELTS',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}