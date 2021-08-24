import { useRouter } from "next/router";
import data from "../../../sample_data/discussion.json";
import dynamic from "next/dynamic";
import Link from 'next/link'

const Discussion = () => {


  const router = useRouter();

  const main_replies = data.main_replies;
  const RichTextEditor = dynamic(() => import("../../../components/items/RichTextEditor"), { ssr: false }); //avoiding error
  const posts = () => (
    main_replies.map((value, index) => (

      <div className="accordion-item pb-5 mb-5" key={index}>
        <h2 className="accordion-header" id={"panelsStayOpen-heading" + index}>
          <div className="user-forum-header h5">
            <i className="fa fa-user"></i>
            <span>{value.user}</span>
          </div>
          <p className="h6 user-main-reply">{value.reply}</p>
          <div className="forum-buttons-section">
            <button className="btn btn-small text-primary">REPLY</button>
            <button className="btn btn-small"><i className="fa fa-thumbs-up"></i> 10</button>
            <button className="btn btn-small"><i className="fa fa-thumbs-down"></i> 5</button>
          </div>
          {(value.subreplies.length === 0) ? "" :
            (
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + index} aria-expanded="true" aria-controls={"panelsStayOpen-collapse" + index}>
                See replies
              </button>
            )}

        </h2>
        {(value.subreplies.length === 0) ? "" :
          (
            <div id={"panelsStayOpen-collapse" + index} className="accordion-collapse collapse show  mb-5" aria-labelledby={"panelsStayOpen-heading" + index}>
              <div className="accordion-body">
                {value.subreplies.map((val, sub_id) => (
                  <div className="accordion-item" key={sub_id}>
                    <h2 className="accordion-header" id={"panelsStayOpen-heading" + index + sub_id}>
                      <div className="user-forum-header h5">
                        <i className="fa fa-user"></i>
                        <span>{val.user}</span>
                      </div>
                      <p className="h6 user-main-reply">{val.user}</p>
                      <div className="forum-buttons-section">
                        <button className="btn btn-small text-primary">REPLY</button>
                        <button className="btn btn-small"><i className="fa fa-thumbs-up"></i> 10</button>
                        <button className="btn btn-small"><i className="fa fa-thumbs-down"></i> 5</button>
                      </div>
                    </h2>
                  </div>
                ))}

              </div>
            </div>
          )

        }

      </div>
    ))
  )
  return (
    <div className="container my-5">
      <Link href="/student" passHref>
        <a>BACK</a>
      </Link>


      <div className="course-forum mt-3">
        <div className="topic-header">
          <div className="topic-forum">
            <h3>TOPIC: {router.query.thread_title}</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam deserunt eligendi exercitationem praesentium. Tenetur quibusdam eos sit fugiat nostrum incidunt a magnam natus officiis?
          </p>
        </div>
        <div className="accordion" id="accordionPanelsStayOpen">
          {posts()}
        </div>
      </div>
      <div className="mt-5 reply-section row">
        <div className="reply-section-header">
          <h4 className="col">ME:</h4>
        </div>
        <RichTextEditor />
      </div>
      <button className="btn btn-secondary mt-3 float-right">POST</button>
    </div>
  );
};

export default Discussion;