
export default function Pagination() {
    return (
        <>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#"
                    ><i className="fas fa-angle-double-left"></i
                    ></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                    <a className="page-link" href="#"
                    ><i className="fas fa-angle-double-right"></i
                    ></a>
                </li>
            </ul>
        </>
    )
}