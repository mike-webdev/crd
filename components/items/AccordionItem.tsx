import styles from "../../styles/Lesson.module.scss";
import Link from "next/link";

export default function AccordionTitle(props) {

    const items = Array.from(props.items);
   
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={props.id}>
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#"+props.items_id}
                aria-expanded="false"
                aria-controls={props.items_id}
                >
                {props.title}
                
                {
                    props.is_finished == "1" ? (
                        <span className={styles.done}>
                        <i className="fas fa-check-circle text-success"></i>
                </span>
                    ) : (
                        <span className={styles.unfinished}>
                        <i className="far fa-check-circle"></i>
                        </span>
                    )
                }
                    
                </button>
            </h2>
            
            <div
                id={props.items_id}
                className="accordion-collapse collapse"
                aria-labelledby={props.items_id}
            >
                <div className="accordion-body">
                    <ul className={styles["chapter-content"]}>
                        
                       {
                           items.map((value:any, index:number) => {
                               return(
                                    <li key={index}>
                                        <Link href={value.link} passHref>
                                            {value.title}
                                        </Link>
                                        <span className="float-end">
                                            {
                                                value.is_finished == "1" ? (
                                                    <i className="fas fa-check-circle text-success"></i>
                                                ) : (
                                                    <i className="far fa-check-circle"></i>
                                                )
                                            }
                                            {value.minutes}m
                                        </span>
                                    </li>
                               )
                           })
                       }
                    </ul>
                </div>
            </div>
        
        </div>
    )
}

