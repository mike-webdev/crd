

// export default function RecommendedCoursesItem(props) {
//     return (
//         <div className="d-flex">

//             <img
//                 src={props.img}
//                 alt=""
//                 className="me-3"
//             />

//             <div>
//                 <h5 className="fw-bold">{props.title}</h5>
//                 <small><strong><i className="fas fa-star colorMeOrange"></i> {props.rating}</strong></small><br />
//                 <small className="text-muted">Course Duration: {props.duration}</small><br />
//                 <small className="text-muted">Levels Applicable: {props.level}</small><br />
//             </div>
//         </div>
//     )
// }









import { useSession } from 'next-auth/client'
import Image from 'next/image'


export default function RecommendedCoursesItem(props) {

    const session = useSession();
    // console.log("Session",session)

    return (
        <div className="card">
            {/* <img
                src={props.img}
                className="card-img-top"
                alt={props.alt}
            /> */}
            <div className="img">
                <Image src={props.img} width={197} height={131} layout="responsive" placeholder="blur" blurDataURL={props.img} alt={props.alt} />
            </div>

            {/* <h5 className="card-title text-center">{props.title}</h5>
            <div className="card-body">

                <small><strong><i className="fas fa-star colorMeOrange"></i> 4.9</strong></small><br />
                <ul className="card-description">
                    <li>Basic Information:</li>
                    <li>Duration:</li>
                    <li>Levels Applicable:</li>
                </ul>
            </div> */}
            <h5 className="fw-bold courses-title">{props.course}
                {session[0] !== null ? (
                    <span className="float-end" style={{ fontSize: "26px" }}><i className="far fa-bookmark"></i></span>
                ) : <></>}
            </h5>
            <div style={{ padding: "8px 8px 0" }}>
                <small><strong><i className="fas fa-star colorMeOrange"></i> {props.rating} ({props.reviews} Reviews)</strong></small><br />
                {/* <small className="text-muted">Course Duration: {props.duration}</small><br />
        <small className="text-muted">Levels Applicable: {props.level}</small><br /> */}
                <p className="read-more">{props.description}</p>
            </div>
            <div className="bottom-desc">
                {props.type == 1 ? (
                    <div style={{ padding: "8px", borderTop: "4px solid #000" }}>
                        <small><span>Course 1 of <strong>IELTS Specialization</strong></span></small>
                    </div>
                ) : (
                    <></>
                )}
                <div style={{ borderTop: "4px solid #000", textAlign: "center" }}>
                    <div className="row p-2">
                        <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-calendar-alt"></i> {props.months}</small></div>
                        <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-clock"></i> {props.time}</small></div>
                        <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-check-circle"></i> {props.level}</small></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

