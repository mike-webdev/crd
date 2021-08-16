import styles from "../../styles/Lesson.module.scss";

export default function Notes() {
    function hideNav(){        
        var notes_container = document.getElementById("sidebar-right");

        notes_container.addEventListener('transitionend', function () {
            notes_container.style.cssText="padding-left:0; padding-right:0; width:0";
            document.getElementById("notes_icon").style.display="block";
        }, {
            once: true
        });
      }
    
      function showNav(){    
        var notes_container = document.getElementById("sidebar-right");
        setTimeout(function () {
            notes_container.style.cssText="padding-right: calc(var(--bs-gutter-x)/ 2);padding-left: calc(var(--bs-gutter-x)/ 2); width: null; display:block";
            document.getElementById("notes_icon").style.display="none";

        }, 0);
      }


    return(
        <>
        <div id="notes_icon"  onClick={showNav}><i className="fas fa-sticky-note icons"></i></div>
        <div className="col-sm-3 text-center" id="sidebar-right">
            <div id="nav-right" style={{height: "100%"}}>
                <div className={styles["notes-container"]}>
                <div className="d-grid gap-2 col-10 mx-auto mb-2">
                    
                    <a className="btn btn-dark" id="closeNav2" onClick={hideNav}
                    ><i className="fas fa-sticky-note icons"></i
                    ></a>
                </div>

                <textarea
                    name="notes"
                    id="notes"
                    className={styles.notes+" form-control w-100"}
                    placeholder="Type your notes here"
                    cols={30} 
                    rows={20}
                ></textarea>
                <div className="d-grid gap-2 col-10 mx-auto mb-2" id="savenote">
                    <button className="btn btn-dark mt-2">Save Note</button>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}