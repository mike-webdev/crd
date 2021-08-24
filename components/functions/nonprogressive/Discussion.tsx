
export default function Discussion() {
    return (
        <>
            <p>Express yourself! Answer the following questions and discuss your answer with the teacher.</p>
            <div className="note_area mt-5 text-center">
                <p><strong>Do you agree that germ exposure makes the body (immune system) stronger? Why? Why not?</strong></p>
            </div>

            <div className="note_area mt-5 text-center" style={{pointerEvents: 'none', opacity: '0.4'}}>
                <p><strong>Which would you rather set up, a handwashing station or a hand sanitizing station? Why?</strong></p>
            </div>

            <div className="note_area mt-5 text-center" style={{pointerEvents: 'none', opacity: '0.4'}}>
                <p><strong>With the COVID-19 pandemic, have you become more health conscious? How?</strong></p>
            </div>

            <style jsx>{`
                .note_area {
                    border: 1px solid #000;
                    padding: 60px 10px;
                }
            `}</style>
        </>
    )
}