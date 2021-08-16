import Link from "next/link"
import Image from "next/image"

export default function CourseItem(props) {

    return (

            <Link href={props.link}>
            <a className="viewcourse">
                <Image src={props.img} width={200} height={150} layout="responsive" alt="Course Image" />

                <div>
                    <h5 className="fw-bold mt-2">{props.course}</h5>
                    <small><strong><i className="fas fa-star colorMeOrange"></i> {props.rating}</strong></small><br />
                    <small className="text-muted">Course Duration: {props.duration}</small><br />
                    <small className="text-muted">Levels Applicable: {props.level}</small><br />
                </div>
            </a>
            </Link>


    )
}


