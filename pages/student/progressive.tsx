import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseSummary from  '../../components/sections/CourseSummary'
import data from "../../sample_data/proStartedCourse.json"

export default function Progressive({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {
    
    // Side nav sample data
    const importantDates = data.importantDates
    const toLearn = data.toLearn

    return (
        <>
            <CourseBanner 
                bannerImg={bannerImg} 
                bannerHeading={bannerHeading} 
                bannerSubHeading=""
                bannerText={bannerText} 
                redirect="/student/pro-startedcourse" 
                isStarted="false"
                course="IELTS"
                page="step1"
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
                sideTags="Fluency and Coherence, Synonyms and Antonyms, Grammatical Range and Accuracy, Pronounciation" 
                type="progressive" 
                importantDates={importantDates} 
                toLearn={toLearn} 
                course="IELTS"
                page="step1"
            />       
        </>
    )
}

Progressive.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    bannerHeading: 'IELTS Step 1',
    bannerText: 'This program is for candidates over the age of 16 who wish to prepare for an internationally recognized IELTS Test.',
    courseTimeLine: '5 Months',
    applicableLevel: 'LEVELS 1-6',
    courseType: 'SELF-PACED',
    mainCategory: 'IELTS',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}
  