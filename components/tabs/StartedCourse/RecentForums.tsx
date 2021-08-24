interface Forum{
    id: number,
    subject: string,
    content: string
}
interface IProps{
    data: Array<Forum>,
    course_type: string
}

const RecentForums:React.FunctionComponent<IProps> = (props) =>{
    const forums = () => (
        props.data.map((value)=>{
            return(
                <div className="recent-forums-details" key={value.id}>
                    <h6>{value.subject}</h6>
                    <p>{value.content}</p>
                </div>
                )
            })
    )
    return(
        <div className="col-sm-4">
            <div className="box recent-forums">
            <div>
                <h4 className="text-center">Recent Forums</h4>
            </div>
            {
                (props.data.length === 0) ? 
                (<div className="recent-forums-details">No Forum</div>)
                :
                (
                    forums()
                )
            }
            
            </div>
        </div>
    )
}
export default RecentForums;