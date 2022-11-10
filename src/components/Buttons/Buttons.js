import "./Buttons.css";
import buttonArr from "../../utils/data/buttonsArr.json"

export default function Buttons({}) {


function handleClick(e) {


}
    return (
        <div className="button-grid">

            {buttonArr.map( button => {
                let betterName
                switch(button) {
                    case("="):
                    betterName = "equal";
                    break;
                    case("/"):
                    betterName = "divide";
                    break;
                    case("+"):
                    betterName = "add";
                    break;
                    case("-"):
                    betterName = "subtract";
                    break;
                    case("."):
                    betterName = "decimal";
                    break;
                    case("x"):
                    betterName = "multiply";
                    break;
                    default:
                        betterName = null;
                }

                return (
                    <button 
                    className={betterName ? `operator btn ${betterName}` : `btn btn${button}`} 
                    key={button}
                    value={(button === "x") ? "*" : button}
                    onClick={handleClick}>
                    {button}
                    </button>
                )
            })}
        </div> /* end of <div className="button-grid"> */
    );
}