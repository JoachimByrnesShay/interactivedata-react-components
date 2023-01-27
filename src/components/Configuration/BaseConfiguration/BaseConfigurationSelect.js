import {BaseSelectHandling} from './utils-baseSelectHandling';

function BaseConfigurationSelect(props) {
	const onKeyUpArg = {
		selectState: {
			currencySelections: props.currencySelectionsState.currencySelections,
			setCurrencySelections: props.currencySelectionsState.setCurrencySelections,
			setBaseSelectValue: props.baseSelectValState.setBaseSelectVal,
			prevBaseIndex: props.prevBaseIndexState.prevBaseIndex,
			setPrevBaseIndex: props.prevBaseIndexState.setPrevBaseIndex,
		},
		appRefs: {
			baseSelect: props.appRefs.baseSelect,
			baseFilter: props.appRefs.baseFilter,
		},
	}

	function currencyNamesToOptions(names) {
		/* using map, option with text of currency abbreviation will be created for all named currencies, filtered as appropriate by input/filter value */
		/* value which is set on select element will change via select onChange and be set to selected option, via state */
		return (names
			.filter((currency) =>
				currency.toLowerCase().startsWith(
					props.baseFilterValState.baseFilterVal.toLowerCase()
				)
			).map((currency, index) => (
				<BaseConfigurationOption  
				    key={index}
					currency={currency}
					currencyInfo={props.currencyInfo}
					currencySelectionsState={props.currencySelectionsState}		
				/>
		)))
	}

	return (
		<select
			ref={props.appRefs.baseSelect}
			name="Base"
			size="4"
			className={"Configure-baseSelectBox"}
			value={props.baseSelectValState.baseSelectVal}
			onKeyUp={(e) => BaseSelectHandling.baseSelectKeys(onKeyUpArg, e)}
			onChange={(e) => props.baseSelectValState.setBaseSelectVal(e.target.value)}
		>
			{currencyNamesToOptions(Object.keys(props.currencyInfo.fullNames))}
		</select>
	)
}

function BaseConfigurationOption(props) {
	const handleOptionClick_baseArg = {
		baseState: {
			currencySelections: props.currencySelectionsState.currencySelections,
			setCurrencySelections: props.currencySelectionsState.setCurrencySelections,
	}};

	return (
		<option
			value={props.currency}
			className={"Configure-baseOption"}
			onClick={(e) => { BaseSelectHandling.handleOptionClick_base(
					{ ...handleOptionClick_baseArg, optionVal: props.currency },
					e );
			}}
		>
			{props.currency}: {props.currencyInfo.fullNames[props.currency]}
		</option>
	)
}

export default BaseConfigurationSelect;
