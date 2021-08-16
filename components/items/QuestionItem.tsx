

export default function QuestionItem(props){
    return(
        <div className="row">
            <strong>{props.question}</strong>
            {props.children}
        <style jsx>
            {`
            .row {
                border: 1px solid black;
                margin-bottom: 15px;
            }
            `}
        </style>
        </div>
    )
}