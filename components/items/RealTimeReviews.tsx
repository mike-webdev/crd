
export default function RealTimeReviews(props) {
    return (
        <div className="d-flex r-reviews">

            <img
                src={props.img}
                alt="John Doe"
                className="me-3"
            />

            <div className="desc">
                <h5 className="fw-bold">
                    {props.name}
                    <small className="text-muted float-end">{props.time}</small>
                </h5>
                <small
                ><strong
                ><i className="fas fa-star"></i> {props.rating} |{props.course}</strong
                    ></small
                >
                <p>{props.review}</p>
            </div>
        </div>
    )
}