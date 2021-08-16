
export default function TdItem(props) {
    return (
        <td contentEditable='true' suppressContentEditableWarning={true}>{props.value}</td>
    )
}

