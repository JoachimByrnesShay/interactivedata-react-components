import {ComparisonsSelectHandling} from './utils-comparisonsSelectHandling';

function ComparisonsConfigurationSelect(props) {
	return (
		<select
			ref={props.appRefs.convertSelect}
			name="Convert"
			size="4"
			className={"Configure-comparisonsSelectBox"}
			value={props.convertSelectValState.convertSelectVal}
			onChange={(e) => props.convertSelectValState.setConvertSelectVal(e.target.value)}
			onKeyUp={(e) =>
				ComparisonsSelectHandling.convertSelectKeys(
					{	
						selectState: {
							currencySelections: props.currencySelectionsState.currencySelections,
							setCurrencySelections: props.currencySelectionsState.setCurrencySelections,
							setConvertSelectValue: props.convertSelectValState.setConvertSelectVal,
							setIsFlashDisplayed: props.setIsFlashDisplayed,
							prevConvertIndex: props.prevConvertIndexState.prevConvertIndex,
							setPrevConvertIndex: props.prevConvertIndexState.setPrevConvertIndex,
						},
						appRefs: {
							convertFilter: props.appRefs.convertFilter,
							convertSelect: props.appRefs.convertSelect,
						},
					}, 
					props.MaxNumOfComparisons, 
					e
				)
			}
		>
		{
			// in the case of filtering the convert/comparisons list, we omit the base currency deliberately, i.e. currencySelections.convertFrom, via the below
			Object.keys(props.currencyInfo.fullNames)
				.filter(
					(curr) => curr.toLowerCase().startsWith(props.convertFilterVal.toLowerCase()) && //
						curr.toLowerCase() !== props.currencySelectionsState.currencySelections.convertFrom.toLowerCase()
				).map((curr, index) => (
					// if any option represents a currency that is a selected comparison, i.e. in the list already, it is styled especially via class setting as below
					<option
						value={curr}
						key={index}
						className={`Configure-comparisonOption ${
							props.currencySelectionsState.currencySelections.convertTo.includes(curr)
								? " is-selectedComparison"
								: ""
						}`}
						onClick={(e) =>
							ComparisonsSelectHandling.handleOptionClick_convert({
								convertState: {
									currencySelections: props.currencySelectionsState.currencySelections,
									setCurrencySelections: props.currencySelectionsState.setCurrencySelections,
									setIsFlashDisplayed: props.setIsFlashDisplayed,
								},
								MaxNumOfComparisons: props.MaxNumOfComparisons,
								optionVal: curr,
								e: e,
							})
						}
					>
						{curr}: {props.currencyInfo.fullNames[curr]}
					</option>
				))
		}
		</select>
	) 
}


export default ComparisonsConfigurationSelect;