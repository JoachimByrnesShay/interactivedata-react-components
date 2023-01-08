import ChartsUtils from "../ChartsDisplay/ChartsUtils.js";
import { useRef, useState } from "react";
import { SelectHandling, FilterHandling } from "./ConfigurationHandling.js";
import { MaxNumOfComparisons } from "../App/AppConstants.js";
 
function Configurer(props) {
	//console.log(props.currencySelections);
	const currencySelections = props.currencySelections;
	const setCurrencySelections = props.setCurrencySelections;
	const currencyInfo = props.currencyInfo;
	  // storing of indices as previous values aids the control of visual and functional navigation from index 0 on select lists into filter input (focus in filter input) via onKeyUp condition regarding arrowUp
    const [prevBaseIndex, setPrevBaseIndex] = useState(-1);
    const [prevConvertIndex, setPrevConvertIndex] =useState(-1);

	// control filter UI (display of text input) for both base filter and convert/comparisons filter
	const [baseFilterVal, setBaseFilterVal] = useState("");
	const [convertFilterVal, setConvertFilterVal] = useState("");
	// onChange of each select list, value is set appropriately on select element itself.
	const [baseSelectValue, setBaseSelectValue] = useState(undefined);
	const [convertSelectValue, setConvertSelectValue] = useState(undefined);
	const [animateClearChartsButton, setAnimateClearChartsButton] =useState(false);
	const [animateClearChartsComparisons, setAnimateClearChartsComparisons] =useState(false);
	 // flash message is displayed when user attempts to exceed 1 more than the allowed maximum number of comparison/conversion currency selections.  whether flash is displayed is controlled by boolean value of state variable.
    const [isFlashDisplayed, setIsFlashDisplayed] = useState(false);
    const DefaultChartsUtils = ChartsUtils;

	const Refs = {
		baseFilter: useRef(null),
		convertFilter: useRef(null),
		baseSelect: useRef(null),
		convertSelect: useRef(null),
	};
	return (
		<section className="Configure">
			<div className="Configure-Base">
				<h2 className="Configure-baseHeading">
					Change your base currency from
					{/* using data attrib to set a custom tooltip, displaying title of configured baseValue upon hover, using CSS.  the standard title attribute has default styling which cannot be overriden */}
					<span
						className="Configure-baseHeadingValue"
						data-tooltip-title={
							currencyInfo.fullNames[
								currencySelections.convertFrom
							]
						}
					>
						{currencySelections.convertFrom}
					</span>
				</h2>
				<form className="Configure-baseForm">
					<label className="Configure-baseFilterLabel">
						FILTER
						<input
							ref={Refs.baseFilter}
							name="Base"
							placeholder=""
							id={"Configure-baseFilter"}
							className={"Configure-baseFilter"}
							value={baseFilterVal}
							onKeyUp={(e) =>
								FilterHandling.handleBaseFilterDownArrowToSelect(
									Refs.baseSelect,
									e
								)
							}
							onChange={(e) => setBaseFilterVal(e.target.value)}
						/>
					</label>
					<select
						ref={Refs.baseSelect}
						name="Base"
						size="4"
						className={"Configure-baseSelectBox"}
						value={baseSelectValue}
						onKeyUp={SelectHandling.baseSelectKeys}
						onKeyUp={(e)=>SelectHandling.baseSelectKeys(
						{
							selectState: {
								currencySelections: currencySelections,
								setCurrencySelections: setCurrencySelections,
								setBaseSelectValue: setBaseSelectValue,
								prevBaseIndex: prevBaseIndex,
								setPrevBaseIndex: setPrevBaseIndex,
							},
							refs: {
								baseSelect: Refs.baseSelect,
								baseFilter: Refs.baseFilter,
							},
							e
						}
						)}
						onChange={(e) => setBaseSelectValue(e.target.value)}
					>
						{
							/* using map, option with text of currency abbreviation will be created for all named currencies, filtered as appropriate by input/filter value */
							/* value which is set on select element will change via select onChange and be set to selected option, via state */
							Object.keys(currencyInfo.fullNames)
								.filter((curr) =>
									curr
										.toLowerCase()
										.startsWith(baseFilterVal.toLowerCase())
								)
								.map((curr, index) => (
									<option
										value={curr}
										key={index}
										className={"Configure-baseOption"}
										onClick={(e) => {
											SelectHandling.handleOptionClick_base(
											{
												baseState: { 
													currencySelections: currencySelections,
													setCurrencySelections: setCurrencySelections,
												},
												optionVal: curr,
												e: e,
											}
											)
										}}
									>
										{curr}: {currencyInfo.fullNames[curr]}
									</option>
								))
						}
					</select>
				</form>
			</div>

			<div className="Configure-Comparisons">
				<h2 className="Configure-comparisonHeading">
					Select &lt;= {MaxNumOfComparisons} currencies to compare
				</h2>
				<form className="Configure-comparisonsForm">
					<label className="Configure-comparisonsFilterLabel">
						FILTER
						<input
							ref={Refs.convertFilter}
							name="Convert"
							placeholder=""
							id={"Configure-comparisonsFilter"}
							className={"Configure-comparisonsFilter"}
							value={convertFilterVal}
							onKeyUp={(e) =>
								FilterHandling.handleConvertFilterDownArrowToSelect(
									Refs.convertSelect,
									e
								)
							}
							onChange={(e) =>
								setConvertFilterVal(e.target.value)
							}
						/>
					</label>

					<select
						ref={Refs.convertSelect}
						name="Convert"
						size="4"
						className={"Configure-comparisonsSelectBox"}
						value={convertSelectValue}
						onChange={(e) => setConvertSelectValue(e.target.value)}
						onKeyUp={(e)=>SelectHandling.convertSelectKeys(
						{
							selectState: {
								currencySelections: currencySelections,
								setCurrencySelections:setCurrencySelections,
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
						}
						)}
					>
						{
							// in the case of filtering the convert/comparisons list, we omit the base currency deliberately, i.e. currencySelections.convertFrom, via the below
							Object.keys(currencyInfo.fullNames)
								.filter(
									(curr) =>
										curr
											.toLowerCase()
											.startsWith(
												convertFilterVal.toLowerCase()
											) && //
										curr.toLowerCase() !==
											currencySelections.convertFrom.toLowerCase()
								)
								.map((curr, index) => (
									// if any option represents a currency that is a selected comparison, i.e. in the list already, it is styled especially via class setting as below
									<option
										value={curr}
										key={index}
										className={`Configure-comparisonOption ${
											currencySelections.convertTo.includes(
												curr
											)
												? " is-selectedComparison"
												: ""
										}`}
										onClick={(e) =>
											SelectHandling.handleOptionClick_convert(
											{
												convertState: {
													currencySelections:currencySelections,
													setCurrencySelections:setCurrencySelections,
													setIsFlashDisplayed:setIsFlashDisplayed,

												},

												optionVal: curr,
												e: e,
											}
											)
										
										}
									>
										{curr}: {currencyInfo.fullNames[curr]}
									</option>
								))
						}
					</select>
				</form>
			</div>
			{/* custom tooltips are created using custom data attributes in the below showConfiguration section for both seledcted base and selected comparison values*/}
			<div className="Configure-showCurrentConfigurationContainer">
				<div className="Configure-showCurrentConfiguration">
					<div className="Configure-showBaseContainer">
						<h3>Base:</h3>
						<div className="Configure-showBaseContainer">
							<p
								className="Configure-baseValue"
								data-tooltip-title={
									currencyInfo.fullNames[
										currencySelections.convertFrom
									]
								}
							>
								{currencySelections.convertFrom}
							</p>
						</div>
					</div>
					<div className="Configure-showComparisonsContainer">
						<h3>Comparisons:</h3>
						<div className="Configure-showComparisons">
							{currencySelections.convertTo.map((curr, index) => (
								<p
									className="Configure-comparisonValue"
									key={index}
									data-tooltip-title={
										currencyInfo.fullNames[curr]
									}
								>
									{curr}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* button can clear charts by using setter on currencySelections.convertFrom to remove all elements, then re-render with no comparison charts */}
			<div className="Configure-clearChartsContainer">
				<button
					onClick={()=>ChartsUtils.startAnimateClearChartsButton(setAnimateClearChartsButton)}
					className={`Configure-clearChartsButton ${
						animateClearChartsButton
							? "Configure-clearChartsButton--pressed"
							: ""
					}`}
					onAnimationEnd={()=>ChartsUtils.clearCharts(
						{
						
							[ChartsUtils.setAnimateClearChartsButton]: setAnimateClearChartsButton,
							[ChartsUtils.setAnimateClearChartsComparisons]: setAnimateClearChartsComparisons,
						}
					)}
				>
					Clear charts + comparisons
				</button>
			</div>
		</section>
	);
}

export default Configurer;
