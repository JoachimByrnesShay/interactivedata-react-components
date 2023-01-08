import {SelectHandling} from "../selectHandlingUtils.js";

function BaseConfigurationOption(props) {
	const handleOptionClick_baseArg = {
		baseState: {
			currencySelections:
				props.currencySelectionsState.currencySelections,
			setCurrencySelections:
				props.currencySelectionsState.setCurrencySelections,
		},
	};
	return (
		<option
			value={props.currency}
			className={"Configure-baseOption"}
			onClick={(e) => {
				SelectHandling.handleOptionClick_base(
					// baseState.setCurrencySelections({ ...baseState.currencySelections, convertFrom: optionVal })
					{ ...handleOptionClick_baseArg, optionVal: props.currency },
					e
				);
			}}
		>
			{props.currency}: {props.currencyInfo.fullNames[props.currency]}
		</option>

	)
	
}



export default BaseConfigurationOption;