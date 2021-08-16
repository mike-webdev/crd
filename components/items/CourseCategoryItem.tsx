import Image from 'next/image'

export default function CourseCategoryItem({ category }) {
    return (
        <>
            <div className="col-sm-3">
                <div className="card">
                    {/* <img src={category.image} className="card-img-top" alt="..." /> */}
                    <Image src={category.image}  layout='responsive' height="83.5" width="124" alt="Image" className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title text-center">{category.name}</h6>
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}
