export default function LessonTab(props, children) {
    const is_active = props.is_active;

    return(
        <div
        className={is_active == 1 ? "show active tab-pane fade" : "tab-pane fade"  }
        id={props.id}
        role="tabpanel"
        aria-labelledby={props.id+"-tab"}
        >


        {props.children}

        </div>
    )
}