import Banner from "../components/sections/Banner"
import Features from "../components/sections/Features"
import FeaturedCourses from "../components/sections/FeaturedCourses"
import LearnerOutcomes from "../components/sections/LearnerOutcomes"
import HowItWorks from "../components/sections/HowItWorks"
import StudentReviews from "../components/sections/StudentReviews"
import AllCourses from "../components/sections/AllCourses"
import BindingBox from "../components/functions/nonprogressive/BindingBox" 
import Video from "../components/functions/nonprogressive/Video"
import WelcomeCourseCreator from "../components/admin/Card"
import CourseContent from "../components/admin/CourseContent"


export default function Home() {
  
  return (
    <>
    {/* <SpecializationPlan/> */}
    {/* <WelcomeCourseCreator/> */}
    {/* <CourseContent/> */}
    {/* <Video/> */}
    <Banner/>
    <Features/>
    <FeaturedCourses/>
    <LearnerOutcomes/>
    <HowItWorks/>
    <StudentReviews/>
    <AllCourses/>
    </>
  )
}
