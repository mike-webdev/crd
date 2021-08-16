import styles from "../../../styles/Lesson.module.scss";

export default function CourseWeekDescription(props) {

    return (

        <div className="box">
            <div className="row">
            <div className="col-sm-2">
                {
                    props.weekNumber &&
                    <div className="week">
                        <strong>week</strong>
                        <br />
                        <h1>{props.weekNumber}</h1>
                    </div>
                }
                
                {
                    props.left_content &&
                    <div className="week d-flex">
                        <div>
                            <strong>{props.left_content}</strong>
                        </div>
                    </div>
                }
                
                
            </div>
            <div className="col-sm-10">
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
            </div>
        </div>

    )
}