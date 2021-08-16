
export default function StudentReviewItem() {
    
    return (
        <>
            <div className="row reviews">
                <div className="col-sm-1">
                    <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    alt="John Doe"
                    className="img-fluid"
                    />
                </div>
                <div className="col-sm-11">
                    <h4 className="fw-bold">
                    Your Name<small className="float-end">June 22, 2021</small>
                    </h4>
                    <span
                    >5.0 <i className="fas fa-star colorMeOrange"></i><i className="fas fa-star colorMeOrange"></i
                    ><i className="fas fa-star colorMeOrange"></i><i className="fas fa-star colorMeOrange"></i
                    ><i className="fas fa-star colorMeOrange"></i
                    ></span>
                </div>
                <p>
                    Nulla cursus elit at erat vulputate ultricies. Donec et sodales
                    ipsum. Etiam at dolor dapibus, lacinia lectus vitae, tincidunt
                    enim. Vivamus eu ultricies turpis. Curabitur et nulla ante.
                    Suspendisse aliquet in nulla quis venenatis. Sed luctus diam
                    enim, at pellentesque velit pulvinar nec. Maecenas id diam in
                    nisi euismod consequat
                </p>
            </div>
        </>
    )
}