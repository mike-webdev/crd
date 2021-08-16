import Sidebar from "../../components/layout/LessonSidebar";
import Tab from "../../components/admin/Tab";
import Image from "next/image";
import BannerImage from "../../public/images/Admin/specialization_creator.png";
import Link from 'next/link';
import MainDetails from "../../components/admin/MainDetails";
import SecondaryDetails from "../../components/admin/SecondaryDetails";
import CourseContentPrep from "../../components/admin/CourseContentPrep";
import CourseContent from "../../components/admin/CourseContent";

export default function ContentOfCourse(){
    return(
        <div className="container-fluid mb-4 admin-row">
            <div className="row mt-4 mb-2">
                <h1 className="col-sm-6">Course Creator</h1>
                <div className="col-sm-6 text-end">
                    <Link href="/admin/course-management" >
                        <a className="admin-btn">Course Management</a>
                    </Link>
                </div>
            </div>

            <div className="creator-banner row align-items-center text-center">
                <div className="cards-image col-sm-3">
                    <Image
                    src={BannerImage}
                    layout="responsive"
                    placeholder="blur"
                    alt="Banner Image"
                    />
                </div>
                <div className="banner-title col">
                    <h2>Specialization Creator</h2>
                </div>
            </div>

            <div className="row">
                <Sidebar
                    type="admin"
                    tab_list={[
                        {"title":"Specialization Plan", "target":"none1",
                        "sub_list":[
                            {"subtitle": "Main Details", "subtarget": "main-details"},
                            {"subtitle": "Secondary Details", "subtarget":"secondary-details"},
                        ]
                        },
                        {"title":"Specialization Content", "target":"none2",
                        "sub_list":[
                            {"subtitle": "Course Content Prep", "subtarget": "course-content-prep"},
                            {"subtitle": "Course Content", "subtarget":"course-content", "addsub_class":"active"},
                        ]
                        },
                        {"title":"Specialization Publishing", "target":"none3",
                        "sub_list":[
                            {"subtitle": "Certificate", "subtarget": "certificate"},
                            {"subtitle": "Points Allocation", "subtarget":"points-allocation"},
                            {"subtitle": "Specialization Summary", "subtarget":"specialization-summary"},
                        ]
                        },
                    ]}
                    disable= "disabled"
                />

                <div className="col ml-2 mr-2 course-creator-tab">
                    
                    <Tab
                        id="main-details"
                        title=""
                    >
                    </Tab>

                    <Tab
                        id="secondary-details"
                        title=""
                    >
                    </Tab>

                    <Tab
                        id="course-content-prep"
                        title=""
                    >
                    </Tab>

                    <Tab
                        id="course-content"
                        title=""
                        is_active="1"
                    >
                        
                        <div className="row">
                            <div className="col-4">
                            <Link href="/admin/inside-course" passHref><button className="btn btn-link w-100">RETURN TO LIST OF COURSES</button></Link>
                            </div>
                        </div>
                        
                        <CourseContent/>
                    </Tab>

                    <Tab
                        id="certificate"
                        title=""
                    >
                    </Tab>

                    <Tab
                        id="points-allocation"
                        title=""
                    >
                    </Tab>

                    <Tab
                        id="specialization-summary"
                        title=""
                    >
                        
                    </Tab>


                </div>

            </div>
            

            

        </div>
    )
    
}