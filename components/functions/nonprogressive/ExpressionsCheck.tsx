import Image from "next/image";
import { useEffect } from "react";
import Pic1 from '../../../public/images/ExpressionsCheck/img1.jpg'
import Pic2 from '../../../public/images/ExpressionsCheck/img2.jpg'
import Pic3 from '../../../public/images/ExpressionsCheck/img3.jpg'
import MultipleItems from "../../../components/functions/MultipleItems";
import MultiStep from "../../../components/items/MultiStep";

export default function ExpressionsCheck() {


    const images = [
        {
            image: Pic1,
            description: "You’re thinking of what to order in the cafe, so you go to the counter and talk to the person in the counter. What would you say?"
        },
        {
            image: Pic2,
            description: "After making your order, you noticed that all of the indoor seats are already  taken. So you went outside to look for one, but most of the outdoor seats are also  occupied.  Luckily, there's a person sitting in a table for two."
        },
        {
            image: Pic3,
            description: "He/she does not seem to share the table with anyone, and it is also the only vacant space that you found. What will you do or what will you say? "
        },
    ]





    return (
        <>
            <p className="w-75">Go through each scene with your teacher and engage in a conversation in accordance to the description beside the picture.</p>
            <MultiStep>
            {images.map((items, index) => {
                return (
                        <div key={index} className="item">
                            <Image src={items.image} layout="responsive" sizes="100vw" placeholder="blur" alt="image"/>
                            <div className="description">
                                {items.description}
                            </div>
                        </div>
                )
            })}
            </MultiStep>




            <style jsx>{`
        .description{
            padding: 10px;
            margin-top: 20px;
            border: 1px solid #000;
        }
        }
      `}</style>
        </>
    )
}