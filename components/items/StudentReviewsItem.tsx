import styles from "../../styles/StudentReviews.module.scss";


export default function StudentReviewsItem(props) {
    return (
        <div className="card">
            <img
                src={props.img}
                className="card-img-top"
                alt="Course Image"
            />
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

