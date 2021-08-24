import AccordionItem from "../../items/AccordionItem";

export default function Overview(props) {

    // sample data
    const overviewList = [
        {
            id: 1,
            title: "Introduction",
            items: [
                {"title":"Learning Goals", "link":"", "minutes": "1", "is_finished":"1"},
                {"title":"Cultural Notes", "link":"", "minutes": "3", "is_finished":"1"}
            ],
            items2: [
                {"title":"Learning Goals, Key Vocabulary and Key Expressions", "link":"", "minutes": "1", "is_finished":"1"},
                {"title":"Additional Resources", "link":"", "minutes": "3", "is_finished":"1"}
            ],
            isFinished: "1"
        },
        {
            id: 2,
            title: "Student Praparation",
            items: [
                {"title":"Warmp-up (Mini game)", "link":"", "minutes": "3", "is_finished":"1"},
                {"title":"Lesson Preview: Key Vocabulary", "link":"", "minutes": "3", "is_finished":"1"},
                {"title":"Lesson Preview: Key Expressions", "link":"", "minutes": "3", "is_finished":"1"}
            ],
            items2: [
                {"title":"Warm-up (Mini game)", "link":"", "minutes": "3", "is_finished":"1"},
                {"title":"Lesson Preview: Vocabulary and Expressions", "link":"", "minutes": "3", "is_finished":"1"}
            ],
            isFinished: "1"
        },
        {
            id: 3,
            title: "Guided Practice",
            items: [
                {"title":"Vocabulary Check", "link":"", "minutes": "5", "is_finished":"1"},
                {"title":"Expressions Check", "link":"", "minutes": "5", "is_finished":"1"},
                {"title":"Listening Practice", "link":"", "minutes": "5", "is_finished":"1"},
                {"title":"Speaking Practice", "link":"", "minutes": "5", "is_finished":""}
            ],
            items2: [
                {"title":"Vocabulary Check", "link":"", "minutes": "5", "is_finished":"1"},
                {"title":"Expression Check", "link":"", "minutes": "5", "is_finished":"1"},
                {"title":"Storytelling", "link":"", "minutes": "5", "is_finished":"1"},
                {"title":"Guide Question Check", "link":"", "minutes": "5", "is_finished":""},
                {"title":"Discussion", "link":"", "minutes": "5", "is_finished":""}
            ],
            isFinished: "0"
        }, 
        {
            id: 4,
            title: "Student Review",
            items: [
                {"title":"Homework (Deadline: June 8) ", "link":"", "minutes": "5", "is_finished":""},
                {"title":"Quiz", "link":"", "minutes": "5", "is_finished":""}
            ],
            items2: [
                {"title":"Homework (Deadline: June 8)", "link":"", "minutes": "5", "is_finished":""},
                {"title":"Quiz", "link":"", "minutes": "5", "is_finished":""}
            ],
            isFinished: "0"
        }
    ]

    return (
        <>
            <div className="card mb-3" style={{maxWidth: "100%"}}>
                <div className="row g-0">
                    <div className="col-md-3 text-center py-2 px-2" style={{backgroundColor: "#000"}}>
                        <h4 className="text-light mt-4">Course Overview</h4>
                    </div>
                    <div className="col-md-9 py-2 px-2">
                        <div className="card-body">
                            <h5>
                                <strong>
                                    {props.course === "Minttube" ? (<>Humor</>) : (<>City</>)} (Category)
                                </strong>    
                            </h5>
                            <p>
                                <i>
                                    {props.course === "Minttube" ? (<>How to Prevent the Spread of Germs - The Office US</>) : (<>Cafe</>)} (Topic):
                                </i>
                            </p>
                            <p>In this lesson...</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {overviewList.map((data, index) => (

                    <div className="box mt-4" key={index}>
                        <div className="accordion accordion-flush" id={`accordion${data.id}`}>
                            <AccordionItem 
                                id={`accordion1-head${data.id}`} 
                                title={data.title} 
                                items_id={`accordion${data.id}-collapse${data.id}`} 
                                items={props.course === "Minttube" ? data.items : data.items2} 
                                is_finished={data.isFinished}
                            />
                        </div>
                    </div>
       
            ))}
        </>
    )
}