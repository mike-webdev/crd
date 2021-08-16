
import Image from 'next/image'


export default function FeaturedCoursesItems(props) {

    return (
        <div className="card">
            <img
                src={props.img}
                className="card-img-top"
                alt={props.alt}
            />
            {/* <Image  src={props.img}  layout='responsive' height="650" width="940" alt={props.alt} className="card-img-top"/> */}
            <h5 className="card-title text-center">{props.title}</h5>
            <div className="card-body">

                <small><strong><i className="fas fa-star colorMeOrange"></i> 4.9</strong></small><br />
                <ul className="card-description">
                    <li>Basic Information:</li>
                    <li>Duration:</li>
                    <li>Levels Applicable:</li>
                </ul>
            </div>
        </div>
    )
}