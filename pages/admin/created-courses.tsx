import {useEffect} from 'react'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client';
import prisma from "../../lib/prisma";
import superjson from 'superjson';

export async function getServerSideProps(){
    const courses = await prisma.course_tbl.findMany({
        include: {
            specialization_details_tbl: {
                select:{
                    id: true,
                    title: true,
                    summary: true,
                    logo: true,
                }
            },
            free_standing_tbl: {
                select:{
                    id: true,
                    title: true,
                    summary: true,
                    logo: true,
                }
            },
         }
    });

    const {json, meta} = superjson.serialize(courses);
    return{
        props: {
            initialCourses : json
        }
    }
}

export default function courseManagement({initialCourses}){

    return(
        <div className="container-fluid">
            <div className="row admin-row align-items-center mt-4">
                <h1 className="col">Created Course</h1>

                <span className="col-sm-3 text-end">
                    <Link href="/admin/course-creator"><a className="admin-btn">Create New Course</a></Link>
                </span>
            </div>
            
            <div className="row admin-row">
                {initialCourses.map(({ course_id, course_type, specialization_details_tbl, free_standing_tbl }) => {
                    return(
                    <>
                    {
                        specialization_details_tbl.map(({ id, title, summary, logo }) => {
                            return(
                            <div className="course-container" key={id}>
                                <h1>{title}</h1>
                            </div>
                            )
                        })
                    }
                    {
                        free_standing_tbl.map(({ id, title, summary, logo }) => {
                            return(
                            <div className="course-container" key={id}>
                                <h1>{title}</h1>
                            </div>
                            )
                        })
                    }
                    </>
                    )
                }
                )}
                
            </div>
            

        </div>
    )
    
}
