import Pagination from  '../sections/Pagination'
import CourseTopicItem from '../items/CourseTopicItem'

export default function CourseTopicList({ topicList }) {
    return (
        <>
            <div className="box">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="week">
                            <strong>Course</strong>
                            <br />
                            <strong>Topics</strong>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <p>
                            <small>These are the list of topics you can choose under the categories. Lorem ipsum dolor....</small>
                        </p>

                        <div className="row">
                            <div className="col-sm-5">
                                <ul className="nav nav-pills mb-3" id="course-topics" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-featured2-tab" data-bs-toggle="pill" data-bs-target="#featured2" type="button" role="tab" aria-controls="pills-featured2" aria-selected="true">Featured</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-new-tab2" data-bs-toggle="pill" data-bs-target="#new2" type="button" role="tab" aria-controls="pills-new2" aria-selected="false">New</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-7">
                                <div className="custom-nav d-flex justify-content-end">
                                    <nav aria-label="Page navigation example">
                                        <Pagination />
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="featured2" role="tabpanel" aria-labelledby="pills-featured2-tab">
                                <div className="row mb-4">
                                    {topicList.map((data, index) => (
                                        <CourseTopicItem key={index} topic={data} />
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="new2" role="tabpanel" aria-labelledby="pills-new2-tab">
                                New Content Here...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}