import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseSummary from  '../../components/sections/CourseSummary'
import data from "../../sample_data/nonproStartedCourse.json"

export default function NonProgressive({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {
    
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
                redirect="/student/nonpro-startedcourse"
                isStarted="false"
                course="Mintography"
            />
            <CourseDetails 
                courseTimeLine={courseTimeLine} 
                applicableLevel={applicableLevel} 
                courseType={courseType} 
                mainCategory={mainCategory} 
                toKnow={toKnow} 
                type="nonprogressive"
                course="Mintography"
            />
            <CourseSummary 
                sideTags="Photos, Vocabulary, Expressions, Storytelling, Simulation of Real-life Conversations" 
                type="nonprogressive" 
                importantDates={importantDates} 
                toLearn={toLearn} 
                course="Mintography"
            />
        </>
    )
}

NonProgressive.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bannerHeading: 'Mintography',
    bannerText: 'Learn English through photos. Do this and that and that and that.',
    courseTimeLine: '1 DAY - 3 DAYS PER SELECTION',
    applicableLevel: 'LEVELS 1-15',
    courseType: 'SELF-PACED',
    mainCategory: 'None',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}