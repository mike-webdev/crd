import data from '../../sample_data/courses.json'

export default function RelatedCourses() {

    // sample data
    const courseRelatedList = data.courseRelatedList

    return (
        <>
            <h3>RELATED COURSES</h3>
            <div className="row">
                {courseRelatedList.map((data, index) => (
                        <div className="col-sm-4 clearfix" key={index}>
                            <div className="d-flex related-courses">
                                {/* <!-- Image --> */}
                                <img
                                    src={data.image}
                                    alt=""
                                    className="me-3"
                                />
                                {/* <!-- Body --> */}
                                <div>
                                    <h5 className="fw-bold">{data.title}</h5>
                                    <small><strong><i className="fas fa-star colorMeOrange"></i> {data.rate}</strong></small><br />
                                    <small className="text-muted">Basic information: {data.information}</small><br />
                                    <small className="text-muted">Duration: {data.duration}</small><br />
                                    <small className="text-muted">Applicable Levels: {data.level}</small>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}