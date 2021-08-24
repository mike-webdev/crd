import WordBankModal from './WordBankModal'
import data from '../../../sample_data/lessonPreview.json'
import Image from "next/image"

export default function Expressions() {
    // sample data
    const expressionList = data.expressionList

    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {expressionList.map((data, index) => (
                        <button key={index} className={index !== 0 ? "nav-link" : "nav-link active"} id={`nav-${data.name}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${data.name}`} type="button" role="tab" aria-controls={`nav-${data.name}`} aria-selected={index !== 0 ? "true" : "false"}>{data.name}</button>
                    ))}
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                {expressionList.map((data, index) => (
                    <div className={index !== 0 ? "tab-pane fade" : "tab-pane fade show active"} id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`} key={index}>
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <Image src={data.image} width={300} height={150} layout="responsive" alt="Sample Image" /> */}
                                <Image src={data.image} width={300} height={150} layout="responsive" placeholder="blur" blurDataURL={data.image}  alt="Sample Image" />
                                <p className="text-center text-light bg-dark py-2">{data.name}</p>
                            </div>
                            <div className="col-sm-12">
                                <div className="row justify-content-center">
                                    {data.content.map((item) => (
                                        <div className="content_column" key={item.id}>
                                            <button type="button" className="btn btn-lg btn-outline-dark btn-block word_button" data-bs-toggle="modal" data-bs-target="#expressionWordBankModal">{item.text}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <WordBankModal text="expression" />
        </>
    )
}