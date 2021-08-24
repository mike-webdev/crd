import Image from 'next/image'
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
                        <div className="related-courses">
                            <div style={{ padding: "8px 8px 0" }}>
                                <Image src={data.image} width={200} height={150} layout="responsive" placeholder="blur" blurDataURL={data.image} alt="Course Image" />
                            </div>
                            <h5 className="fw-bold courses-title">{data.title}<span className="float-end" style={{fontSize: "26px"}}><i className="fas fa-bookmark"></i></span></h5>
                            <div style={{ padding: "8px 8px 0" }}>
                                <small><strong><i className="fas fa-star colorMeOrange"></i> {data.rate} (100 Reviews)</strong></small><br />
                                <p className="read-more">{data.information}</p>
                            </div>
                            <div className="bottom-desc">
                                {/* {props.type == 1 ? (
                                    <div style={{ padding: "8px", borderTop: "4px solid #000" }}>
                                        <span>Course 1 of <strong>IELTS Specialization</strong></span>
                                    </div>
                                ) : (
                                    <></>
                                )} */}
                                <div style={{ borderTop: "4px solid #000" , textAlign: "center"}}>
                                    <div className="row p-2">
                                        <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-calendar-alt"></i> {data.duration}</small></div>
                                        <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-clock"></i> {data.time}</small></div>
                                        <div className="col-md-12 col-lg-4 g-0"><small><i className="fas fa-check-circle"></i> {data.level}</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .courses-title{
                    padding: 10px;
                    background: #808080;
                    color: #fff;
                }
            `}</style>
        </>
    )
}