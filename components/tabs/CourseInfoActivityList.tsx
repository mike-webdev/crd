import CourseInfoActivityItem from '../items/CourseInfoActivityItem'

export default function CourseInfoActivityList({ activity }) {
    return (
        <>
            <div className="accordion accordion-flush" id={`accordion${activity.id}`} key={activity.id}>          
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`accordion${activity.id}-head`}>
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#accordion${activity.id}-collapse${activity.id}`}
                            aria-expanded="false"
                            aria-controls={`accordion${activity.id}-collapse${activity.id}`}
                        >
                            {activity.title}
                        </button>
                    </h2>
                    
                    <div
                    id={`accordion${activity.id}-collapse${activity.id}`} 
                    className="accordion-collapse collapse"
                    aria-labelledby={`accordion${activity.id}-head1`}
                    data-bs-parent={`#accordion${activity.id}`}
                    
                    >
                        {activity.content.map((cont, index) => (
                            <CourseInfoActivityItem key={index} content={cont} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}