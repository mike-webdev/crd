import test from '../../../sample_data/activities.json'
import { shuffle } from '../../../public/scripts/utils';
import DraggableItem from '../../items/DraggableItem';
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
        <p>Following the P-R-E-P structure, move the items to its correct sequence.</p>
        <div className="mt-3">
            { (data.length === 0)? (<p>No Data</p>) : (
              data.map((value,index)=>(
                <div key={index} className="mb-4">
                    <div className="row">
                        <label className="col-12 mb-1" > <b> {index+1}. {value.question} </b> </label>
                    </div>
                    

                    <DraggableItem
                        data={value.sentences}
                        key={"dnd-"+index}
                    />
                    
                  
                </div>
              ))  
            )}
        </div>
        </>
    )
}
export default Sequencing;