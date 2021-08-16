import Sidebar from "../../components/layout/LessonSidebar";
import Notes from "../../components/layout/Notes";
import Tab from "../../components/sections/Course/LessonTab";
import MultipleChoice from "../../components/functions/MultipleChoice";
import MultipleItems from "../../components/functions/MultipleItems";
import Video from "../../components/functions/progressive/Video";
import Warmup from "../../components/functions/progressive/Warmup";
import HomeworkWritingTest from "../../components/functions/progressive/HomeworkWritingTest";
import TrueFalse from "../../components/functions/TrueFalse";
import Sequencing from "../../components/functions/progressive/Sequencing";
import SetupModal from "../../components/functions/progressive/SpeakingSetupModal";
import ChapterTestSpeaking from "../../components/functions/progressive/ChapterTestSpeaking";
import SpeakingExercise from "../../components/functions/progressive/SpeakingExercise";
import Identification from "../../components/functions/progressive/Identification";

export default function InsideLesson() {

    return (
      <>
        <div className="container-fluid">
          <div className="row">
          
          <Sidebar 
            tab_list={[
                        {"title":"Week 2 Overview", "target":"none1", "add_class": "", "is_finished":"1", 
                        "sub_list":[
                          {"subtitle": "Introduction: Fluency and Coherence", "subtarget": "none", "addsub_class":"", "is_finished":"1"},
                          {"subtitle": "Additional Resources", "subtarget":"none0", "addsub_class":"", "is_finished":"1"}
                        ]
                        },
                        {"title":"Lesson 1. Pauses", "target":"none2", "add_class": "active","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction. Pauses, What are pauses?", "subtarget": "tab-l1-introduction", "addsub_class":"active","is_finished":"0"},
                          {"subtitle": "Warm-up Activity", "subtarget":"tab-l1-warmup", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Annotate the Paragraphs", "subtarget":"tab-l1-activity", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Exercises", "subtarget":"tab-l1-homework", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 2. Filler Words", "target":"none3", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction. Filler Words. What are filler words?", "subtarget": "none2a", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity", "subtarget":"none4", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Complete the Sentences", "subtarget":"", "addsub_class":"none5","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Exercises", "subtarget":"none2b", "addsub_class":"none6","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 3. Speech Rate", "target":"none7", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Speech Rate. What is speech rate?", "subtarget": "none8", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, emphasize your points", "subtarget":"none9", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Fast Talks with Idiomatic Expressions", "subtarget":"none10", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Restate the Sentences With Proper Emphasis", "subtarget":"none11", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget":"none12", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"  Lesson 4. Staying on Topic", "target":"none13", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Staying on Topic. How do you stay on topic?", "subtarget": "none14", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, answer as coherently as possible", "subtarget":"none15", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "  Activity: Fast Talks. Answer questions coherently within a time limit", "subtarget":"", "addsub_class":"none16","is_finished":"0"},
                          {"subtitle": "  Activity: Complete the Sentences. Stay coherent.", "subtarget":"none17", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget":"none18", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 5. Cohesive Devices", "target":"none19", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Cohesive Devices. What are Cohesive Devices", "subtarget": "none20", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, answer using cohesive devices", "subtarget":"none", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Restate the Sentences using cohesive devices", "subtarget":"none21", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "  Activity: Fast Talk - Use Cohesive Devices to answer questions within a time limit.", "subtarget":"none22", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Activity (General Deadline: June 8)", "subtarget":"", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Lesson 6. Answer Structure", "target":"none23", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Introduction: Answer Structure. What are answer structures?", "subtarget": "none24", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Warm-up Activity: Sample Questions, answer with the proper structure", "subtarget":"none25", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Restate the Sentences using answer structures", "subtarget":"none26", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Activity: Fast Talk - Use Answer Structures to answer questions within a time limit", "subtarget":"none27", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget":"none28", "addsub_class":"","is_finished":"0"},
                        ]
                        },
                        {"title":"Week 2 Conclusion", "target":"none29", "add_class": "","is_finished":"0", 
                        "sub_list":[
                          {"subtitle": "Chapter Test", "subtarget": "tab-chapter-test", "addsub_class":"","is_finished":"0"},
                          {"subtitle": "Additional Resources", "subtarget":"none31", "addsub_class":"","is_finished":"0"}
                        ]
                        },
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
                    id="tab-l1-introduction" 
                    title="Introduction. Pauses, What are pauses?"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Week2", "Lesson 1. Pauses"]}
                    is_active="1"
                  >
                    <Video/>
                </Tab>


                <Tab 
                    id="tab-l1-warmup" 
                    title="Warm-up Activity"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Week2", "Lesson 1. Pauses"]}
                  >
                    <Warmup />
                    <div className="row justify-content-between mt-4">
                      <button className="btn btn-dark col-sm-3">Bookmark Activity</button>
                      <button className="btn btn-dark col-sm-3">Submit & Save</button>
                    </div>
                </Tab>

                <Tab 
                    id="tab-l1-activity" 
                    title="Annotate the Paragraphs"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Week2", "Lesson 1. Pauses"]}
                  >
                    <MultipleChoice 
                      id="mch1"
                      title="Activity: Annotate the Paragraphs"
                      instructions="Choose the proper beat indication as asked."
                      question="1. Athletes in our country are not well-supported. __"
                      choices={[
                            {"choice":"///", "is_correct":"1"},
                            {"choice":"//"},
                            {"choice":"/"}
                      ]}
                      answer_explanation="Three beats (///) = Long Pauses. Used for long paragraphs, usually indicated by a period."
                    />

                    <MultipleChoice 
                      id="mch2"
                      question="2. Well, I am not sure now __ but I heard they are getting more recognition __ and also incentives when they win or manage to snatch a medal regardless of the sport."
                      choices={[
                            {"choice":"///", "is_correct":"1"},
                            {"choice":"//"},
                            {"choice":"/"}
                      ]}
                      answer_explanation="One beat (/) = Short Pauses. Commonly used for thought groups separated by commas."
                    />
                    <MultipleChoice 
                      id="mch3"
                      question="3. and also incentives when they win or manage to snatch a medal regardless of the sport. __"
                      choices={[
                            {"choice":"///", "is_correct":"1"},
                            {"choice":"//"},
                            {"choice":"/"}
                      ]}
                      answer_explanation="Three beats (///) = Long Pauses. Used for long paragraphs, usually indicated by a period."
                    />
                    <MultipleChoice 
                      id="mch4"
                      question="4. I think that there are many good athletes in our country that can rival the best of other countries, __ but it’s just that our government doesn’t support them that much or put importance in sports."
                      choices={[
                            {"choice":"///"},
                            {"choice":"//"},
                            {"choice":"/", "is_correct":"1"}
                      ]}
                      answer_explanation="One beat (/) = Short Pauses. Commonly used for thought groups separated by commas."
                    />
                    <MultipleChoice 
                      id="mch5"
                      question="5. I think that there are many good athletes in our country that can rival the best of other countries, but it’s just that our government doesn’t support them that much or put importance in sports. __"
                      choices={[
                            {"choice":"///", "is_correct":"1"},
                            {"choice":"//"},
                            {"choice":"/"}
                      ]}
                      answer_explanation="Three beats (///) = Long Pauses. Used for long paragraphs, usually indicated by a period."
                    />
                    
                </Tab>

                <Tab 
                    id="tab-l1-homework" 
                    title="Homework: Speaking Exercises"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Week 2", "Lesson 1. Pauses"]}
                    deadline="General Deadline: June 8"
                    learning_goals=""
                    keywords=""
                  >
                    
                    <div className="writing_container">
                      <HomeworkWritingTest/>
                    </div>
                    
                    <div className="speaking_container" style={{display: "none"}}>
                      <SpeakingExercise type="homework" />
                    </div>

                    <div className="row justify-content-between mt-4 homework_buttons_container">
                      <button className="btn btn-dark col-sm-4">Bookmark Homework</button>
                      <button className="btn btn-dark col-sm-3" id="hw_submit">
                        Submit & Save
                      </button>
                      <button className="btn btn-dark col-sm-3" id="speak_btn" data-bs-toggle="modal" data-bs-target="#homeworkSetupModal">
                        Begin Speaking Part
                      </button>
                    </div>
                </Tab>
 

                <Tab 
                    id="tab-chapter-test" 
                    title="Chapter Test"
                    learn_with_teacher_btn="0"
                    breadcrumbs={["Week2", "Lesson 1. Pauses"]}
                  >
                    <MultipleItems id="multi1">
                        <div className="item">
                          <p><b>Chapter Test. Part 1: True or False</b></p>
                          <TrueFalse
                            id="t1"
                            question="1. IELTS is one of the most popular tests for higher education and migration purposes to countries such as Australia, Canada, New Zealand, the United Kingdom, and the United States of America."
                            correct_answer="t"
                            answer_explanation="Only the overall speaking band will be shown, not the score in each criterion."
                          />
                          <TrueFalse
                            id="t2"
                            question="2. IELTS has a number of tasks with specific objectives, and one of them is the speaking task which contains questions about grammar and vocabulary."
                            correct_answer="f"
                            answer_explanation="Only the overall speaking band will be shown, not the score in each criterion."
                          />
                          <TrueFalse
                            id="t3"
                            question="3. The examiner is a professional teacher with an advanced degree and is from a country where English is the native language."
                            correct_answer="t"
                            answer_explanation="Only the overall speaking band will be shown, not the score in each criterion."
                          />
                          <TrueFalse
                            id="t4"
                            question="4. The first part of the speaking test takes about 3-4 minutes in which general
                            questions are asked."
                            correct_answer="f"
                            answer_explanation="False. Part 1 takes about 4-5 minutes."
                          />
                          <TrueFalse
                            id="t5"
                            question="5. The speaking test has three parts, and the third part of the test is called the cue
                            card section."
                            correct_answer="f"
                            answer_explanation="Only the overall speaking band will be shown, not the score in each criterion."
                          />
                        </div>

                        <div className="item">
                          <p><b>Chapter Test. Part 2: Short Answers</b></p>
                          <Identification/>
                        </div>

                        <div className="item">
                          <p><b>Chapter Test. Part 3: Sequencing</b></p>
                          <Sequencing/>
                        </div>

                        <div className="item">
                          <p><b>Chapter Test. Part 4: Speaking Exercises</b></p>
                          <ChapterTestSpeaking />
                        </div>


                    </MultipleItems>
                </Tab>
                  

                </div>
              </div>
            </div>
            
            <Notes/>

          </div>

          {/* Microphone Setup Modal  */}
          <SetupModal type="homework"/>
        </div>

      </>

    )
  }
  