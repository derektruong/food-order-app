import {useState} from 'react';

const useForm = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouch, setIsTouch] = useState(false);

	const isValueValid = validateValue(enteredValue);
	const hasError = !isValueValid && isTouch;

	const valueBlurHandler = (event) => {
		setIsTouch(true);
	}

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	}

	const reset = () => {
		setEnteredValue("");
		setIsTouch(false);
	}

	return {
		value: enteredValue,
		isValid: isValueValid,
		hasError: hasError,
		valueBlurHandler,
		valueChangeHandler,
		reset
	}
}

export default useForm;