export default function TextBox(props: any) {
    return (


        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.question}</label>
            <textarea className="form-control" id={props.id} rows={3} placeholder="Type your answer here" defaultValue={props.answer}></textarea>

        <style jsx>{`
        .form-label {
            width: 100%;
            background: #dedede;
            margin-bottom: 0;
            padding: 5px 12px;
        }
      `}</style>
        </div>



    )
}