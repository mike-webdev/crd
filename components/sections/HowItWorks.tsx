import HowItWorksText from "../items/HowItWorksText";
import HowItWorksImg from "../items/HowItWorksImg";



export default function HowItWorks() {
    return (
        <section className="how-it-works space4" id="howItWorks">
            <div className="container-fluid">
                <h2 className="text-center mb-4">HOW IT WORKS</h2>
                <br />

                <div className="row">
                    <div className="col-sm-6 order-last order-sm-first">
                        <HowItWorksText title="Choose a Course" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
                    justo eget vestibulum semper. Mauris mollis sed nunc sed imperdiet.
                    Phasellus varius, dolor sed sagittis luctus, eros sapien rutrum ipsum,
                    ut venenatis nisi est sit amet ex."/>
                    </div>
                    <div className="g-0 col-sm-6 order-first order-sm-last">
                        <HowItWorksImg
                            img="https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="g-0 col-sm-6">
                        <HowItWorksImg
                            img="https://images.pexels.com/photos/5984614/pexels-photo-5984614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                    </div>
                    <div className="g-0 col-sm-6">
                        <HowItWorksText title="Take Lessons, Quizzes, Homeworks" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
                    justo eget vestibulum semper. Mauris mollis sed nunc sed imperdiet.
                    Phasellus varius, dolor sed sagittis luctus, eros sapien rutrum ipsum,
                    ut venenatis nisi est sit amet ex."/>
                    </div>
                </div>
                <div className="row">
                    <div className="g-0 col-sm-6 order-last order-sm-first">
                        <HowItWorksText title="Ace Tests" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
                    justo eget vestibulum semper. Mauris mollis sed nunc sed imperdiet.
                    Phasellus varius, dolor sed sagittis luctus, eros sapien rutrum ipsum,
                    ut venenatis nisi est sit amet ex."/>
                    </div>
                    <div className="g-0 col-sm-6 order-first order-sm-last">
                        <HowItWorksImg
                            img="https://images.pexels.com/photos/5984609/pexels-photo-5984609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="g-0 col-sm-6">
                        <HowItWorksImg
                            img="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                    </div>
                    <div className="g-0 col-sm-6">
                        <HowItWorksText title="Talk to Fellow Learners" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
                    justo eget vestibulum semper. Mauris mollis sed nunc sed imperdiet.
                    Phasellus varius, dolor sed sagittis luctus, eros sapien rutrum ipsum,
                    ut venenatis nisi est sit amet ex."/>
                    </div>
                </div>
                <div className="row">
                    <div className="g-0 col-sm-6 order-last order-sm-first">
                        <HowItWorksText title="Achieve something new everyday" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
                    justo eget vestibulum semper. Mauris mollis sed nunc sed imperdiet.
                    Phasellus varius, dolor sed sagittis luctus, eros sapien rutrum ipsum,
                    ut venenatis nisi est sit amet ex."/>
                    </div>
                    <div className="g-0 col-sm-6  order-first order-sm-last">
                        <HowItWorksImg
                            img="https://images.pexels.com/photos/3747568/pexels-photo-3747568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}


