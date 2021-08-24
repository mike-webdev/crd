import Link from 'next/link'

export default function CourseDetails(props) {
    let redirect = (props.type === 'progressive') ? '/student/mainspecialization' : '/student/maincategory'

    return (
        <>
            <section className="course-details space2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            Course Timeline:<br />
                            <strong>{props.courseTimeLine}</strong>
                        </div>
                        <div className="col-sm-2">
                            Applicable Level:<br />
                            <strong>{props.applicableLevel}</strong>
                        </div>
                            <div className="col-sm-2">
                            Course Type:<br />
                            <strong>{props.courseType}</strong>
                        </div>
                        <div className="col-sm-2">
                            {props.course === "IELTS" ? ('Specialization:') : ( 'Main Category:')}
                            
                            <br />
                            <strong>
                                <Link href={redirect}>
                                    <a className="button-lessonLink">
                                        {props.mainCategory}
                                    </a>
                                </Link>
                            </strong>
                        </div>
                        <div className="col-sm-4">
                            Skills needed for this course:<br />
                            <strong>{props.toKnow}</strong>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}