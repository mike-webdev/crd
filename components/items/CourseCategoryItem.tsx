import Image from 'next/image'

export default function CourseCategoryItem({ category }) {
    return (
        <>
            <div className="col-sm-6">
                <div className="card">
                    {/* <img src={category.image} className="card-img-top" alt="..." /> */}
                    <Image src={category.image}  layout='responsive' height="83.5" width="124" alt="Image" className="card-img-top"/>
                    <div className="card-header">
                        <h6 className="card-title text-center">{category.name}</h6>
                    </div>
                    <div className="card-body bg-dark">
                        <h6 className="text-white">TOPIC LIST</h6>
                    </div>
                    {category.topics.map((topic,index)=>{
                        if(index < 3){ //with stars
                            return (
                                <div className="card-body bordered-card" key={index}>
                                    <small><i className="fa fa-star text-warning"></i> <a href="#">{topic}</a></small>
                                </div>
                            )
                        }else{
                            return(
                                <div className="card-body bordered-card" key={index}>
                                    <small><a href="#">{topic}</a></small>
                                </div>
                            )
                        }
                    })
                    }
                </div>
                <br/>
            </div>
        </>
    )
}
