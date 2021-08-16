const MyReview = () =>{
    return(
        <div className="row">
            <div className="col-sm-7">
                <h3>MY REVIEW</h3>
                <p>
                General Star Rating:
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </p>
                <label className="fw-bold">General Review:</label>
                <button className="btn btn-dark float-end mb-2"> edit review</button>
                <textarea
                id="general-review"
                className="form-control"
                rows={10}
                defaultValue="I really like the teachers! The course is also well thought-out and I enjoyed the activities. However as with anything in the world, there are rooms for improvement. "
                >
                </textarea>
            </div>
            <div className="col-sm-5">
                <h3>Course Star Ratings: </h3>
                
                <div className="course-start-ratings">
                <label
                    ><em
                    >Is the course enjoyable for you? Is it engaging?</em
                    ></label
                >
                <p>
                    Rate the course:
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </p>
                </div>
                <div className="course-start-ratings">
                <label
                    ><em>Are the lessons intuitive? Well-planned?</em></label
                >
                <p>
                    Rate the course:
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </p>
                </div>
                <div className="course-start-ratings">
                <label
                    ><em
                    >Are the activities exciting? Did you learn something?</em
                    ></label
                >
                <p>
                    Rate the course:
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </p>
                </div>
                <div className="course-start-ratings">
                <label
                    ><em
                    >Are the quizzes/tests good? Related to the course?</em
                    ></label
                >
                <p>
                    Rate the course:
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </p>
                </div>
            </div>
        </div>
    )
}
export default MyReview;