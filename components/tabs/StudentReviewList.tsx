import StudentReviewItem from './StudentReviewItem'

export default function StudentReviewList() {

    return (
        <>
            {[...Array(4)].map((e, i) => {
                return (
                    <StudentReviewItem key={i} />
                )
            })}
        </>
    )
}