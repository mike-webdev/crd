
export default function CourseInfoActivityItem({ content }) {
    return (
        <>
            <div className="accordion-body">
                <ul className="chapter-content">
                    <li>
                        {content.name}
                        <span className="float-end">
                            {content.time}
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}