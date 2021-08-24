import Image from 'next/image'
import SpeakingImage from '../../../public/images/SpeakingPractice/speakingpractice.jpg'

export default function SpeakingPractice() {


    return (
        <>
            <p>
                Summarize the video in not more than three sentences.
            </p>

            <Image src={SpeakingImage} layout="responsive" sizes="100vw" alt="Speaking Practice" />
        </>
    );
}
