import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useReducer } from "react";

export const ACTIONS = {
    ADD_DIGIT: "add digit",
    CHOOSE_OPERATION: "choose operation",
    CLEAR: "clear",
    EVALUATE: "evaluate"
}


function reducer(state, {type, payload}) {
    switch(type) {

        /* add digit start */
        case ACTIONS.ADD_DIGIT: 
        if( state.overWrite) {
            return {
                ...state,
                currentOperand: payload.button,
                overWrite: false,
            }
        }
        if (payload.button === "0" && state.currentOperand === "0") return state;
        if (payload.button === "." && state.currentOperand.includes(".")) return state;

        return {
            ...state, 
        currentOperand: `${state.currentOperand || ""}${payload.button}`,
        };
        /*add digit end */

        /* clear start*/
        case ACTIONS.CLEAR: 
            return {};
        /* clear end */

        /* choose operation start */
        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand == null && state.previousOperand == null) return state;

            if(state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.button,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }

            if ( state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.button
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.button,
                currentOperand: null
            }
            /* choose operation end*/

            /*evaluate start */
            case ACTIONS.EVALUATE:
                if (state.currentOperand == null ||
                    state.previousOperand == null ||
                    state.operation == null) {return state};

                    console.log(state)
                    return {
                        ...state,
                        overWrite: true,
                        previousOperand: null,
                        operation: null,
                        currentOperand: evaluate(state)
                    }
    }

}

const FORMATER  = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
});

function formatOperand(operand) {
    if (operand == null ) return;
    const [ integer, decimal] = operand.split(".");
    if (decimal == null) return FORMATER.format(integer)
}

function evaluate({currentOperand, previousOperand, operation}) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return "";


    let computation = ""
    switch (operation) {
        case "+":
            computation = prev + current;
            break;
            case "-":
            computation = prev - current;
            break;
            case "/":
            computation = prev / current;
            break;
            case "x":
            computation = prev * current;
            break;
    }
    return computation.toString();
}

export default function Calculator() {

    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {});

    console.log( currentOperand, "Current operand", previousOperand, "Previous operand", operation, "operation")


    return (
        <div className="Calculator">

            <Screen
            formatOperand={formatOperand}
            currentOperand={currentOperand}
            previousOperand={previousOperand}
            operation={operation} />

            <Buttons
            dispatch={dispatch} />
        </div>
    )
}