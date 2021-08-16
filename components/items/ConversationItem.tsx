
export default function ConversationItem(props) {
  return (
    <div className="input-group mb-4 cafe">
      <span className="input-group-text">{props.name}</span>
      <input type="text" className="form-control" defaultValue={props.value} placeholder="Type a dialogue line here..."/>
    </div>
  );
}
