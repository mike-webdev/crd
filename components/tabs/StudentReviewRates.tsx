
export default function StudentReviewRates() {
    
    return (
        <>
            <div className="col-sm-4">
                <div className="text-center">
                <h1><i className="fas fa-star colorMeOrange"></i> 4.9</h1>
                <p><strong>(150 Reviews)</strong></p>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="row ratings">
                    <div className="col-sm-1">
                        <div className="float-end">5</div>
                    </div>
                    <div className="col-sm-11">
                        <div className="progress">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{width: "85%"}}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                        </div>
                    </div>
                </div>
                <div className="row ratings">
                    <div className="col-sm-1">
                        <div className="float-end">4</div>
                    </div>
                    <div className="col-sm-11">
                        <div className="progress">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{width: "75%"}}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                        </div>
                    </div>
                </div>
                <div className="row ratings">
                    <div className="col-sm-1">
                        <div className="float-end">3</div>
                    </div>
                    <div className="col-sm-11">
                        <div className="progress">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{width: "10%"}}
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                        </div>
                    </div>
                </div>
                <div className="row ratings">
                    <div className="col-sm-1">
                        <div className="float-end">2</div>
                    </div>
                    <div className="col-sm-11">
                        <div className="progress">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{width: "0%"}}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                        </div>
                    </div>
                </div>
                <div className="row ratings">
                    <div className="col-sm-1">
                        <div className="float-end">1</div>
                    </div>
                    <div className="col-sm-11">
                        <div className="progress">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{width: "0%"}}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}