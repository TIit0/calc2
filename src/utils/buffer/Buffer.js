/* export default function Calculator() {

    const [currentOperation, setCurrentOperation] = useState("");


    if (currentOperation) {
        // detect negative \d+\.\d+|\d+|\-\d+|\d+|[^0-9] 
        // normal \d+\.\d+|\d+|[^0-9] 
        const regexCalc = currentOperation.match(/\d+\.\d+|\d+|\-\d+|\d+|[^0-9]/g);
        console.log(regexCalc, "REGEX")
    }


    return (
        <div className="Calculator">
            <Screen />
            <Buttons />
        </div>
    )
} */