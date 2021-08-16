

export default function RecommendedCoursesItem(props) {
    return (
        <div className="d-flex">

            <img
                src={props.img}
                alt=""
                className="me-3"
            />

            <div>
                <h5 className="fw-bold">{props.title}</h5>
                <small><strong><i className="fas fa-star colorMeOrange"></i> {props.rating}</strong></small><br />
                <small className="text-muted">Course Duration: {props.duration}</small><br />
                <small className="text-muted">Levels Applicable: {props.level}</small><br />
            </div>
        </div>
    )
}