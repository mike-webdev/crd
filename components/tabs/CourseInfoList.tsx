import Link from 'next/link'
import CourseInfoItem from '../items/CourseInfoItem'
import CourseCategoryList from './CourseCategoryList'
import CourseTopicList from './CourseTopicList'
import CoursesByCategoryItem from '../items/CoursesByCategoryItem'
import progressiveData from "../../sample_data/proStartedCourse.json"
import nonprogressiveData from "../../sample_data/nonproStartedCourse.json"

export default function CourseInfoList(props) {

    // sample data for progressive course summary
    const proCourseList = progressiveData.proCourseList
    const proCoursesByCategory = progressiveData.proCoursesByCategory

    // sample data for nonprogressive course summary
    const nonproCourseOverview = nonprogressiveData.nonproCourseOverview
    const courseCategories = nonprogressiveData.courseCategories
    const courseTopics = nonprogressiveData.courseTopics
    const nonProCoursesByCategory = nonprogressiveData.nonProCoursesByCategory

    let coursesByCategory = (props.type === 'pro-category') ? proCoursesByCategory : nonProCoursesByCategory

    return (
        <>
            { props.type === 'progressive' && 
                proCourseList.map((data) => (
                    <CourseInfoItem key={data.id} item={data} type={props.type} course={props.course} isStarted={props.isStarted}/>
                )) 
            }
            
            { props.type === 'nonprogressive' &&
                <>
                    {nonproCourseOverview.map((data) => (
                        <CourseInfoItem key={data.id} item={data} type={props.type} course={props.course} isStarted={props.isStarted}/>
                    ))}

                    <CourseCategoryList categoryList={courseCategories} />
                    {/* <CourseTopicList topicList={courseTopics} />  */}
                </>
            }

            { (props.type === 'pro-category' || props.type === 'nonpro-category') &&
                <>
                    {coursesByCategory.map((data, index) => (
                        <CoursesByCategoryItem key={index} item={data} type={props.type} />
                    ))}
                </>
            }
        </>
    )
}