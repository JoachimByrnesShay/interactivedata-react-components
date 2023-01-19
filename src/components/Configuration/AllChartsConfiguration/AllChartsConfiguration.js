// import { useRef, useState } from "react";
// import { MaxNumOfComparisons } from "../../globalConstants.js";
// import BaseConfiguration from "../BaseConfiguration/BaseConfiguration.js";
// import ComparisonsConfiguration from "../ComparisonsConfiguration/ComparisonsConfiguration.js";
// import CurrentConfigurationOverview from "../CurrentConfigurationOverview/CurrentConfigurationOverview.js"
// import PanelToClearCharts from "../PanelToClearCharts/PanelToClearCharts.js";
// import './Configuration.css';



// function MakeAllConfiguration(props) {
// 	//console.log(props.currencySelections);
// 	  // storing of indices as previous values aids the control of visual and functional navigation from index 0 on select lists into filter input (focus in filter input) via onKeyUp condition regarding arrowUp
//     const [prevBaseIndex, setPrevBaseIndex] = useState(-1);
//     const [prevConvertIndex, setPrevConvertIndex] =useState(-1);

// 	// control filter UI (display of text input) for both base filter and convert/comparisons filter
// 	const [baseFilterVal, setBaseFilterVal] = useState("");
// 	const [convertFilterVal, setConvertFilterVal] = useState("");
// 	// onChange of each select list, value is set appropriately on select element itself.
// 	const [baseSelectVal, setBaseSelectVal] = useState(undefined);
// 	const [convertSelectVal, setConvertSelectVal] = useState(undefined);
// 	const [animateClearChartsButton, setAnimateClearChartsButton] =useState(false);
// 	const [animateClearChartsComparisons, setAnimateClearChartsComparisons] =useState(false);
// 	 // flash message is displayed when user attempts to exceed 1 more than the allowed maximum number of comparison/conversion currency selections.  whether flash is displayed is controlled by boolean value of state variable.
//     const [isFlashDisplayed, setIsFlashDisplayed] = useState(false);
//     const currencySelectionsState = {
//     	currencySelections:props.currencySelections,
//     	setCurrencySelections: props.setCurrencySelections,
//     }

// 	const Refs = {
// 		baseFilter: useRef(null),
// 		convertFilter: useRef(null),
// 		baseSelect: useRef(null),
// 		convertSelect: useRef(null),
// 	};
// 	return (
// 		<section className="Configure">
// 			<BaseConfiguration 

// 				currencyInfo={props.currencyInfo}
// 				currencySelections={props.currencySelections}
// 				setCurrencySelections={props.setCurrencySelections}
// 				currencySelectionsState={currencySelectionsState}
// 				appRefs = {{
// 					baseFilter: Refs.baseFilter, 
// 					baseSelect: Refs.baseSelect,
// 				}}
// 				// baseFilterVal={baseFilterVal}
// 				// setBaseFilterVal={setBaseFilterVal}
// 				// baseSelectVal={propsBaseSelectVal}
// 				baseFilterValState = {
// 					{
// 						baseFilterVal: baseFilterVal,
// 						setBaseFilterVal: setBaseFilterVal,
// 					}
// 				}
// 				baseSelectValState = {
// 					{
// 						baseSelectVal: baseSelectVal, 
// 						setBaseSelectVal: setBaseSelectVal
// 					}
// 				}
// 				prevBaseIndexState = {
// 					{
// 					prevBaseIndex: prevBaseIndex,
// 					setPrevBaseIndex: setPrevBaseIndex,
// 				}
				 
// 				}

// 			/>

// 			{/* check if I need to cross reference baseconfigurer refs here also*/}
// 			<ComparisonsConfiguration
// 				currencyInfo = {props.currencyInfo}
// 				currencySelectionsState = {
// 					{currencySelections:props.currencySelections,setCurrencySelections: props.setCurrencySelections,}
// 				}
// 				appRefs = {{
// 					convertFilter: Refs.convertFilter,  
// 					convertSelect: Refs.convertSelect,
// 				}}
// 				convertFilterValState = {
// 					{
// 						convertFilterVal: convertFilterVal,
// 						setConvertFilterVal: setConvertFilterVal,
// 					}
// 				}

// 				convertSelectValState = {
// 					{
// 						convertSelectVal: convertSelectVal,
// 						setConvertSelectVal:setConvertSelectVal,

// 					}
// 				}

// 				prevConvertIndexState = {
// 					{prevConvertIndex, setPrevConvertIndex,}
// 				}

// 				setIsFlashDisplayed = {
// 					setIsFlashDisplayed
// 				}
// 			/>
// 			<CurrentConfigurationOverview  
// 				currencyInfo={props.currencyInfo}
// 				currencySelections={props.currencySelections}
// 			/>
	 
// 			<PanelToClearCharts 
// 				// animateClearChartsButtonState = {{
// 				// 	animateClearChartsButton: animateClearChartsButton, 
// 				// 	setAnimateClearChartsButton: setAnimateClearChartsButton}}
				
// 				animateClearChartsButtonState = {{animateClearChartsButton, setAnimateClearChartsButton}}
				
// 				animateClearChartsComparisonsState = {props.animateClearChartsComparisonsState}
// 				// animateClearChartsComparisonsState = {{
// 				// 	animateClearChartsComparisons: props.animateClearChartsComparisonsState.animateClearChartsComparisons,
// 				// 	setAnimateClearChartsComparisons: props.animateClearChartsComparisonsState.setAnimateClearChartsComparisons
// 				// 	}}
// 			/>
		
// 		</section>
// 	);
// }

// export default MakeAllConfiguration;
