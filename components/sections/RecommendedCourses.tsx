import RecommendedCoursesItem from "../items/RecommendedCoursesItem"

export default function RecommededCourses() {
    return (
        <section className="recommended-courses space">
            <div className="container">
                <h2 className="text-center">RECOMMENDED COURSES</h2>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row g-4 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="want-to-learn" className="col-form-label"
                                >I want to learn:</label
                                >
                            </div>
                            <div className="col-sm-3">
                                <select id="want-to-learn" className="form-select">
                                    <option value="">Through different types of medium</option>
                                    <option value="">IELTS</option>
                                    <option value="">TOEIC</option>
                                    <option value="">Natural Speech</option>
                                </select>
                            </div>
                            <div className="col-auto">
                                <label htmlFor="learn-frequent" className="col-form-label"
                                >I can learn as frequent as:</label
                                >
                            </div>
                            <div className="col-sm-3">
                                <select id="learn-frequent" className="form-select">
                                    <option value="">2x a week</option>
                                    <option value="">3 x a week</option>
                                    <option value="">5 x a week</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommended-courses-nav">
                    <nav className="mt-4" aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#"
                                ><i className="fas fa-angle-double-left"></i
                                ></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#"
                                ><i className="fas fa-angle-double-right"></i
                                ></a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <RecommendedCoursesItem img="https://images.pexels.com/photos/434341/pexels-photo-434341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                        <RecommendedCoursesItem img="https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                        <RecommendedCoursesItem img="https://images.pexels.com/photos/448835/pexels-photo-448835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                    </div>
                    <div className="col-sm-4">
                    <RecommendedCoursesItem img="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                        <RecommendedCoursesItem img="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                        <RecommendedCoursesItem img="https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                    </div>
                    <div className="col-sm-4">
                    <RecommendedCoursesItem img="https://images.pexels.com/photos/3431444/pexels-photo-3431444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                        <RecommendedCoursesItem img="https://images.pexels.com/photos/3769708/pexels-photo-3769708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                        <RecommendedCoursesItem img="https://images.pexels.com/photos/5984614/pexels-photo-5984614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Course Title" rating="4.9" duration="5 weeks" level="5 above"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-6">
                        <div className="d-grid">
                            <button type="button" className="btn btn-primary">
                                Random Recommendation
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-grid">
                            <button type="button" className="btn btn-primary">
                                Recommend Based on Level
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}