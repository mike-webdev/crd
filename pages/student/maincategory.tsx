import CourseBanner from '../../components/sections/CourseBanner'
import CourseDetails from '../../components/sections/CourseDetails'
import CourseSummary from  '../../components/sections/CourseSummary'

export default function NonProMainCategory({ bannerImg, bannerHeading, bannerText, courseTimeLine, applicableLevel, courseType, mainCategory, toKnow }) {

    // Side nav sample data
    const importantDates = [
        "Start of course",
        "Duedates: Homework",
        "Duedates: Quiz (Chapter Mock Tests)",
        "End of Course"
    ]

    const toLearn = [
        {
            title: "Sample Lesson Tag",
            content: [
                "Sample subtag",
                "Sample subtag",
                "Sample subtag"
            ]
        }
    ]

    return (
        <>
            <CourseBanner 
                bannerImg={bannerImg} 
                bannerHeading={bannerHeading} 
                bannerSubHeading="[ 3 COURSES UNDER THIS CATEGORY ]"
                bannerText={bannerText} 
                redirect="/student/nonpro-startedcourse"
            />
            <CourseDetails 
                courseTimeLine={courseTimeLine} 
                applicableLevel={applicableLevel} 
                courseType={courseType} 
                mainCategory={mainCategory} 
                toKnow={toKnow} 
                type="nonprogressive"
            />
            <CourseSummary 
                sideTags="Vocabulary, Expressions, Grammar, Subject Verb Agreement, Conversations" 
                type="nonpro-category" 
                importantDates={importantDates} 
                toLearn={toLearn} 
            />

        </>
    )
}

NonProMainCategory.defaultProps = {
    bannerImg: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bannerHeading: 'Learning Through Media CATEGORY',
    bannerText: 'Learning Through Media is sed ipsum tellus. Nulla libero lacus, pulvinar tincidunt enim ut, placerat porta quam. Nam vel viverra libero. Vivamus lectus ipsum, porta nec quam eu, maximus condimentum dolor.',
    courseTimeLine: '4-5 Months',
    applicableLevel: 'LEVELS 1-15',
    courseType: 'SELF-PACED',
    mainCategory: 'None',
    toKnow: 'LISTENING, SPEAKING, READING, & WRITING SKILLS'
}