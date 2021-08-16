import Link from 'next/link'

export default function CoursesByCategoryItem({ item, type }) {
    let redirect = (type === 'pro-category') ? '/student/progressive' : '/student/nonprogressive'

    return (
        <>
            <div className="box">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="week">
                            <strong>IELTS</strong>
                            <br />
                            { type === 'pro-category' && (<h3>{item.course}</h3>) }
                            { type === 'nonpro-category' && (<p>{item.course}</p>) }
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <label className="text-muted"
                        >Course Timeline: {item.timeline} </label>
                        <br />
                        <label className="fw-bold mb-2"><i className="fas fa-star colorMeOrange"></i> 4.9 ({item.reviews})</label>
                        <p>
                            <small>{item.content}</small>
                        </p>
                        <Link href={redirect}>
                            <a className="button-lessonLink float-end fw-bold btn btn-dark text-light">Go to Course</a>
                        </Link>                                   
                    </div>
                </div>
            </div>
        </>
    )
}