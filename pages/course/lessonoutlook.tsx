import Sidebar from "../../components/layout/LessonSidebar";
import CourseWeekDescription from "../../components/sections/Course/CourseWeekDescription";
import AccordionItem from "../../components/items/AccordionItem";

// import { withTranslation } from 'next-i18next'

const LessonOutlook = ({t}) => {
    return (
<div className="container-fluid">
    <div className="row">
        <div className="container-fluid">
            <div className="row">
                    <Sidebar 
                        tab_list={[
                                    {"title":"Week 1", "target":"v-pills-week1", "add_class": "", "sub_list":[]},
                                    {"title":"Week 2", "target":"v-pills-week2", "add_class": "active", "sub_list":[]},
                                    {"title":"Week 3", "target":"v-pills-week3", "add_class": "", "sub_list":[]},
                                    {"title":"Week 4", "target":"v-pills-week4", "add_class": "", "sub_list":[]},
                                    {"title":"Week 5", "target":"v-pills-week5", "add_class": "", "sub_list":[]},
                                    {"title":"Forums", "target":"v-pills-forums", "add_class": "", "sub_list":[]},
                                    {"title":"Additional Resources", "target":"v-pills-ar", "add_class": "", "sub_list":[]},
                                ]}  
                                img_src="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    />
                <div className="col-sm-10">

                    <div className="">
                        <div className="tab-content" id="sidenav-content">
                            <div className="tab-pane fade" id="v-pills-week1" role="tabpanel" aria-labelledby="v-pills-week1-tab">
                                <CourseWeekDescription tabId="v-pills-week1" weekNumber="1" title="Chapter 1. Fluency and Coherence" description="In this chapter, we’re going to discuss ... lorem ipsum dolor sit amet" />
                            </div>

                        <div className="tab-pane fade show active" id="v-pills-week2" role="tabpanel" aria-labelledby="v-pills-week2-tab">
                            <CourseWeekDescription tabId="v-pills-week1" weekNumber="2" title="Chapter 2. Fluency and Coherence" description="In this chapter, we’re going to discuss ... lorem ipsum dolor sit amet" />
                     

                            <div className="box mt-4">
                                <div className="accordion accordion-flush" id="accordion1">
        
                                    <AccordionItem 
                                        id="accordion1-head1" 
                                        title="Week 2 Overview" 
                                        items_id="accordion1-collapse1" 
                                        items={[
                                            {"title":"Introduction: Fluency and Coherence", "link":"", "minutes": "1", "is_finished":"1"},
                                            {"title":"Additional Readings", "link":"", "minutes": "2", "is_finished":"1"}
                                        ]} 
                                        is_finished="1"
                                     />

                                    <AccordionItem 
                                        id="accordion1-head2" 
                                        title="Lesson 1. Pauses" 
                                        items_id="accordion1-collapse2" 
                                        items={[
                                            // {"title":"Introduction: Pause. What are Pauses?", "link":"/course/insidelesson", "minutes": "1"},
                                            {"title":"Introduction: Pause. What are Pauses?", "link":"/ielts", "minutes": "1"},
                                            {"title":"Warm-up Activity: Sample Questions, answer with pauses", "link":"", "minutes": "2"},
                                            {"title":"Activity: Complete the Sentences. Use proper pauses", "link":"", "minutes": "3"},
                                            {"title":"Homework: Speaking Excercises (General Deadline: June 8)", "link":"", "minutes": "5"}
                                        ]} 
                                     />


                                    <AccordionItem 
                                        id="accordion1-head3" 
                                        title="Lesson 2. Filler Words" 
                                        items_id="accordion1-collapse3" 
                                        items={[
                                            {"title":"Introduction: Filler Words. What are filler words?", "link":"", "minutes": "1"},
                                            {"title":"Warm-up Activity: Sample Questions, answer using filler words", "link":"", "minutes": "2"},
                                            {"title":"Activity: Complete the Sentences. Use proper filler words", "link":"", "minutes": "3"},
                                            {"title":"Activity: Restate the Sentences With Proper Filler Words", "link":"", "minutes": "2"},
                                            {"title":"Homework: Speaking Excercises (General Deadline: June 8)", "link":"", "minutes": "5"}
                                        ]} 
                                     />
                                    

                                    
                                    <AccordionItem 
                                        id="accordion1-head4" 
                                        title="Lesson 3. Speech Rate" 
                                        items_id="accordion1-collapse4" 
                                        items={[
                                            {"title":"Introduction: Filler Words. What are filler words?", "link":"", "minutes": "1"},
                                            {"title":"Warm-up Activity: Sample Questions, answer using filler words", "link":"", "minutes": "2"},
                                            {"title":"Activity: Complete the Sentences. Use proper filler words", "link":"", "minutes": "3"},
                                            {"title":"Activity: Restate the Sentences With Proper Filler Words", "link":"", "minutes": "2"},
                                            {"title":"Homework: Speaking Excercises (General Deadline: June 8)", "link":"", "minutes": "5"}
                                        ]} 
                                     />
                            
                                    
                                    <AccordionItem 
                                        id="accordion1-head5" 
                                        title=" Lesson 4. Staying on Topic " 
                                        items_id="accordion1-collapse5" 
                                        items={[
                                            {"title":"Introduction: Staying on Topic. How do you stay on topic?", "link":"", "minutes": "1"},
                                            {"title":"Warm-up Activity: Sample Questions,  answer as coherently as possible", "link":"", "minutes": "1"},
                                            {"title":"Activity: Fast Talks. Answer questions coherently within a time limit", "link":"", "minutes": "2"},
                                            {"title":"Activity: Complete the Sentences. Stay coherent.", "link":"", "minutes": "3"},
                                            {"title":"Homework: Speaking Excercises (General Deadline: June 8)", "link":"", "minutes": "5"}
                                        ]} 
                                    />

                                    <AccordionItem 
                                        id="accordion1-head6" 
                                        title="Lesson 5. Cohesive Devices" 
                                        items_id="accordion1-collapse6" 
                                        items={[
                                            {"title":"Introduction: Cohesive Devices. What are Cohesive Devices", "link":"", "minutes": "1"},
                                            {"title":"Warm-up Activity: Sample Questions, answer using cohesive devices", "link":"", "minutes": "2"},
                                            {"title":"Activity: Restate the Sentences using cohesive devices", "link":"", "minutes": "3"},
                                            {"title":"Activity: Fast Talk - Use Cohesive Devices to answer questions within a time limit", "link":"", "minutes": "3"},
                                            {"title":"Homework: Speaking Activity (General Deadline: June 8)", "link":"", "minutes": "5"}
                                        ]} 
                                     />

                                    <AccordionItem 
                                        id="accordion1-head7" 
                                        title="Lesson 6. Answer Structure " 
                                        items_id="accordion1-collapse7" 
                                        items={[
                                            {"title":"Introduction: Answer Structure. What are answer structures?", "link":"", "minutes": "1"},
                                            {"title":"Warm-up Activity: Sample Questions, answer with the proper structure", "link":"", "minutes": "2"},
                                            {"title":"Activity: Restate the Sentences using answer structures", "link":"", "minutes": "3"},
                                            {"title":"Activity: Fast Talk - Use Answer Structures to answer questions within a time limit", "link":"", "minutes": "3"},
                                            {"title":"Homework: Speaking Excercises (General Deadline: June 8)", "link":"", "minutes": "5"}
                                        ]} 
                                    />


                                    <AccordionItem 
                                        id="accordion1-head8" 
                                        title="Week 2 Conclusion" 
                                        items_id="accordion1-collapse8" 
                                        items={[
                                            {"title":"Chapter Mock Test (Deadline: June 10)", "link":"", "minutes": "15"},
                                            {"title":"Additional Resources", "link":"", "minutes": "3"}
                                        ]} 
                                    />

                                </div>
                            </div>

                        </div>


                        <div className="tab-pane fade" id="v-pills-week3" role="tabpanel" aria-labelledby="v-pills-week3-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-week4" role="tabpanel" aria-labelledby="v-pills-week4-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-week5" role="tabpanel" aria-labelledby="v-pills-week5-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-forums" role="tabpanel" aria-labelledby="v-pills-forums-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-ar" role="tabpanel" aria-labelledby="v-pills-ar-tab">...</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</div>


    )
}

// export default withTranslation()(LessonOutlook)
export default LessonOutlook