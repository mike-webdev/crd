import Link from "next/link"
import Image from "next/image"

export default function CourseItem(props) {

    return (

        <Link href={props.link}>
            <a className="viewcourse">
                <div style={{ padding: "8px 8px 0" }}>
                    <Image src={props.img} width={200} height={150} layout="responsive" placeholder="blur" blurDataURL={props.img} alt="Course Image" />
                </div>
                <h5 className="fw-bold courses-title">{props.course}<span className="float-end" style={{fontSize: "26px"}}><i className="fas fa-bookmark"></i></span></h5>
                <div style={{ padding: "8px 8px 0" }}>
                    <small><strong><i className="fas fa-star colorMeOrange"></i> {props.rating} ({props.reviews} Reviews)</strong></small><br />
                    {/* <small className="text-muted">Course Duration: {props.duration}</small><br />
                    <small className="text-muted">Levels Applicable: {props.level}</small><br /> */}
                    <p className="read-more">{props.description}</p>
                </div>
                <div className="bottom-desc">
                    {props.type == 1 ? (
                        <div style={{ padding: "8px", borderTop: "4px solid #000" }}>
                            <span>Course 1 of <strong>IELTS Specialization</strong></span>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div style={{ borderTop: "4px solid #000" , textAlign: "center"}}>
                        <div className="row p-2">
                            <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-calendar-alt"></i> {props.months}</small></div>
                            <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-clock"></i> {props.time}</small></div>
                            <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-check-circle"></i> {props.level}</small></div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>


    )
}


