// import { Popover } from 'react-tiny-popover'
import { useState } from 'react'
import dynamic from 'next/dynamic';

const Popover = dynamic(
    () => import('react-tiny-popover').then(mod => mod.Popover),
    { ssr: false }
)

export default function ConnectTeacher(props) {

    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [teacher, setTeacher] = useState([])
    const [connect, setConnect] = useState("")

    // sample data
    const teacherList = [
        {
            id: 1,
            image: "/images/profile.png",
            name: "Patty",
            rate: 9.8,
            points: 268,
            course: "#ielts",
            status: "online"
        },
        {
            id: 2,
            image: "/images/profile.png",
            name: "Cess",
            rate: 9.6,
            points: 240,
            course: "#ielts",
            status: "online"
        },
        {
            id: 3,
            image: "/images/profile.png",
            name: "Iggy",
            rate: 9.7,
            points: 258,
            course: "#ielts",
            status: "offline"
        },
    ]

    // change state data to clicked item data
    const setData = (data) => {
        setIsPopoverOpen(!isPopoverOpen)
        setTeacher(data)
    }

    const connectWithTeacher = (name) => {
        setIsPopoverOpen(!isPopoverOpen)
        setConnect("You are now connected with Teacher " + name)
    }

    return (
        <>
            <div className="mt-3">
                <i className="fas fa-edit fa-lg mb-3"> My Teachers:</i><br/>
                {props.connect === "true" ? (
                    <Popover
                        isOpen={isPopoverOpen}
                        positions={['top', 'bottom', 'left', 'right']} 
                        content={
                            <div className="text-center popover_content">
                                <img className="img-thumbnail" src={teacher['image']} alt="Image"/> <br/>
                                {/* {teacher['status'] === "online" ? (
                                    <i className="fas fa-circle fa-sm text-success"></i>
                                ) : (
                                    <i className="fas fa-circle fa-sm text-danger"></i>
                                )} */}
                                <p><strong>{teacher['name']}</strong></p>  
                                <button type="button" className="btn btn-sm btn-secondary border rounded" onClick={() => connectWithTeacher(teacher['name'])}>Connect with teacher</button>
                            </div>
                        }
                    >
                        <>
                            {teacherList.map((data, index) => (
                                <>
                                    <span onClick={() => setData(data)}>
                                        <img className="img-thumbnail" src={data.image} alt="Image" title={data.name}/>
                                    </span>
                                    
                                    {data.status === "online" ? (
                                        <i className="fas fa-circle fa-sm text-success"></i>
                                    ) : (
                                        <i className="fas fa-circle fa-sm text-danger"></i>
                                    )}
                                </>
                            ))}

                            <div className="mt-3">
                                <p><strong>{connect}</strong></p>
                            </div>
                        </>
                    </Popover>
                ) : (
                    <>
                        {teacherList.map((data, index) => (
                            <>
                                <img className="img-thumbnail" src={data.image} alt="Image" title={data.name}/>
                                {data.status === "online" ? (
                                    <i className="fas fa-circle fa-sm text-success"></i>
                                ) : (
                                    <i className="fas fa-circle fa-sm text-danger"></i>
                                )}
                            </>
                        ))}
                    </>
                )}
                
            </div>

            <style jsx>{`
                .img-thumbnail {
                    width: 50px;
                    height: auto;
                    margin-right: 5px;
                    border-radius: 50%;
                }
                .fa-circle {
                    position: absolute;
                    margin-left: -20px;
                }
                .popover_content {
                    position: relative;
                    padding: 10px;
                    background-color: #cacaca;
                    width: 200px;
                    top: 500px;
                    left: 500px;
                }
            `}</style>
        </>
    )
}
