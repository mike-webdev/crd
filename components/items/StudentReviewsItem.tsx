
import Image from 'next/image'

export default function StudentReviewsItem(props) {
    return (
        <div className="card">
             <Image src={props.img} width={296.4} height={197.53} layout="responsive" placeholder="blur" blurDataURL={props.img} alt={props.alt} />
            <div className="card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <small><strong><i className="fas fa-star colorMeOrange"></i>{props.rating} | {props.course}</strong></small>
                <p>
                    {props.review}
                </p>
            </div>
        </div>
    )
}

