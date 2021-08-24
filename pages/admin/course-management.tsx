import Link from 'next/link'

export default function courseManagement(){
    return(
        <div className="container-fluid">
            <div className="row admin-row align-items-center mt-4">
                <h1 className="col">Course Management</h1>

                <span className="col-sm-3 text-end">
                    <Link href="/admin/course-creator"><a className="admin-btn">Course Creator</a></Link>
                </span>
            </div>
            
            <div className="row admin-row">
                <Link href="/admin/created-courses"><a>
                    <div className="course-container">
                        <h1>Created Courses</h1>
                    </div></a>
                </Link>

                <div className="course-container">
                    <h1>Private Courses</h1>
                </div>

                <div className="course-container">
                    <h1>Archived Courses</h1>
                </div>
            </div>
            

        </div>
    )
    
}