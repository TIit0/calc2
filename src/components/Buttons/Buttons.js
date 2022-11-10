import "./Buttons.css";
import buttonArr from "../../utils/data/buttonsArr.json"
import  {ACTIONS}  from "../Calculator/Calculator";

export default function Buttons({dispatch}) {



    return (
        <div className="button-grid">

            {buttonArr.map( button => {
                let betterName;
                let isNumber;
                switch(button) {
                    case("="):
                    betterName = "equal";
                    isNumber = false;
                    break;
                    case("/"):
                    betterName = "divide";
                    isNumber = false;
                    break;
                    case("+"):
                    betterName = "add";
                    isNumber = false;
                    break;
                    case("-"):
                    betterName = "subtract";
                    isNumber = false;
                    break;
                    case("."):
                    betterName = "decimal";
                    isNumber = true;
                    break;
                    case("x"):
                    betterName = "multiply";
                    isNumber = false;
                    break;
                    default:
                        betterName = null;
                        isNumber = true;
                }

                return (
                    <button 
                    className={betterName ? `operator btn ${betterName}` : `btn btn${button}`} 
                    key={button}
                    onClick={() => {
                        if (button === "AC") {
                            dispatch({type: ACTIONS.CLEAR})
                        }
                        else if (button === "=") {
                            dispatch({type: ACTIONS.EVALUATE})
                        }
                        else {
                            dispatch(
                                {type: isNumber ? ACTIONS.ADD_DIGIT : ACTIONS.CHOOSE_OPERATION,
                                payload: {button: button.toString()}}
                                )
                        }
                    }}>
                    {button}
                    </button>
                )
            })}
        </div> /* end of <div className="button-grid"> */
    );
}