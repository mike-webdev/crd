
export default function PronounciationCheck() {

    const sentenceList = [
        {
            id: 1,
            content: "I know a lot of you has been feeleeng under the whether lately.",
            audio: ""
        },
        {
            id: 2,
            content: "It’s dot time of the year.",
            audio: ""
        },
        {
            id: 3,
            content: "And the notes to a study done by the Universty of Arizona.",
            audio: ""
        },
        {
            id: 4,
            content: "They discoverd that your keyboards",
            audio: ""
        },
        {
            id: 5,
            content: "Have hundreds of time more bacterah per square inch than a toilet seat.",
            audio: ""
        }
    ]

    return (
        <>
            <ul>
                {sentenceList.map((data, index) => (
                    <div className="mb-4" key={index}>
                        <audio src="" controls style={{width: "100%"}} />
                        <li style={{listStyleType: 'decimal'}} >{data.content}</li>
                    </div>
                ))}
            </ul>
        </>
    )
}