interface IProps{
    modalName: string,
    modalTitle: string,
    content: any
}

const Modal: React.FunctionComponent<IProps> = (props) =>{
    return(
        <div className={"modal fade "+props.modalName}  id={props.modalName} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{props.modalTitle}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {props.content}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Okay</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;