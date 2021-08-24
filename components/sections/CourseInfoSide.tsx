
export default function CourseInfoSide(props) {
    
    return (
        <>
            <div className="course-info-side">
                <h5 className="text-center">COURSE DETAILS</h5>
                <hr/>
                <p className="text-center">
                    <em>What will you learn?</em>
                </p>
                <ul style={{listStyleType: "none"}}>
                    {props.toLearn.map((data, index) => (
                        <li key={index}>
                            <strong>{data.title}</strong>
                            <ul className="list1">
                                {data.content.map((list, i) => (
                                    <li key={i}>{list}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <hr />
                <p className="text-center">
                    <em>Tags</em>
                </p>
                <p className="text-center">
                    {props.sideTags}
                </p>
                <hr />
                <p className="text-center">
                    <em>Important Dates</em>
                </p>
                <ul className="important-dates">
                    {props.importantDates.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}