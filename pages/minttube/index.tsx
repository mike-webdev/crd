
import Sidebar from "../../components/layout/LessonSidebar";
import Notes from "../../components/layout/Notes";
import Tab from "../../components/sections/Course/LessonTab";
import MultipleChoice from "../../components/functions/MultipleChoice";
import MatchingType from "../../components/functions/MatchingType";
import Video from "../../components/functions/nonprogressive/Video";
import TrueFalse from "../../components/functions/TrueFalse";
import VocabularyKey from "../../components/functions/nonprogressive/VocabularyKey";
import ExpressionsKey from "../../components/functions/nonprogressive/ExpressionsKey";
import WordBank from "../../components/functions/nonprogressive/WordBank";
import WordBlaster from "../../components/functions/nonprogressive/WordBlaster";
import MinttubeLessonPreview from "../../components/functions/nonprogressive/MinttubeLessonPreview";
import SentenceConstruction from "../../components/functions/nonprogressive/SentenceConstruction";
import MinttubeComprehensionCheck from "../../components/functions/nonprogressive/MinttubeComprehensionCheck";
import MinttubeHomework from "../../components/functions/nonprogressive/MinttubeHomework";
import MultipleItems from "../../components/functions/MultipleItems";
import HomeworkRecording from "../../components/functions/nonprogressive/HomeworkRecording";
import Overview from "../../components/functions/nonprogressive/Overview";
import LearningGoals from "../../components/functions/nonprogressive/LearningGoals";
import CulturalNotes from "../../components/functions/nonprogressive/CulturalNotes";
import Link from "next/link"
import QuizMintube from "../../components/functions/nonprogressive/QuizMintube";
import SpeakingPractice from "../../components/functions/nonprogressive/SpeakingPracting";
import Discussion from "../../components/functions/nonprogressive/Discussion";
import PronounciationCheck from "../../components/functions/nonprogressive/PronounciationCheck";
import SubmitModal from "../../components/functions/modals/SubmitModal";
import SessionModal from "../../components/functions/modals/SessionModal";

export default function InsideLesson() {

    return (
      <>
      {/* <UserRoute> */}
        <div className="container-fluid">
          <div className="row">
          
                <Sidebar 
                    tab_list={[
                                {"title":"Overview", "target":"tab-overview", "add_class": "active"},
                                {"title":"Introduction", "target":"none1", "add_class": "",
                                  "sub_list":[
                                    {"subtitle": "Learning Goals", "subtarget":"tab-learning-goals", "addsub_class":"",},
                                    {"subtitle": "Cultural Notes", "subtarget":"tab-cultural-notes", "addsub_class":"",}
                                ]},
                                {"title":"Warm-Up", "target":"none2", "add_class": "", 
                                  "sub_list":[
                                    {"subtitle": "Word Blaster", "subtarget":"tab-word-game", "addsub_class":"",},
                                    {"subtitle": "Key Vocabulary", "subtarget":"tab-key-vocabulary", "addsub_class":"",},
                                    {"subtitle": "Key Expressions", "subtarget":"tab-key-expressions", "addsub_class":"",},

                                ]},
                                {"title":"Lesson Preview", "target":"tab-lesson-preview", "add_class": ""},
                                {"title":"Guided Practice", "target":"none3", "add_class": "",
                                  "sub_list":[
                                    {"subtitle": "Sentence Completion", "subtarget":"tab-vocabulary-check", "addsub_class":""},
                                    {"subtitle": "Sentence Construction", "subtarget":"tab-sentence-construction", "addsub_class":""},
                                    {"subtitle": "Matching Type", "subtarget":"tab-expressions-check", "addsub_class":""},
                                    {"subtitle": "Listening Practice", "subtarget":"tab-listening-practice", "addsub_class":""},
                                    {"subtitle": "Pronounciation Check", "subtarget":"tab-pronounciation-check", "addsub_class":""},
                                    {"subtitle": "Summary", "subtarget":"tab-summary", "addsub_class":""},
                                    {"subtitle": "Comprehension Check", "subtarget":"tab-comprehension-check", "addsub_class":""},
                                    {"subtitle": "Discussion", "subtarget":"tab-discussion", "addsub_class":""},
                                  //   {"subtitle": "Speaking Practice", "subtarget":"none4", "addsub_class":"",
                                  //     "sub_child_list":[
                                  //       {"subtitle": "Summary", "subtarget":"tab-summary", "addsub_class":""},
                                  //       {"subtitle": "Comprehension Check", "subtarget":"tab-comprehension-check", "addsub_class":""},
                                  //       {"subtitle": "Discussion", "subtarget":"tab-discussion", "addsub_class":""},
                                  //     ]
                                  // },

                                ]},
                                // {"title":"Homework", "target":"tab-homework", "add_class": ""},
                                {"title":"Homework", "target":"tab-homework", "add_class": "", 
                                  "sub_list":[
                                    {"subtitle": "Recording", "subtarget":"tab-homework-recording", "addsub_class":"",},
                                    {"subtitle": "Writing", "subtarget":"tab-homework-writing", "addsub_class":"",},
                                ]},
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
                    breadcrumbs={["MintTube"]}
                    is_active="1"
                  >
                  
                  <Overview course="Minttube"/>
                </Tab>

                <Tab 
                    id="tab-learning-goals" 
                    title="Learning Goals"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >

                  <LearningGoals />

                  <div className="row my-4 float-end">
                    <button className="btn btn-dark">Next: Cultural Notes <i className="fas fa-caret-right"></i></button>
                  </div> 

                </Tab>

                <Tab 
                    id="tab-cultural-notes" 
                    title="Cultural Notes"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >

                  <CulturalNotes />

                  <div className="row my-4 float-end">
                    <button className="btn btn-dark">Next: Warm Up <i className="fas fa-caret-right"></i></button>
                  </div>

                </Tab>

                <Tab 
                    id="tab-word-game" 
                    title="Word Blaster"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <WordBlaster/>
                </Tab>


                <Tab 
                    id="tab-key-vocabulary" 
                    title="Warm-up: Key Vocabulary"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <p>Click on the word for definition, pronounciation, and sentence examples.</p>
                    <p>Click the sound icon ( <i className="fas fa-volume-up"></i> ) to hear the word pronounciation.</p>
                    <p>Click the bookmark icon ( <i className="fas fa-bookmark"></i> ) to save the word in your Word Bank.</p>
                    
                    <VocabularyKey />

                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Key Expression <i className="fas fa-caret-right"></i></button>
                    </div>
                </Tab>
                

                <Tab 
                    id="tab-key-expressions" 
                    title="Warm-up: Key Expressions"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <p>Click on the word for definition, pronounciation, and sentence examples.</p>
                    <p>Click the sound icon ( <i className="fas fa-volume-up"></i> ) to hear the word pronounciation.</p>
                    <p>Click the bookmark icon ( <i className="fas fa-bookmark"></i> ) to save the word in your Word Bank.</p>
                    
                    <ExpressionsKey />

                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Lesson Preview <i className="fas fa-caret-right"></i></button>
                    </div>
                </Tab>


                <Tab 
                    id="tab-lesson-preview" 
                    title="Lesson Preview"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <MinttubeLessonPreview/>
                </Tab>


                <Tab 
                    id="tab-vocabulary-check" 
                    title="Sentence Completion"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    {/* <MultipleItems id="multi1"> */}
                      <div className="item">
                        <MultipleChoice
                          id="mt-mc1"
                          instruction="Part I: Sentence Completion. Complete each statement with the correct word from the choices."
                          question="1. __ are very tiny living things that can cause diseases."
                          choices={[
                              {"choice":"antibodies"},
                              {"choice":"bacteria", "is_correct":"1"},
                              {"choice":"coddle"}
                            ]}
                        />
                        <MultipleChoice
                          id="mt-mc2"
                          question="2. __ is a place or a booth where people can use sanitizing items to protect themselves against germs."
                          choices={[
                              {"choice":"immune system"},
                              {"choice":"juncture"},
                              {"choice":"sanitizing station", "is_correct":"1"}
                            ]}
                        />
                        <MultipleChoice
                          id="mt-mc3"
                          question="3. The __ is made up of blood cells and antibodies."
                          choices={[
                              {"choice":"fecal matter"},
                              {"choice":"immune system", "is_correct":"1"},
                              {"choice":"sanitizing station"}
                            ]}
                        />
                        <MultipleChoice
                          id="mt-mc4"
                          question="4. The immune system produces __ to fight off bacteria and viruses."
                          choices={[
                              {"choice":"antibodies", "is_correct":"1"},
                              {"choice":"juncture"},
                              {"choice":"fecal matter"}
                            ]}
                        />
                        <MultipleChoice
                          id="mt-mc5"
                          question="5. __ are solid body waste."
                          choices={[
                              {"choice":"antibodies"},
                              {"choice":"immune system"},
                              {"choice":"fecal matter", "is_correct":"1"}
                            ]}
                        />
                        <MultipleChoice
                          id="mt-mc6"
                          question="6. __ refers to the reasons or explanations of an action, belief, opinion, etc."
                          choices={[
                              {"choice":"coddle"},
                              {"choice":"euro"},
                              {"choice":"rationale", "is_correct":"1"}
                            ]}
                        />

                        <MultipleChoice
                          id="mt-mc7"
                          question="7. If something is __, it is based on good reasoning."
                          choices={[
                              {"choice":"coddle"},
                              {"choice":"juncture"},
                              {"choice":"sound", "is_correct":"1"}
                            ]}
                        />
                        
                        <MultipleChoice
                          id="mt-mc8"
                          question="8. The __ is the national money used by some members countries of the European Union."
                          choices={[
                              {"choice":"sound"},
                              {"choice":"euro", "is_correct":"1"},
                              {"choice":"juncture"}
                            ]}
                        />

                        <MultipleChoice
                          id="mt-mc9"
                          question="9. To __ means to protect too much. "
                          choices={[
                              {"choice":"coddle", "is_correct":"1"},
                              {"choice":"immune"},
                              {"choice":"juncture"}
                            ]}
                        />

                        <MultipleChoice
                          id="mt-mc10"
                          question="10. A __ is a joint or connection between two things. "
                          choices={[
                              {"choice":"euro"},
                              {"choice":"juncture", "is_correct":"1"},
                              {"choice":"sanitizing station"}
                            ]}
                        />
                      </div>
                

                    {/* </MultipleItems> */}

                    <div className="row justify-content-between mt-4">
                        <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-sentence-construction" 
                    title="Sentence Construction"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                
                    <div className="item">
                      <SentenceConstruction/>
                    </div>

                    <div className="row justify-content-between mt-4">
                        <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                    </div>
                </Tab>


                <Tab 
                    id="tab-expressions-check" 
                    title="Matching Type"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <MatchingType
                      id="mt1"
                      questions={[
                        {"question":"1.  Dianne: Do you __ her decision? <br/>Bruce: Oh no! It's just that her decision lacks a sound rationale.", "answer":"have something against"},
                        {"question":"2.   Catherine: What did you say __ ?  <br/>Jake: It was his bravery.", "answer":"cost the main character’s life"},
                        {"question":"3.  Tanya: Give some ways to __ accident in the workplace. <br/> Keith: Make safety sighs visible and clear.", "answer":"to cut down on"},
                        {"question":"4.  Mr Eddy: __ Jim, the program starts at 9. <br/> Mrs. Eddy: Then hurry up or we’ll be late.", "answer":"according to"},
                        {"question":"5.  Anna: You look pale! Do you feel alright? <br/> Brenda: I’m a bit __ .Anna: I suggest you get some rest.", "answer":"under the weather"},
                      ]}
                    />

                    <div className="row justify-content-between mt-4">
                      <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-listening-practice" 
                    title="Listening Practice"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <Video/>

                    <div className="row justify-content-between mt-4">
                        <button className="btn btn-dark col-sm-3"><i className="fas fa-check-circle"></i> Check Answers </button>
                        <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-pronounciation-check" 
                    title="Guided Practice: Pronounciation Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                  
                  <PronounciationCheck />

                  <div className="row my-4 float-end">
                    <button className="btn btn-dark">Next: Summary <i className="fas fa-caret-right"></i></button>
                  </div>
                </Tab>


                <Tab 
                    id="tab-summary" 
                    title="Guided Practice: Summary"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <SpeakingPractice/>

                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Comprehension Check <i className="fas fa-caret-right"></i></button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-comprehension-check" 
                    title="Guided Practice: Comprehension Check"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <MinttubeComprehensionCheck/>

                    <div className="row justify-content-between mt-4">
                      <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-discussion" 
                    title="Guided Practice: Discussion"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <Discussion />

                    <div className="row my-4 float-end">
                      <button className="btn btn-dark">Next: Homework <i className="fas fa-caret-right"></i></button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-homework" 
                    title="Homework (Duedate: August 3, 2021)"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <div className="homework_container">
                      <HomeworkRecording isStarted="false" />
                      <MinttubeHomework/>

                      <div className="row mt-4">
                        <button type="button" className="btn btn-dark col-sm-3" data-bs-toggle="modal" data-bs-target="#minttubeSessionModal">Begin Homework <i className="fas fa-caret-right"></i></button>
                      </div>

                      <SessionModal course="minttube" />
                    </div>
                </Tab>

                <Tab 
                    id="tab-homework-recording" 
                    title="Homework"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <HomeworkRecording isStarted="true" />

                    <div className="row mt-4">
                        <button type="button" className="btn btn-dark col-sm-3" data-bs-toggle="modal" data-bs-target="#minttubespeakingSubmitModal"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                    </div>

                    <SubmitModal course="minttube" type="speaking" />
                </Tab>

                <Tab 
                    id="tab-homework-writing" 
                    title="Homework"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    
                    <MinttubeHomework/>
                    
                    <div className="row justify-content-between mt-4 homework_buttons_container">        
                      <button type="button" className="btn btn-dark col-sm-3" data-bs-toggle="modal" data-bs-target="#minttubewritingSubmitModal"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                      <button className="btn btn-dark col-sm-4">Next: Quiz <i className="fas fa-caret-right"></i></button>
                    </div>

                    <SubmitModal course="minttube" type="writing" />
                </Tab>

                
                <Tab 
                    id="tab-quiz" 
                    title="Quiz (Duedate: August 5, 2021)"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <QuizMintube/>
                    
                    <div className="row mt-4">
                        <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-word-bank" 
                    title="Word Bank"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["MintTube"]}
                  >
                    <p>This page contains everything you saved all throughout your lessons. <span className="float-end"></span></p>
                    <WordBank course="minttube"/>
                </Tab>

                </div>
              </div>
            </div>
            
            <Notes/>

          </div>
        </div>

      {/* </UserRoute> */}
      </>

    )
  }
  
