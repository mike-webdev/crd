interface CourseGoal{
    id: number,
    goal: string,
    progressDetails: string,
    percentage: number
}

interface Bookmark{
    id: number,
    lesson_title: string
}
type Note =Bookmark

interface FinishedTopics{
    id: number,
    category: string,
    topic: string
}
interface IProps{
    goals: Array<CourseGoal>,
    bookmarks: Array<Bookmark>,
    notes: Array<Note>
    finishedTopics ?: Array<FinishedTopics>
}

const OtherCourseInfo:React.FunctionComponent<IProps> = (props) =>{
    const displayGoals = () =>(
        props.goals.map((value)=>{
            return(
                <div className="my-course-goals-desc" key={value.id}>
                    <div className="row">
                        <div className="col-sm-3">
                        {value.goal}
                        </div>
                        <div className="col-sm-9">
                        <div className="progress">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={value.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            >
                            {value.progressDetails}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        })
    )

    const displayBookmarks = () =>(
        props.bookmarks.map((value)=>{
            return(
                <div className="my-bookmarks-desc" key={value.id}>
                {value.lesson_title}
                <button
                type="button"
                className="float-end fw-bold button-daLink"
                data-bs-toggle="modal"
                data-bs-target="#idhere"
                >
                go to bookmark
                </button>
                </div>
            )
        })
    )

    const displayNotes = () =>(
        props.notes.map((value)=>{
            return(
                <div className="my-notes-desc" key={value.id}>
                {value.lesson_title}
                <button
                type="button"
                className="float-end fw-bold button-daLink"
                data-bs-toggle="modal"
                data-bs-target="#idhere"
                >
                view notes
                </button>
                </div>
            )
        })
    )

    const displayFinishedTopics = () =>(
        props.finishedTopics.map((value)=>{
            return(
                <div className="my-finished-topics" key={value.id}>
                    <div className="my-bookmarks-title">
                        <h6>{value.category}</h6>
                    </div>
                    <div className="my-notes-desc" >
                    {value.topic}
                    <button
                    type="button"
                    className="float-end fw-bold button-daLink"
                    data-bs-toggle="modal"
                    data-bs-target="#idhere"
                    >
                    revisit
                    </button>
                    </div>
                </div>
            )
        })
    )
    //console.log((props.finishedTopics === undefined)?true:false);
    return(
        <>
        <div className="row mb-4">
            <div className="col-sm-12">
                <div className="my-course-goals">
                    <div className="my-course-goals-title">
                    <h5>
                        My Course Goals
                        <button
                        type="button"
                        className="float-end fw-bold button-daLink"
                        data-bs-toggle="modal"
                        data-bs-target="#coursegoal"
                        >
                        set course goal
                        </button>
                    </h5>
                    </div>
                    {(props.goals.length === 0 ? (
                        <div className="my-course-goals-desc">
                        No set goals at the moment. Set a course goal.
                        </div>
                    ):(
                        displayGoals()
                    ))}
                </div>
            </div>
        </div>
        <div className="box mb-4">
            <div className="row">
                <div className="col-sm-12">
                    <div className="my-bookmarks">
                        <div className="my-bookmarks-title">
                        <h5>
                            My Bookmarks
                        </h5>
                        </div>
                        {(props.bookmarks.length === 0 ? (
                        <div className="my-course-goals-desc">
                            You have no bookmarks
                        </div>
                        ):(
                            displayBookmarks()
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="box mb-4">
            <div className="row">
                <div className="col-sm-12">
                    <div className="my-notes">
                        <div className="my-notes-title">
                        <h5>
                            My Notes
                        </h5>
                        </div>
                        {(props.bookmarks.length === 0 ? (
                        <div className="my-course-goals-desc">
                            You have no bookmarks
                        </div>
                        ):(
                            displayNotes()
                        ))}

                    </div>
                </div>
            </div>
        </div>

        {(props.finishedTopics === undefined) ? "" : (
            <div className="box mb-4">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="my-notes">
                            <div className="my-notes-title">
                            <h5>
                                Finished Categories / Topics
                            </h5>
                            </div>
                            {displayFinishedTopics()}
                        </div>
                    </div>
                </div>
            </div>
        )
        }


        </>
    )
}
export default OtherCourseInfo;