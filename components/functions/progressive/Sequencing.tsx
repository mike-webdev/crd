import test from '../../../sample_data/activities.json'
import { shuffle } from '../../../public/scripts/utils';
import { useEffect, useState } from 'react';

const Sequencing = () =>{
    const [data, setData] = useState(test.sequencing_chapter_test);
    useEffect(()=>{
        data.map((value) =>{
            let shuffledData = [...data];
            // shuffledData.sentences = shuffle(value.sentences); 
            shuffledData['sentences'] = shuffle(value.sentences); 
            setData(shuffledData);
        })
    },[]) //execute once
    
      
    return(
        <>
        <p>Following the P-R-E-P structure, write numbers into the boxes to place the sentences in order.</p>
        <div className="mt-3">
            { (data.length === 0)? (<p>No Data</p>) : (
              data.map((value,index)=>(
                <div key={index} className="mb-4">
                    <div className="row">
                        <label className="col-12 mb-1" > <b> {index+1}. {value.question} </b> </label>
                    </div>
                    {value.sentences.map((item, i)=>(
                        <div className="row mb-1" key={i}>
                            <div className="col-1">
                                <input 
                                className="form-control sequencing-textbox"
                                maxLength={1} 
                                type="number"
                                min={0}
                                />
                            </div>
                            <div className="col-10">
                                <div className="card p-2">
                                {item.sentence}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                  
                </div>
              ))  
            )}
        </div>
        </>
    )
}
export default Sequencing;