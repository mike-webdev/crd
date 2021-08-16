import Pagination from  '../sections/Pagination'
import CourseCategoryItem from '../items/CourseCategoryItem'

export default function CourseCategoryList({ categoryList }) {
    return (
        <>
            <div className="box">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="week">
                            <strong>Course</strong>
                            <br />
                            <strong>Categories</strong>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <p>
                            <small>These are the list of categories you can choose upon starting the course. Lorem ipsum dolor....</small>
                        </p>

                        <div className="row">
                            <div className="col-sm-5">
                                <ul className="nav nav-pills mb-3" id="course-categories" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-featured-tab" data-bs-toggle="pill" data-bs-target="#featured" type="button" role="tab" aria-controls="pills-featured" aria-selected="true">Featured</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-new-tab" data-bs-toggle="pill" data-bs-target="#new" type="button" role="tab" aria-controls="pills-new" aria-selected="false">New</button>
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
                            <div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="pills-featured-tab">
                                <div className="row mb-4">
                                    {categoryList.map((data, index) => (
                                        <CourseCategoryItem key={index} category={data} />
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="new" role="tabpanel" aria-labelledby="pills-new-tab">
                                New Content Here...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}