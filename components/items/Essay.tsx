import { useState } from "react";

interface IProps{
    index: number,
    question: string
    rows: number,
    maxWordCount?: number
}
const Essay:React.FunctionComponent<IProps> = (props) =>{
    const [wordsLength, setWordsLength]=useState(0);
    
    const showWordsLength = (input: string) =>{
        const space = /\s+/;
        let words = input.split(space).length-1;
        setWordsLength(words);
    }

    const displayInput = (textLength: number, id:number) =>{
        
        const showLength = (textLength > props.maxWordCount)?
            (<p className="text-danger">You exceeded the required maximum number of words: {textLength}/{props.maxWordCount}</p>) 
            :
            (<p className="float-right">Word count: {textLength}/{props.maxWordCount}</p>);
        
        if(props.maxWordCount === 0 || props.maxWordCount === undefined){ //display plain textArea without word counter
            return(
                <textarea
                    key={"essay-"+id}
                    rows={props.rows}
                    className="w-100"
                    placeholder="type your answer here..."
                />
            )
        }
        else{
            return(
                <>
                <textarea
                key={"essay-"+id}
                rows={10}
                cols={80}
                onChange={event => showWordsLength(event.target.value)}
                />
                {showLength}
                </>
            )
        }
    }
    return(
        <div className="row mb-3" key={props.index}>
            <div className="col-12">
                <label>{props.index+1}. {props.question}</label>
            </div>
            <div className="col-12">
                {displayInput(wordsLength, props.index)}
            </div>
        </div>
    )
} 
export default Essay;