import Sidebar from "../../components/layout/LessonSidebar";
import CourseWeekDescription from "../../components/sections/Course/CourseWeekDescription";
import AccordionItem from "../../components/items/AccordionItem";
import Notes from "../../components/layout/Notes";
import Tab from "../../components/sections/Course/LessonTab";
import MultipleChoice from "../../components/functions/MultipleChoice";
import BindingBox from "../../components/functions/nonprogressive/BindingBox";
import MultipleItems from "../../components/functions/MultipleItems";
import React from "react";
import Vocabulary from "../../components/functions/nonprogressive/Vocabulary";
import Expressions from "../../components/functions/nonprogressive/Expressions";
import WordBank from "../../components/functions/nonprogressive/WordBank";
import Quiz from "../../components/functions/nonprogressive/Quiz";
import Cafe from "../../components/functions/nonprogressive/Cafe";
import ExpressionsCheck from "../../components/functions/nonprogressive/ExpressionsCheck";

export default function LessonOutlook2() {
    return (
<div className="container-fluid">
    <div className="row">
        <div className="container-fluid">
            <div className="row">
                    <Sidebar 
                        tab_list={[
                                    {"title":"Overview", "target":"v-pills-overview", "add_class": "active", "sub_list":[], "is_finished":"1"},
                                    {"title":"Introduction", "target":"v-pills-week2", "add_class": "", "sub_list":[], "is_finished":"1"},
                                    {"title":"Warm-up", "target":"v-pills-warmup", "add_class": "", "sub_list":[], "is_finished":"1"},
                                    {"title":"Lesson Preview", "target":"v-pills-lesson-prev", "add_class": "", "is_finished":"1", 
                                        "sub_list":[
                                            {"subtitle": "Vocabulary", "subtarget": "v-pills-vocabulary", "addsub_class":"", "is_finished":"1"},
                                            {"subtitle": "Expressions", "subtarget": "v-pills-expressions", "addsub_class":"", "is_finished":"1"},
                                            {"subtitle": "Guide Questions", "subtarget": "none2", "addsub_class":"", "is_finished":"1"},
                                            {"subtitle": "Discussion", "subtarget": "none3", "addsub_class":"", "is_finished":"1"}
                                        ]},
                                    {"title":"Guided Practice", "target":"v-pills-guided-prac", "add_class": "", "is_finished":"0", 
                                        "sub_list":[
                                            {"subtitle": "Vocab Check", "subtarget": "v-pills-vocabularycheck", "addsub_class":"", "is_finished":"1"},
                                            {"subtitle": "Expression Check", "subtarget": "v-pills-expressioncheck", "addsub_class":"", "is_finished":"1"},
                                            {"subtitle": "Story", "subtarget": "none4", "addsub_class":"", "is_finished":"1"},
                                            {"subtitle": "Guide Questions Check", "subtarget": "none5", "addsub_class":"", "is_finished":"0"},
                                            {"subtitle": "Discussion", "subtarget": "none6", "addsub_class":"", "is_finished":"0"},
                                        ]},
                                    {"title":"Homework", "target":"v-pills-homework", "add_class": "", "sub_list":[], "is_finished":"0"},
                                    {"title":"Quiz", "target":"v-pills-quiz", "add_class": "", "sub_list":[], "is_finished":"0"},
                                    {"title":"Word Bank", "target":"v-pills-word-bank", "add_class": "", "sub_list":[], "is_finished":"0"},
                                    {"title":"Forums", "target":"v-pills-forums", "add_class": "", "sub_list":[], "is_finished":"0"},
                                    {"title":"Additional Resources", "target":"v-pills-additionalresources", "add_class": "", "sub_list":[], "is_finished":"0"},
                                ]}  
                        img_src="https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
               
                <div className="col">

                    <div className="">
                        <div className="tab-content" id="sidenav-content">

                            <div className="tab-pane fade active show" id="v-pills-overview" role="tabpanel" aria-labelledby="v-pills-week1-tab">
                                <CourseWeekDescription tabId="v-pills-week1" left_content="Course Introduction" title="City (Category)" description="Cafe (Topic): In this lesson..." />

                                <div className="box mt-4">
                                    <div className="accordion accordion-flush" id="accordion1">
                                        <AccordionItem 
                                            id="accordion1-head1" 
                                            title="Introduction" 
                                            items_id="accordion1-collapse1" 
                                            items={[
                                                {"title":"Learning Goals, Key Vocabulary and Key Expressions", "link":"", "minutes": "1"},
                                                {"title":"Additional Readings", "link":"", "minutes": "3"}
                                            ]} 
                                            is_finished="1"
                                        />
                                        <AccordionItem 
                                            id="accordion2-head2" 
                                            title="Student Preparation" 
                                            items_id="accordion2-collapse2" 
                                            items={[
                                                {"title":"Warm-up (Mini game)", "link":"", "minutes": "1"},
                                                {"title":"Lesson Preview: Vocabulary and Expressions", "link":"", "minutes": "3"}
                                            ]} 
                                            is_finished="1"
                                        />
                                        <AccordionItem 
                                            id="accordion3-head3" 
                                            title="Guided Practice" 
                                            items_id="accordion3-collapse3" 
                                            items={[
                                                {"title":"Vocabulary Check", "link":"", "minutes": "1", "is_finished":"1"},
                                                {"title":"Expression Check", "link":"", "minutes": "2", "is_finished":"1"},
                                                {"title":"Storytelling", "link":"", "minutes": "3", "is_finished":"1"},
                                                {"title":"Guide Question Check", "link":"", "minutes": "2"},
                                                {"title":"Discussion", "link":"", "minutes": "5"}
                                            ]} 
                                            is_finished="0"
                                        />
                                        <AccordionItem 
                                            id="accordion4-head4" 
                                            title="Student Review" 
                                            items_id="accordion4-collapse4" 
                                            items={[
                                                {"title":"Homework (Deadline: June 8)", "link":"", "minutes": "1"},
                                                {"title":"Quiz", "link":"", "minutes": "2"}
                                            ]} 
                                            is_finished="0"
                                        />
                                    </div>
                                </div>
                            </div>

                        <div className="tab-pane fade" id="v-pills-week2" role="tabpanel" aria-labelledby="v-pills-week2-tab">
                            
                            <div className="row mb-3">
                                <div className="col-sm-9"><h3>Introduction</h3></div>
                                <div className="col-sm-3">
                                    <div className="float-end">
                                    <a className="btn btn-dark"
                                        ><i className="fas fa-angle-double-left icons"></i
                                    ></a>
                                    <a className="btn btn-dark"
                                        ><i className="fas fa-angle-double-right icons"></i
                                    ></a>
                                    </div>
                                </div>
                                </div>
                    
                                <div className="mb-4">
                                <div className="grey-title">
                                    <h5>Learning Goals</h5>
                                </div>
                                <div className="border p-2">
                                    <p>
                                    Praesent viverra eleifend tincidunt. Suspendisse eleifend,
                                    arcu ac cursus congue, nunc velit aliquet nisl, et egestas
                                    quam ante quis orci. In vitae nunc malesuada, posuere eros ac,
                                    fringilla mi. In sagittis dolor quis lacus pellentesque, sit
                                    amet molestie felis rhoncus. In condimentum mauris accumsan,
                                    mattis justo sed, mattis lectus.
                                    </p>
                                </div>
                                </div>
                    
                                <div className="mb-4">
                                <div className="grey-title">
                                    <h5>Key Vocabulary</h5>
                                </div>
                                <div className="border p-2">
                                    <p>
                                    Praesent viverra eleifend tincidunt. Suspendisse eleifend,
                                    arcu ac cursus congue, nunc velit aliquet nisl, et egestas
                                    quam ante quis orci. In vitae nunc malesuada, posuere eros ac,
                                    fringilla mi. In sagittis dolor quis lacus pellentesque, sit
                                    amet molestie felis rhoncus. In condimentum mauris accumsan,
                                    mattis justo sed, mattis lectus.
                                    </p>
                                </div>
                                </div>
                    
                                <div>
                                <div className="grey-title">
                                    <h5>Key Expressions</h5>
                                </div>
                                <div className="border p-2">
                                    <p>
                                    Praesent viverra eleifend tincidunt. Suspendisse eleifend,
                                    arcu ac cursus congue, nunc velit aliquet nisl, et egestas
                                    quam ante quis orci. In vitae nunc malesuada, posuere eros ac,
                                    fringilla mi. In sagittis dolor quis lacus pellentesque, sit
                                    amet molestie felis rhoncus. In condimentum mauris accumsan,
                                    mattis justo sed, mattis lectus.
                                    </p>
                                </div>
                                </div>
                            

                        </div>


                        <Tab 
                        id="v-pills-warmup" 
                        title="Warm-up: What do you see?"
                        >
                            <MultipleItems>
                                <div className="item">
                                    <MultipleChoice 
                                        id="warm-up"
                                        instruction="Choose the correct word or expression that best fit the photos."
                                        img_src="https://images.pexels.com/photos/2374794/pexels-photo-2374794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        choices={[
                                            {"choice":"frappe", "definition":"a coffee-based drink blended with milk", "is_correct":"1"},
                                            {"choice":"milkshake"}
                                        ]}
                                    />
                                </div>
                                <div className="item">
                                    <MultipleChoice 
                                        id="warm-up2"
                                        instruction="steph"
                                        img_src="https://images.pexels.com/photos/2374794/pexels-photo-2374794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        choices={[
                                            {"choice":"s", "definition":"a coffee-based drink blended with milk", "is_correct":"1"},
                                            {"choice":"tep"}
                                        ]}
                                    />
                                </div>
                            </MultipleItems>


                            <div className="row mt-4">
                                <div className="col-sm-12">
                                    <a className="btn btn-dark">Bookmark Activity</a>
                                    <a className="btn btn-dark float-end">Submit and Save</a>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            id="v-pills-vocabulary"
                            title="Vocabulary"
                            breadcrumbs={["Lesson Preview"]}
                        >
                            <p>Click on each photo to discover new vocabulary with their definition <span className="float-end"></span></p>
                            <div className="card">
                                <Vocabulary />
                            </div>

                            <div className="row mt-4">
                                <div className="col-sm-12">
                                <a className="btn btn-dark">Bookmark Activity</a>
                                <a className="btn btn-dark float-end">Submit and Save</a>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            id="v-pills-expressions"
                            title="Expressions"
                            breadcrumbs={["Lesson Preview"]}
                        >
                            <p>Common Phrases and Expressions Used in Cafes. Clicking on a button automatically saves the expression in your word bank <span className="float-end"></span></p>
                            <Expressions />

                            <div className="row mt-4">
                                <div className="col-sm-12">
                                <a className="btn btn-dark">Bookmark Activity</a>
                                <a className="btn btn-dark float-end">Submit and Save</a>
                                </div>
                            </div>  
                        </Tab>

                        <Tab
                            id="v-pills-vocabularycheck"
                            title="Vocabulary Check"
                            breadcrumbs={["City | Cafe", "Guided Practice"]}
                            learn_with_teacher_btn="0"
                        >
                            <BindingBox/>
                            
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                <a className="btn btn-dark">Bookmark Activity</a>
                                <a className="btn btn-dark float-end">Submit and Save</a>
                                </div>
                            </div>
                        </Tab>


                        <Tab
                            id="v-pills-expressioncheck"
                            title="Expresssion Check"
                            breadcrumbs={["Guided Practice"]}
                            learn_with_teacher_btn="0"
                        >
                          
                        <ExpressionsCheck/>
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                <a className="btn btn-dark">Bookmark Activity</a>
                                <a className="btn btn-dark float-end">Submit and Save</a>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            id="v-pills-homework"
                            title="Homework"
                        >
                            <Cafe/>
                            
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                <a className="btn btn-dark">Bookmark Homework</a>
                                <a className="btn btn-dark float-end">Submit and Save</a>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            id="v-pills-quiz"
                            title="Quiz"
                        >
                          <Quiz/>
                            
                        </Tab>

                        <Tab
                            id="v-pills-word-bank"
                            title="Word Bank"
                        >
                            <p>This page contains everything you saved all throughout your lessons. <span className="float-end"></span></p>
                            <WordBank course="mintography" />
                            
                            {/* <div className="row mt-4">
                                <div className="col-sm-12">
                                <a className="btn btn-dark">Bookmark Quiz</a>
                                <a className="btn btn-dark float-end">Submit and Save</a>
                                </div>
                            </div> */}
                        </Tab>


                        </div>
                    </div>


                </div>

                <Notes />

            </div>
        </div>

    </div>
</div>


    )
}