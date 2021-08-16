
export default function StudentReviewSort() {
    
    return (
        <>
            <div className="col-sm-12">
                    <div className="row g-4 sort">
                        <div className="col-auto">
                            <label className="col-form-label">Sort by:</label>
                        </div>
                        <div className="col-sm-3">
                            <select id="" className="form-select">
                            <option value="" disabled>Rating</option>
                            <option value="">5 stars</option>
                            <option value="">4 stars</option>
                            <option value="">3 stars</option>
                            <option value="">2 stars</option>
                            <option value="">1 star</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-sm-3">
                            <select id="" className="form-select">
                            <option value="" disabled>Rating Type</option>
                            <option value="">Featured</option>
                            <option value="">Item3</option>
                            </select>
                        </div>
                    </div>
            </div>
        </>
    )
}