import { DateFullName } from '../../../public/scripts/utils'
interface Timeline {
    date: string,
    content: string,
    icon: string
}
interface IProps {
    timeline: Array<Timeline>,
    progress: number
}
const Timelines: React.FunctionComponent<IProps> = (props) => {

    const timelineDetails = () => (
        props.timeline.map((value, index) => {
            return (

                <div className="timeline" key={value.date}>
                    <a href="" className="timeline-content">
                        <div className="timeline-icon">
                            <i className={value.icon}></i>
                        </div>
                        <div className="inner-content timelines">
                            <div className="timeline-count">{index + 1}</div>
                            <p>{DateFullName(value.date)} : {value.content}</p>
                        </div>
                    </a>
                </div>

            )
        })
    )
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="row progress-container mb-4">
                        <div className="col-sm-4">
                            <h6 className="float-end">Current Course Progression:</h6>
                        </div>
                        <div className="col-sm-8">
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={props.progress}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    {props.progress}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="col-sm-12">
                    <div className="main-timeline">
                        {(props.timeline.length === 0) ? (<div>NO COURSE TAKEN</div>)
                            :

                            (
                                timelineDetails()
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Timelines;