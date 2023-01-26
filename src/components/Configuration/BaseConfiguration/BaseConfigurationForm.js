import {FilterHandling} from "../utils-filterHandling.js";
import BaseConfigurationSelect from './BaseConfigurationSelect.js';
import "./BaseConfiguration.css";

// multiple related baseConfiguration functional components are defined in this single file
// to minimize complexity:  BaseConfigurationForm and 2 children- BaseConfigurationHeading and BaseConfigurationFilter
// due to its greater complexity, BaseConfigurationSelect component has its own file as a peer in the current file's directory
function BaseConfigurationForm(props) {
	const currencySelectionsState = {
		currencySelections: props.currencySelections,
		setCurrencySelections: props.setCurrencySelections,
	}
	return (
		<div className="Configure-Base">
			<form className="Configure-baseForm">
				<BaseConfigurationHeading {...props} />
				<BaseConfigurationFilter 
					appRefs = {props.appRefs}
					baseFilterValState = {props.baseFilterValState}
				/>
				<BaseConfigurationSelect {...props} />
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
				data-tooltip-title={props.currencyInfo.fullNames[props.currencySelections.convertFrom]}
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
					FilterHandling.handleFilterDownArrowToSelect(props.appRefs.baseSelect, e)
				}
				onChange={(e) => props.baseFilterValState.setBaseFilterVal(e.target.value)}
			/>
		</label>
	)	
}

export default BaseConfigurationForm;