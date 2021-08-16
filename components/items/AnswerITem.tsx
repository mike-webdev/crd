export default function AnswerItem(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name={props.name} defaultValue={props.val} id={props.id}/>
            <label className="form-check-label" htmlFor={props.id}>
                {props.val}
            </label>
        </div>
    )
}