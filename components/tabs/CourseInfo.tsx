import CourseInfoMain from './CourseInfoMain'
import CourseInfoSide from '../sections/CourseInfoSide'

export default function CourseInfo({ courseSummaryPro, courseSummaryNonPro, courseSummaryNonPro2, courseSummaryCateg, courseNonProCateg, sideTags, type, importantDates, toLearn, course, isStarted, page }) {

    return (
        <>
            <div className="row">
                <div className="col-sm-8">
                    <CourseInfoMain 
                        courseSummaryPro={courseSummaryPro} 
                        courseSummaryNonPro={courseSummaryNonPro} 
                        courseSummaryNonPro2={courseSummaryNonPro2}
                        courseSummaryCateg={courseSummaryCateg}
                        courseNonProCateg={courseNonProCateg} 
                        type={type} 
                        course={course}
                        isStarted={isStarted}
                        page={page}
                    />
                </div>
                <div className="col-sm-4">
                    <CourseInfoSide 
                        sideTags={sideTags} 
                        importantDates={importantDates} 
                        toLearn={toLearn} 
                    />
                </div>
            </div>
        </>
    )
}

CourseInfo.defaultProps = {
    courseSummaryPro: 'The IELTS STEP 1 COURSE is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.',
    courseSummaryNonPro: 'The MINTOGRAPHY COURSE is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.',
    courseSummaryNonPro2: 'Everyday for 30 minutes, you will learn how to discuss real-life events in English with the aid of videos containing a variety of situational contexts. Never did an interactive video language training before? No worries.This course will take you on a step-by-step journey from introducing you to terms, expressions, and situations categorized under a theme of your choice. We laid out the stairs for you, and all you need to do is climb with us. ',
    courseSummaryCateg: 'IELTS is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.',
    courseNonProCateg: 'Learning Through Media is designed for .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim augue nisl, sed gravida nunc feugiat nec. Cras mollis nisl eleifend tellus aliquam ornare. In hac habitasse platea dictumst.'
}