import Sidebar from "../../components/layout/LessonSidebar";
import Tab from "../../components/admin/Tab";
import Image from "next/image";
import BannerImage from "../../public/images/Admin/specialization_creator.png";
import GeneratedRegularWeekly from '../../components/admin/GeneratedRegularWeekly/Preview';
import Link from 'next/link';
import MainDetails from "../../components/admin/MainDetails"; 
import SecondaryDetails from "../../components/admin/SecondaryDetails";
import CourseContentPrep from "../../components/admin/CourseContentPrep";

export default function specializationCreator(){
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
                            {"subtitle": "Main Details", "subtarget": "main-details", "addsub_class":"active"},
                            {"subtitle": "Secondary Details", "subtarget":"secondary-details"},
                        ]
                        },
                        {"title":"Specialization Content", "target":"none2",
                        "sub_list":[
                            {"subtitle": "Course Content Prep", "subtarget": "course-content-prep"},
                            {"subtitle": "Course Content", "subtarget":"course-content"},
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
                />

                <div className="col ml-2 mr-2 course-creator-tab">
                    
                    <Tab
                        id="main-details"
                        is_active="1"
                        title=""
                    >
                        <MainDetails/>
                    </Tab>

                    <Tab
                        id="secondary-details"
                        title=""
                    >
                        <SecondaryDetails/>
                    </Tab>

                    <Tab
                        id="course-content-prep"
                        title=""
                    >
                        <CourseContentPrep/>
                    </Tab>

                    <Tab
                        id="course-content"
                        title=""
                    >
                        <GeneratedRegularWeekly/>
                    </Tab>

                    <Tab
                        id="certificate"
                        title=""
                    >
                        certificate 
                    </Tab>

                    <Tab
                        id="points-allocation"
                        title=""
                    >
                        points-allocation 
                    </Tab>

                    <Tab
                        id="specialization-summary"
                        title=""
                    >
                        {/* specialization-summary  */}
                        
                    </Tab>


                </div>

            </div>
            

            

        </div>
    )
    
}