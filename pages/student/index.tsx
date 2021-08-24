import { useState, useContext, useEffect } from "react";
import MyCourses from "../../components/sections/MyCourses";
import RecommededCourses from "../../components/sections/RecommendedCourses";
import FeaturedCourses from "../../components/sections/FeaturedCourses";
import FeaturedRealtimeReviews from "../../components/sections/FeaturedRealtimeReviews";
import AllCourses from "../../components/sections/AllCourses";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import AccessDenied from "../../components/sections/AccessDenied";

export default function StudentDashboard() {
  const [session, loading] = useSession();
  const router = useRouter();

  //   return null
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/login");
  //   }
  // }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied/>;
  } 
  // else if(session.user["password"] === null){
  //   router.push("/update-user-info");
  // }



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
