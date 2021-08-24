import Link from "next/link";
import React from "react";


export interface ForumData{
    title: string,
    threads: string[]
}
interface ForumsData{
    id: number,
    main_title: string,
    forum: Array<ForumData>
}
interface IProps {
    data: Array<ForumsData>
}
interface Thread {
    topic: string;
}

const ThreadPost=(props:Thread)=>{
    return(
        <Link href="/student/Forum/[thread_title]" as={`/student/Forum/${props.topic}`}>
            <a>{props.topic}</a>
        </Link>
    )
}

const Forums:React.FunctionComponent<IProps> = (props) =>{
    console.log(props);
    return(
        <div className="col-sm-8">
            <div className="course-forum">
                <h3>COURSE FORUMS</h3>
                <p>
                    This is where you can interact with other students who take
                    this course. Click here and say hi.
                </p>
            </div>
            <br />
            <a className="forum-btn" type="button" href="#createthread">
                <h5><i className="fas fa-plus"></i>&nbsp;Create a Forum</h5>
            </a>
            <br />
            {props.data.map((value,index)=>{
                return(
                    <div className="box-forum" key={index} >
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <h4 className="text-center forum-title">{value.main_title}</h4>
                                </div>
                                {value.forum.map((val, i)=>{
                                   let value_id: string = value.id.toString();
                                   let index_str: string = i.toString();
                                   let forum_id = value_id+index_str;
                                    return(
                                        <div
                                        className="accordion accordion-flush"
                                        id={"forum-accordion"+forum_id}
                                        key={forum_id}
                                        >
                                        <div className="accordion-item">
                                            <h2
                                            className="accordion-header"
                                            id={"forum-accordion"+forum_id+"-head"+forum_id}
                                            >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={"#forum-accordion"+forum_id+"-collapse"+forum_id}
                                                aria-expanded="false"
                                                aria-controls={"forum-accordion1-collapse"+forum_id}
                                            >
                                            {val.title}<span className="done"></span>
                                            </button>
                                            </h2>
                                            <div
                                            id={"forum-accordion"+forum_id+"-collapse"+forum_id}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={"forum-accordion"+forum_id+"-head"+forum_id}
                                            data-bs-parent={"#forum-accordion"+forum_id}
                                            >
                                            <div className="accordion-body">
                                                <ul className="chapter-content">
                                                {val.threads.map((thread, thread_id)=>(
                                                    <li key={thread_id}>
                                                        <ThreadPost topic={thread}/>
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
            
            
        </div>
    );//endreturn
}
export default Forums;