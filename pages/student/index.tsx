
import { useState, useContext, useEffect } from "react";
import MyCourses from "../../components/sections/MyCourses";
import RecommededCourses from "../../components/sections/RecommendedCourses";
import FeaturedCourses from "../../components/sections/FeaturedCourses";
import FeaturedRealtimeReviews from "../../components/sections/FeaturedRealtimeReviews";
import AllCourses from "../../components/sections/AllCourses";
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from "next/router";

export default function StudentDashboard() {
  const [session, loading] = useSession();
  const router = useRouter();
  // const { state } = useContext(Context);
  // const { user } = state;


  //   return null
  useEffect(() => {
    if (session === null) {
      router.push("/login")
    }
   
  }, [session])



  return (
    // <pre>{JSON.stringify(user, null, 4)}</pre>
    // <UserRoute>
    <>
      <MyCourses />
      <RecommededCourses />
      <FeaturedCourses />
      <FeaturedRealtimeReviews />
      <AllCourses />
    </>
    // </UserRoute> 
  );
}
