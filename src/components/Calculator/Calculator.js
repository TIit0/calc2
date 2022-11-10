import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useReducer } from "react";

export default function Calculator() {


    return (
        <div className="Calculator">
            <Screen />
            <Buttons />
        </div>
    )
}