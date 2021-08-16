import Link from 'next/link'
import Sidebar from "../../components/layout/LessonSidebar";
import Notes from "../../components/layout/Notes";
import Tab from "../../components/sections/Course/LessonTab";
import MultipleChoice from "../../components/functions/MultipleChoice";
import Video from "../../components/functions/progressive/Video";
import Warmup from "../../components/functions/progressive/Warmup";
import HomeworkWritingTest from "../../components/functions/progressive/HomeworkWritingTest";
import TrueFalse from "../../components/functions/TrueFalse";
import Sequencing from "../../components/functions/progressive/Sequencing";
import SetupModal from "../../components/functions/progressive/SpeakingSetupModal";
import ChapterTestSpeaking from "../../components/functions/progressive/ChapterTestSpeaking";
import SpeakingExercise from "../../components/functions/progressive/SpeakingExercise";

export default function InsideLesson() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <Sidebar
            tab_list={[
              {
                "title": "Week 2 Overview", "target": "v-pills-week1", "add_class": "", "is_finished": "1",
                "sub_list": [
                  { "subtitle": "Introduction: Fluency and Coherence", "subtarget": "none", "addsub_class": "", "is_finished": "1" },
                  { "subtitle": "Additional Resources", "subtarget": "none0", "addsub_class": "", "is_finished": "1" }
                ]
              },
              {
                "title": "Lesson 1. Pauses", "target": "", "add_class": "active", "is_finished": "0",
                "sub_list": [
                  { "subtitle": "  Introduction. Pauses, What are pauses?", "subtarget": "v-pills-week3", "addsub_class": "active", "is_finished": "0" },
                  { "subtitle": "Warm-up Activity", "subtarget": "v-pills-week4", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Activity: Annotate the Paragraphs", "subtarget": "v-pills-l1-activity", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Homework: Speaking Exercises", "subtarget": "v-pills-week5", "addsub_class": "", "is_finished": "0" },
                ]
              },
              {
                "title": "Lesson 2. Filler Words", "target": "none1", "add_class": "", "is_finished": "0",
                "sub_list": [
                  { "subtitle": "Introduction. Filler Words. What are filler words?", "subtarget": "none2", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Warm-up Activity", "subtarget": "none3", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Activity: Complete the Sentences", "subtarget": "", "addsub_class": "none4", "is_finished": "0" },
                  { "subtitle": "Homework: Speaking Exercises", "subtarget": "", "addsub_class": "none5", "is_finished": "0" },
                ]
              },
              {
                "title": "Lesson 3. Speech Rate", "target": "none6", "add_class": "", "is_finished": "0",
                "sub_list": [
                  { "subtitle": "Introduction: Speech Rate. What is speech rate?", "subtarget": "none7", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Warm-up Activity: Sample Questions, emphasize your points", "subtarget": "none8", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Activity: Fast Talks with Idiomatic Expressions", "subtarget": "none9", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Activity: Restate the Sentences With Proper Emphasis", "subtarget": "none10", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget": "none11", "addsub_class": "", "is_finished": "0" },
                ]
              },
              {
                "title": "  Lesson 4. Staying on Topic", "target": "none12", "add_class": "", "is_finished": "0",
                "sub_list": [
                  { "subtitle": "Introduction: Staying on Topic. How do you stay on topic?", "subtarget": "none13", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Warm-up Activity: Sample Questions, answer as coherently as possible", "subtarget": "none14", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "  Activity: Fast Talks. Answer questions coherently within a time limit", "subtarget": "", "addsub_class": "none15", "is_finished": "0" },
                  { "subtitle": "  Activity: Complete the Sentences. Stay coherent.", "subtarget": "none16", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget": "none17", "addsub_class": "", "is_finished": "0" },
                ]
              },
              {
                "title": "Lesson 5. Cohesive Devices", "target": "none18", "add_class": "", "is_finished": "0",
                "sub_list": [
                  { "subtitle": "Introduction: Cohesive Devices. What are Cohesive Devices", "subtarget": "none19", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Warm-up Activity: Sample Questions, answer using cohesive devices", "subtarget": "none20", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Activity: Restate the Sentences using cohesive devices", "subtarget": "none21", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "  Activity: Fast Talk - Use Cohesive Devices to answer questions within a time limit.", "subtarget": "none22", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Homework: Speaking Activity (General Deadline: June 8)", "subtarget": "", "addsub_class": "", "is_finished": "0" },
                ]
              },
              {
                "title": "Lesson 6. Answer Structure", "target": "none23", "add_class": "", "is_finished": "0",
                "sub_list": [
                  { "subtitle": "Introduction: Answer Structure. What are answer structures?", "subtarget": "none24", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Warm-up Activity: Sample Questions, answer with the proper structure", "subtarget": "none25", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Activity: Restate the Sentences using answer structures", "subtarget": "none26", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Activity: Fast Talk - Use Answer Structures to answer questions within a time limit", "subtarget": "none27", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Homework: Speaking Excercises (General Deadline: June 8)", "subtarget": "none28", "addsub_class": "", "is_finished": "0" },
                ]
              },
              {
                "title": "Week 2 Conclusion", "target": "none29", "add_class": "", "is_finished": "0",
                "sub_list": [
                  { "subtitle": "Chapter Test", "subtarget": "chapterTest", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Additional Resources", "subtarget": "none31", "addsub_class": "", "is_finished": "0" },
                  { "subtitle": "Chapter Test Speaking Exercise", "subtarget": "chapterTestSpeaking", "addsub_class": "", "is_finished": "0" }
                ]
              },
              {
                "title": "True False", "target": "true_false", "add_class": "", "is_finished": "0"
              },

            ]}
            img_src="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          />
          <div className="col ml-2 mr-2">
            <div className="">
              <div className="tab-content" id="sidenav-content">

                <Tab
                  id="v-pills-additionalReading"
                  title="Week 2 Overview"
                  learn_with_teacher_btn="0"
                  breadcrumbs={["Week 2", "Overview"]}
                >
                  <div className="col-12">
                    <h4>Additional Resources</h4>
                    <ul>
                      <li key="1">
                        <Link href="https://www.ielts.org/for-test-takers/test-format" passHref={true}>
                          <a target="_blank" rel="noreferrer">IELTS Test Format</a>
                        </Link>
                      </li>
                      <li key="2">
                        <Link href="https://www.ielts.org/for-test-takers/sample-test-questions" passHref={true}>
                          <a target="_blank" rel="noreferrer">IELTS Sample Test Questions</a>
                        </Link>
                      </li>
                      <li key="3">
                        <Link href="https://www.ielts.org/-/media/publications/information-for-candidates/ielts-information-for-candidates-english-us.ashx" passHref={true}>
                          <a target="_blank" rel="noreferrer">IELTS Information for Candidates</a>
                        </Link>
                      </li>
                      <li key="4">
                        <Link href="https://mintbook.mint05.com/book_script/book.view.php?book_id=NDQ0&book_url=aHR0cHM6Ly9taW50Ym9vay5taW50MDUuY29tL2N1cnJpY3VsdW0vSUVMVFMvc3RlcDEvdmlldy5uZXcuaHRtbA==&page=1&uid=MTA5Nw==" passHref={true}>
                          <a target="_blank" rel="noreferrer">IELTS Workbook Step 1</a>
                        </Link>
                      </li>
                    </ul>

                    {/* <ul>
                      <li key="1"><a target="_blank" href="https://www.ielts.org/for-test-takers/test-format">IELTS Test Format</a></li>
                      <li key="2"><a target="_blank" href="https://www.ielts.org/for-test-takers/sample-test-questions">IELTS Sample Test Questions</a></li>
                      <li key="3"><a target="_blank" href="https://www.ielts.org/-/media/publications/information-for-candidates/ielts-information-for-candidates-english-us.ashx">IELTS Information for Candidates</a></li>
                      <li key="4"><a target="_blank" href="https://mintbook.mint05.com/book_script/book.view.php?book_id=NDQ0&book_url=aHR0cHM6Ly9taW50Ym9vay5taW50MDUuY29tL2N1cnJpY3VsdW0vSUVMVFMvc3RlcDEvdmlldy5uZXcuaHRtbA==&page=1&uid=MTA5Nw==">IELTS Workbook Step 1</a></li>
                    </ul> */}
                  </div>

                </Tab>

                <Tab
                  id="v-pills-week3"
                  title="Introduction: Pauses. What are pauses?"
                  learn_with_teacher_btn="0"
                  breadcrumbs={["Week 2", "Lesson 1. Pauses"]}
                  is_active="1"
                ><Video />
                </Tab>

                <Tab
                  id="v-pills-l1-activity"
                  title="Introduction: Pauses. What are pauses?"
                  learn_with_teacher_btn="1"
                  breadcrumbs={["Week 2", "Lesson 1. Pauses"]}
                >
                  <MultipleChoice
                    id="mch1"
                    title="Activity: Annotate the Paragraphs"
                    instructions="Choose the proper beat indication as asked."
                    question="1. Athletes in our country are not well-supported. __"
                    choices={[
                      { "choice": "///", "is_correct": "1" },
                      { "choice": "//" },
                      { "choice": "/" }
                    ]}
                    answer_explanation="Three beats (///) = Long Pauses. Used for long paragraphs, usually indicated by a period."
                  />

                  <MultipleChoice
                    id="mch2"
                    question="2. Well, I am not sure now __ but I heard they are getting more recognition __ and also incentives when they win or manage to snatch a medal regardless of the sport."
                    choices={[
                      { "choice": "///", "is_correct": "1" },
                      { "choice": "//" },
                      { "choice": "/" }
                    ]}
                    answer_explanation="One beat (/) = Short Pauses. Commonly used for thought groups separated by commas."
                  />
                  <MultipleChoice
                    id="mch3"
                    question="3. and also incentives when they win or manage to snatch a medal regardless of the sport. __"
                    choices={[
                      { "choice": "///", "is_correct": "1" },
                      { "choice": "//" },
                      { "choice": "/" }
                    ]}
                    answer_explanation="Three beats (///) = Long Pauses. Used for long paragraphs, usually indicated by a period."
                  />
                </Tab>

                <Tab
                  id="true_false"
                  title="True False"
                >
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

                </Tab>


                <Tab
                  id="v-pills-week4"
                  title="Warm-up Activity"
                  learn_with_teacher_btn="0"
                  breadcrumbs={["Week 2", "Lesson 1. Pauses"]}
                >
                  <Warmup />

                  <div className="row justify-content-between mt-4">
                    <button className="btn btn-dark col-sm-3">Bookmark Activity</button>
                    <button className="btn btn-dark col-sm-3">Submit & Save</button>
                  </div>
                </Tab>




                <Tab
                  id="v-pills-week5"
                  title="Homework: Speaking Exercises"
                  learn_with_teacher_btn="0"
                  breadcrumbs={["Week 2", "Lesson 1. Pauses"]}
                  deadline="General Deadline: June 8"
                  learning_goals=""
                  keywords=""
                >

                  <div className="writing_container">
                    <HomeworkWritingTest />
                  </div>

                  <div className="speaking_container" style={{ display: "none" }}>
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
                  id="v-pills-homework"
                  title="Homework: Speaking Exercises"
                  breadcrumbs={["Week 2", "Lesson 1. Pauses"]}
                  deadline="General Deadline: June 8"
                  learning_goals="Lorem ipsum dolor sit amet..."
                  keywords="q&a, essay, speaking"
                >
                  <div className="row justify-content-between">
                    <p className="col-sm-6">Instructions here...</p>
                    <p className="col-sm-6 text-end"><b>Score:</b> 10/10</p>
                  </div>

                  <div
                    className="border col-sm-12 mb-3"
                    style={{ maxHeight: "200px", padding: "10px" }}
                  >
                    <p>Homework here...</p>
                  </div>

                  <p className="mb-0"><b>Teacher Notes:</b></p>
                  <p>Lorem ipsum dolor sit amet</p>

                  <div className="row justify-content-between mt-4">
                    <button className="btn btn-dark col-sm-4">Bookmark Homework</button>
                    <button className="btn btn-dark col-sm-3">Retake Homework</button>
                    <button className="btn btn-dark col-sm-3">Submit & Save</button>
                  </div>
                </Tab>


                <Tab
                  id="v-pills-mock-test"
                  title="Chapter Mock Test No. 1"
                  breadcrumbs={["Week 2", "Lesson 1. Pauses"]}
                  deadline="Deadline: June 10"
                  learning_goals="Lorem ipsum dolor sit amet..."
                  keywords="q&a, essay, speaking"
                >
                  <p>Instructions here...</p>

                  <div
                    className="border col-sm-12"
                    style={{ maxHeight: "200px", padding: "10px" }}
                  >
                    <p>Mock test here...</p>
                  </div>

                  <div className="row justify-content-between mt-4">
                    <button className="btn btn-dark col-sm-4">Bookmark Mock Test</button>
                    <button className="btn btn-dark col-sm-3" id="mock_submit">
                      Submit & Save
                    </button>
                  </div>
                </Tab>

                <Tab
                  id="v-pills-mock-test-done"
                  title="Chapter Mock Test No. 1"
                  breadcrumbs={["Week 2", "Week 2 Conclusion"]}
                  deadline="Deadline: June 10"
                  learning_goals="Lorem ipsum dolor sit amet..."
                  keywords="q&a, essay, speaking"
                  is_done="1"
                >
                  <div className="row justify-content-between">
                    <p className="col-sm-6">Instructions here...</p>
                    <p className="col-sm-6 text-end"><b>Score:</b> 10/10</p>
                  </div>

                  <div
                    className="border col-sm-12 mb-3"
                    style={{ maxHeight: "200px", padding: "10px" }}

                  >
                    <p>Mock test here...</p>
                  </div>

                  <p className="mb-0"><b>Teacher Notes:</b></p>
                  <p>Lorem ipsum dolor sit amet</p>

                  <div className="row justify-content-between mt-4">
                    <button className="btn btn-dark col-sm-4">Bookmark Mock Test</button>
                    <button className="btn btn-dark col-sm-3">Retake Mock Test</button>
                    <button className="btn btn-dark col-sm-3">Submit & Save</button>
                  </div>
                </Tab>

                <Tab
                  id="chapterTest"
                  title="Chapter Test. Part 3. Sequencing"
                  learn_with_teacher_btn="0"
                  breadcrumbs={["Week 2", "Conclusion"]}
                  deadline="General Deadline: June 8"
                  learning_goals="Lorem ipsum dolor sit amet..."
                  keywords="q&a, essay, speaking"
                >


                  <Sequencing />


                  <div className="row justify-content-between mt-4">
                    <button className="btn btn-dark col-sm-4">Bookmark Homework</button>
                    <button className="btn btn-dark col-sm-3" id="hw_submit">
                      Submit & Save
                    </button>
                  </div>
                </Tab>

                <Tab
                  id="chapterTestSpeaking"
                  title="Chapter Test. Part 4. Speaking Exercises"
                  learn_with_teacher_btn="0"
                  breadcrumbs={["Week 2", "Conclusion"]}
                  deadline="General Deadline: June 8"
                  learning_goals=""
                  keywords=""
                >

                  <ChapterTestSpeaking />

                </Tab>

                <div
                  className="tab-pane fade"
                  id="v-pills-mock-test-done"
                  role="tabpanel"
                  aria-labelledby="v-pills-mock-test-done-tab"
                >
                  <div className="row mb-3">
                    <div className="col-sm-9">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="#">Week 2</a></li>
                          <li className="breadcrumb-item"><a href="#">Week 2 Conclusion</a></li>
                          <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">Chapter Mock Test No. 1</li>
                        </ol>
                      </nav>
                    </div>
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
                  <div className="row mb-3">
                    <h4 className="col-sm-7">
                      Chapter Mock Test No. 1

                    </h4>
                    <p className="col-sm-5 fw-bold" style={{ color: "#d90000" }}>
                      <span className="float-end">Deadline: June 10</span>
                    </p>
                  </div>
                  <div className="row mb-2">
                    <div className="col-8 border">
                      <p><b>Learning Goals:</b> Lorem ipsum dolor sit amet...</p>
                    </div>
                    <div className="col-4 border">
                      <p><b>Keywords:</b> mock, test</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <Notes />

        </div>

        {/* Microphone Setup Modal  */}
        <SetupModal type="homework" />
      </div>

    </>

  )
}
