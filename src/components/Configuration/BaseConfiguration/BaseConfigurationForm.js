//import BaseConfigurationHeading from './BaseConfigurationHeading.js';
//import BaseConfigurationForm from './BaseConfigurationForm.js';
//import BaseConfigurationFilter from './BaseConfigurationFilter.js';
import {FilterHandling} from "../filterHandlingUtils.js";
import BaseConfigurationSelect from './BaseConfigurationSelect.js';
import "./BaseConfiguration.css";


function BaseConfigurationForm(props) {
	const {baseSelectVal,setBaseSelectVal} = props.baseSelectValState;
	//const {baseFilterVal,setBaseFilterVal} = props.baseFilterValState;
	const currencySelectionsState = {
		currencySelections: props.currencySelections,
		setCurrencySelections: props.setCurrencySelections,
	}
	return (

		<div className="Configure-Base">
	
			<form className="Configure-baseForm">
				<BaseConfigurationHeading  
				   {...props}
				/>
				<BaseConfigurationFilter 
					appRefs = {props.appRefs}
					baseFilterValState = {props.baseFilterValState}
				/>
				<BaseConfigurationSelect 
					{...props}
				/>
			</form>
		</div>
	)
}

function BaseConfigurationHeading(props) {
	return (
		<h2 className="Configure-baseHeading">
					Change your base currency from
					{/* using data attrib to set a custom tooltip, displaying title of configured baseValue upon hover, using CSS.  the standard title attribute has default styling which cannot be overriden */}
					<span
						className="Configure-baseHeadingValue"
						data-tooltip-title={
							props.currencyInfo.fullNames[
								props.currencySelections.convertFrom
							]
						}
					>
						{props.currencySelections.convertFrom}
					</span>
				</h2>
	)
}


function BaseConfigurationFilter(props) {
	
	return (
		<label className="Configure-baseFilterLabel">
				FILTER
				<input
					ref={props.appRefs.baseFilter}
					name="Base"
					placeholder=""
					id={"Configure-baseFilter"}
					className={"Configure-baseFilter"}
					value={props.baseFilterValState.baseFilterVal}
					onKeyUp={(e) =>
						FilterHandling.handleFilterDownArrowToSelect(
							props.appRefs.baseSelect,
							e
						)
					}
					onClick={()=>{
						//console.log(props.appRefs.baseSelect.CSS2Properties);
						//alert(props.appRefs.baseSelect.selectedIndex)
						//alert(props.baseSelectValState.baseSelectVal)
				//		alert(props.prevBaseIndexState.prevBaseIndex)
				//		props.baseSelectValState.setBaseSelectVal(undefined)
				//		props.appRefs.baseSelect.selectedIndex=props.thisSelectedIndexState.setThisSelectedIndex(undefined);   // baseSelectValState = { 				// 	{ 				// 		baseSelectVal: baseSelectVal,  				// 		setBaseSelectVal: setBaseSelectVal 				// 	} 				// } 				// prevBaseIndexState = { 				// 	{ 				// 	prevBaseIndex: prevBaseIndex, 				// 	setPrevBaseIndex: setPrevBaseIndex, 				// }
				//		props.prevBaseIndexState.setPrevBaseIndex(-1)
						// selectState.setBaseSelectValue(undefined);
                //appRefs.baseSelect.current.selectedIndex = -1;
                //props.appRefs.baseFilter.current.focus();


                // baseSelectValState = {
				// 	{
				// 		baseSelectVal: baseSelectVal, 
				// 		setBaseSelectVal: setBaseSelectVal
				// 	}
				// }
				// prevBaseIndexState = {
				// 	{
				// 	prevBaseIndex: prevBaseIndex,
				// 	setPrevBaseIndex: setPrevBaseIndex,
				// }
				 
					}}

					onChange={(e) => props.baseFilterValState.setBaseFilterVal(e.target.value)}
				/>
			</label>
	)
	
}

export default BaseConfigurationForm;