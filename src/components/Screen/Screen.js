import "./Screen.css";




export default function Screen({currentOperand, previousOperand, operation}) {

    const formula = (previousOperand || operation) ? `${previousOperand} ${operation}` : "0"


    return (
        <>
            <div className="formula-screen">
                {formula}
            </div>
            <div className="output">{currentOperand ? currentOperand : "0"}</div>
        </>
    )
}