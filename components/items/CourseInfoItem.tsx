import Link from 'next/link'
import CourseInfoActivityList from '../tabs/CourseInfoActivityList'

export default function CourseInfoItem({ item, type, course, isStarted }) {
    let path_link = ""

    if (course === "Mintography") {
        path_link = "/mintography"
    } else {
        path_link = "/minttube"
    }

    return (
        <>
            <div className="box" key={item.id}>
                <div className="row">
                    <div className="col-sm-2">
                        <div className="week">
                            {type === "progressive" ? (
                                <>
                                    <strong>Chapter</strong>
                                    <br />
                                    <h1>{item.chapter}</h1>
                                </>
                            ) : (
                                <>
                                    {isStarted === "true" ? (
                                        <>
                                            {/* // <Link href="/course/lessonoutlook2"> */}
                                            <Link href={path_link}>
                                                <a style={{textDecoration: "none", color: "inherit"}}>
                                                    <strong>Course </strong>
                                                    <br />
                                                    <strong>Overview</strong>
                                                </a>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <strong>Selection </strong>
                                            <br />
                                            <strong>Overview</strong>
                                        </>
                                    )}
                                </>
                            )}
                           
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <label className="text-muted">{item.duration}</label>
                        <p>
                            {isStarted === "false" ? (
                                <>
                                    <strong>{item.chapter_title}</strong>
                                </>
                            ) : (
                                <>
                                    <Link href="/course/lessonoutlook">
                                        <a className="button-lessonLink w-100"><strong>{item.chapter_title}</strong></a>
                                    </Link>
                                </>
                            )}
                            
                            <br />
                            <small>{item.intro}</small>
                        </p>

                        {item.activity.map((act) => (
                            <CourseInfoActivityList key={act.id} activity={act} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}