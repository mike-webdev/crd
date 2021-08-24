import StudentReviewRates from './StudentReviewRates'
import StudentReviewSort from './StudentReviewSort'
import StudentReviewList from './StudentReviewList'
import Pagination from '../sections/Pagination'

export default function StudentReviews() {
    return (
        <>
            <h3>STUDENT REVIEWS</h3>

            <div className="row rates">
                <StudentReviewRates />
            </div>

            <div className="row mt-4 mb-4">
                <StudentReviewSort />
            </div>

            <h4>150 Reviews</h4> 
            <StudentReviewList />

            <div className="recommended-courses-nav d-flex justify-content-end">
                <nav className="mt-4" aria-label="Page navigation example">
                    <Pagination />
                </nav>
            </div>
        </>
    )
}