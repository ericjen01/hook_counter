/* NOT IN USE

import { useContext } from "react";
import CounterContex from "../CounterContext";

const Button = ({ type, label }) => {
	const [counter, dispatch] = useContext(CounterContex);
	return <button onClick={() => dispatch({ type })}>{label}</button>;
};

export default Button;
*/