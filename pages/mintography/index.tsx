import Sidebar from "../../components/layout/LessonSidebar";
import Notes from "../../components/layout/Notes";
import Tab from "../../components/sections/Course/LessonTab";
import MultipleChoice from "../../components/functions/MultipleChoice";
import MultiStep from "../../components/items/MultiStep";
import MultipleItems from "../../components/functions/MultipleItems";
import Vocabulary from "../../components/functions/nonprogressive/Vocabulary";
import Expressions from "../../components/functions/nonprogressive/Expressions";
import WordBank from "../../components/functions/nonprogressive/WordBank";
import BindingBox from "../../components/functions/nonprogressive/BindingBox";
import Overview from "../../components/functions/nonprogressive/Overview";
import Introduction from "../../components/functions/nonprogressive/Introduction";
import ExpressionsCheck from "../../components/functions/nonprogressive/ExpressionsCheck";
import Cafe from "../../components/functions/nonprogressive/Cafe";
import Quiz from "../../components/functions/nonprogressive/Quiz";
import GuideQuestions from "../../components/functions/nonprogressive/GuideQuestions";
import Link from "next/link";

export default function InsideLesson() {

    return (
      <>
        <div className="container-fluid">
          <div className="row">
          
                <Sidebar 
                    tab_list={[
                                {"title":"Overview", "target":"tab-overview", "add_class": "active"},
                                {"title":"Introduction", "target":"tab-introduction", "add_class": ""},
                                {"title":"Warm-Up", "target":"tab-warm-up", "add_class": ""},
                                {"title":"Lesson Preview", "target":"none1", "add_class": "",
                                "sub_list":[
                                  {"subtitle": "Key Vocabulary", "subtarget":"tab-key-vocabulary", "addsub_class":""},
                                  {"subtitle": "Key Expressions", "subtarget":"tab-key-expressions", "addsub_class":""},
                                  {"subtitle": "Guide Questions", "subtarget":"tab-guide-questions", "addsub_class":""},
                              ]},
                                {"title":"Guided Practice", "target":"none2", "add_class": "",
                                "sub_list":[
                                  {"subtitle": "Vocabulary Check", "subtarget":"tab-vocabulary-check", "addsub_class":""},
                                  {"subtitle": "Expression Check", "subtarget":"tab-expression-check", "addsub_class":""},
                                  // {"subtitle": "Roleplay", "subtarget":"tab-roleplay", "addsub_class":""},
                                  // {"subtitle": "Story Telling", "subtarget":"tab-story-telling", "addsub_class":""},
                                  // {"subtitle": "Discussion", "subtarget":"tab-discussion", "addsub_class":""},

                              ]},
                                {"title":"Homework", "target":"tab-homework", "add_class": ""},
                                {"title":"Quiz", "target":"tab-quiz", "add_class": ""},
                                {"title":"Word Bank", "target":"tab-word-bank", "add_class": ""},
                                
                            ]}  
                      img_src="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                />
            <div className="col ml-2 mr-2">
              <div className="">
                <div className="tab-content" id="sidenav-content">
                
                {/* *
                *<Tab></Tab> Components variables:
                *is_active
                *breadcrumbs
                *title
                *learn_with_teacher_btn (*value of 1/0)- shows Learn with Teacher Button
                *learning_goals
                *keywords
                *is_done
                * */}

                <Tab 
                    id="tab-overview" 
                    title="Overview"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                    is_active="1"
                  >
                  
                  <Overview course="Mintography"/>
                </Tab>

                <Tab 
                    id="tab-introduction" 
                    title="Introduction"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    <Introduction />
                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Warm Up <i className="fas fa-caret-right"></i></button>
                    </div>
                </Tab>


                <Tab 
                    id="tab-warm-up" 
                    title="Warm-up: What do you see?"
                    learn_with_teacher_btn="1"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* <MultipleItems id="warm-up">
                        <div className="item"> 
                            <MultipleChoice 
                                id="warm-up1"
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
                                instruction="Choose the correct word or expression that best fit the photos."
                                img_src="https://images.pexels.com/photos/2045362/pexels-photo-2045362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                choices={[
                                    {"choice":"milkshake", "definition":"a cold drink made of milk", "is_correct":"1"},
                                    {"choice":"coffee"}
                                ]}
                            />
                        </div>
                    </MultipleItems> */}
                    <p>Choose the correct word or expression that best fit the photos.</p>
                    <MultiStep>
                      <MultipleChoice 
                          id="warm-up1"
                          img_src="https://images.pexels.com/photos/2374794/pexels-photo-2374794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          choices={[
                              {"choice":"frappe", "definition":"a coffee-based drink blended with milk", "is_correct":"1"},
                              {"choice":"milkshake"}
                          ]}
                      />
                      <MultipleChoice 
                          id="warm-up2"
                          img_src="https://images.pexels.com/photos/2045362/pexels-photo-2045362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          choices={[
                              {"choice":"milkshake", "definition":"a cold drink made of milk", "is_correct":"1"},
                              {"choice":"coffee"}
                          ]}
                      />
                    </MultiStep>
                </Tab>


                <Tab 
                    id="tab-key-vocabulary" 
                    title="Lesson Preview: Key Vocabulary"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    <p>Click on each photo to discover new vocabulary with their definition <span className="float-end"></span></p>
                    <div className="card">
                        <Vocabulary />
                    </div>

                    <div className="row mt-4 float-end">
                      <button className="btn btn-dark">Next: Key Expressions <i className="fas fa-caret-right"></i></button>
                    </div>
                </Tab>
                

                <Tab 
                    id="tab-key-expressions" 
                    title="Lesson Preview: Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    <p>Common Phrases and Expressions Used in Cafes. Clicking on a button automatically saves the expression in your word bank <span className="float-end"></span></p>
                    <Expressions />

                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Guided Questions <i className="fas fa-caret-right"></i></button>
                    </div> 
                </Tab>

                
                <Tab 
                    id="tab-guide-questions" 
                    title="Lesson Preview: Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    
                    <GuideQuestions />
                </Tab>

                <Tab 
                    id="tab-lesson-preview" 
                    title="Guided Practice"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    
                </Tab>

                <Tab 
                    id="tab-vocabulary-check" 
                    title="Vocabulary Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    {/* Vocabulary Check  */}
                    <button className="btn btn-dark float-end">Word bank</button>
                    <BindingBox/>

                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Expressions Check <i className="fas fa-caret-right"></i></button>
                    </div> 
                </Tab>

                <Tab 
                    id="tab-expression-check" 
                    title="Expression Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    <button className="btn btn-dark float-end">Word bank</button>
                    <ExpressionsCheck />
                    
                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Homework <i className="fas fa-caret-right"></i></button>
                    </div> 
                </Tab>

                {/* <Tab 
                    id="tab-roleplay" 
                    title="Roleplay"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    Roleplay 
                </Tab>

                <Tab 
                    id="tab-story-telling" 
                    title="Story Telling"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    Story Telling 
                </Tab>

                <Tab 
                    id="tab-discussion" 
                    title="Discussion"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    Discussion 
                </Tab> */}


                <Tab 
                    id="tab-homework" 
                    title="Homework (Duedate: August 3, 2021)"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >

                    <div className="homework_container">
                      <Cafe />
                    </div>
                </Tab>

                <Tab 
                    id="tab-quiz" 
                    title="Quiz (Duedate: August 5, 2021)"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                  <Quiz /> 

                  <div className="row mt-4">
                      <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                  </div>
                </Tab>

                <Tab 
                    id="tab-word-bank" 
                    title="Word Bank"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Mintography"]}
                  >
                    <p>This page contains everything you saved all throughout your lessons. <span className="float-end"></span></p>
                    <WordBank course="mintography" />
                </Tab>

                </div>
              </div>
            </div>
            
            <Notes/>

          </div>
        </div>

      </>

    )
  }
  