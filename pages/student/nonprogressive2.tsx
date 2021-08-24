import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseSummary from  '../../components/sections/CourseSummary'
import data from "../../sample_data/nonproStartedCourse.json"

export default function NonProgressive2({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {

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
                redirect="/student/nonpro-startedcourse2"
                isStarted="false"
                course="MintTube"
            />
            <CourseDetails 
                courseTimeLine={courseTimeLine} 
                applicableLevel={applicableLevel} 
                courseType={courseType} 
                mainCategory={mainCategory} 
                toKnow={toKnow} 
                type="nonprogressive"
                course="MintTube"
            />
            <CourseSummary 
                sideTags="Photos, Vocabulary, Expressions, Storytelling, Simulation of Real-life Conversations" 
                type="nonprogressive" 
                importantDates={importantDates} 
                toLearn={toLearn} 
                course="MintTube"
            />
        </>
    )
}

NonProgressive2.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?cs=srgb&dl=pexels-donald-tong-66134.jpg&fm=jpg',
    bannerHeading: 'MintTube',
    bannerText: 'Learn English through videos. Do this and that and that and that.',
    courseTimeLine: '1 DAY - 3 DAYS PER SELECTION',
    applicableLevel: 'LEVELS 1-15',
    courseType: 'SELF-PACED',
    mainCategory: 'None',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}