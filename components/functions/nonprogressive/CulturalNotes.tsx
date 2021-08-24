import Image from "next/image";
import Pic1 from '../../../public/images/Introduction/1.jpg'
import Pic2 from '../../../public/images/Introduction/2.jpg'
import Pic3 from '../../../public/images/Introduction/3.jpg'

export default function CulturalNotes() {

    // sample data
    const images = [
        {
            image: Pic1,
            name: "Pam"
        },
        {
            image: Pic2,
            name: "Jim"
        },
        {
            image: Pic3,
            name: "Dwight"
        }
    ]

    return (
        <>
            <div className="card">
                <h5 className="card-header"><strong>Cultural Notes / Useful Facts</strong></h5>
                <div className="card-body">
                    <ul>
                        <li>The idea that germ exposure makes the immune system stronger has something to do with Hygiene Hypothesis. It is a theory introduced in the 1980s which suggests that too clean environment may not help children develope their immune system.</li>
                        <li>The vampire sneeze/cough method is a reference to the signature move of the fictional vampire character Dracula from Transylvania, Romania.</li>
                    </ul>
                </div>
            </div>

            <div className="col-sm-12 mt-3">
                <div className="card">
                    <h5 className="card-header"><strong>In the Video</strong></h5>
                    <div className="card-body">
                        {images.map((data, index) => (
                            <div className="intro_image_column" key={index}>
                                <Image src={data.image} width={150} height={150} layout="responsive" alt="Intro Image" />&nbsp;
                                <div className="description text-center">
                                    <p>{data.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </>
    )
}