import Link from "next/link"

export default function CourseOption(props) {

    return (
        <li><Link href="#"><a className="dropdown-item" href="#">{props.option}</a></Link></li>
    )
}


