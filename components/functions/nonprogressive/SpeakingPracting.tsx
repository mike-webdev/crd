import Image from 'next/image'
import SpeakingImage from '../../../public/images/SpeakingPractice/speakingpractice.jpg'

export default function SpeakingPractice() {


    return (
        <>
            <p>
                <strong>A. Summary. </strong>Summarize the video in not more than three sentences.
            </p>

            <Image src={SpeakingImage} layout="responsive" sizes="100vw" alt="Speaking Practice" />

            <div className="row mt-4">
                <div className="col-sm-12">
                    <a className="btn btn-dark">Bookmark Activity</a>
                    <a className="btn btn-dark float-end">Submit and Save</a>
                </div>
            </div>
        </>
    );
}
