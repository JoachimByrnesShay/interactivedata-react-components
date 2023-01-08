import {FilterHandling} from '../filterHandlingUtils.js';

function ComparisonsConfigurationForm(props) {
	return (
		<form className="Configure-comparisonsForm">
			<label className="Configure-comparisonsFilterLabel">
				FILTER
				<input
					ref={props.appRefs.convertFilter}
					name="Convert"
					placeholder=""
					id={"Configure-comparisonsFilter"}
					className={"Configure-comparisonsFilter"}
					value={props.convertFilterValState.convertFilterVal}
					onKeyUp={(e) =>
						FilterHandling.handleConvertFilterDownArrowToSelect(
							props.appRefs.convertSelect,
							e
						)
					}
					onChange={(e) => props.convertFilterValState.setConvertFilterVal(e.target.value)}
				/>
			</label>

			{/*<select
				ref={Refs.convertSelect}
				name="Convert"
				size="4"
				className={"Configure-comparisonsSelectBox"}
				value={convertSelectValue}
				onChange={(e) => setConvertSelectValue(e.target.value)}
				onKeyUp={(e) =>
					SelectHandling.convertSelectKeys({
						selectState: {
							currencySelections: currencySelections,
							setCurrencySelections: setCurrencySelections,
							setConvertSelectValue: setConvertSelectValue,
							setIsFlashDisplayed: setIsFlashDisplayed,
							prevConvertIndex: prevConvertIndex,
							setPrevConvertIndex: setPrevConvertIndex,
						},
						refs: {
							convertFilter: Refs.convertFilter,
							convertSelect: Refs.convertSelect,
						},
						e: e,
					})
				}
			>
				{
					// in the case of filtering the convert/comparisons list, we omit the base currency deliberately, i.e. currencySelections.convertFrom, via the below
					Object.keys(currencyInfo.fullNames)
						.filter(
							(curr) =>
								curr
									.toLowerCase()
									.startsWith(convertFilterVal.toLowerCase()) && //
								curr.toLowerCase() !==
									currencySelections.convertFrom.toLowerCase()
						)
						.map((curr, index) => (
							// if any option represents a currency that is a selected comparison, i.e. in the list already, it is styled especially via class setting as below
							<option
								value={curr}
								key={index}
								className={`Configure-comparisonOption ${
									currencySelections.convertTo.includes(curr)
										? " is-selectedComparison"
										: ""
								}`}
								onClick={(e) =>
									SelectHandling.handleOptionClick_convert({
										convertState: {
											currencySelections: currencySelections,
											setCurrencySelections:
												setCurrencySelections,
											setIsFlashDisplayed: setIsFlashDisplayed,
										},

										optionVal: curr,
										e: e,
									})
								}
							>
								{curr}: {currencyInfo.fullNames[curr]}
							</option>
						))
				}
			</select>*/}
		</form>

	)
}



export default ComparisonsConfigurationForm;