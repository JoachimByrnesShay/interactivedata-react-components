import BaseConfigurationHeading from './BaseConfigurationHeading.js';
import BaseConfigurationForm from './BaseConfigurationForm.js';

function BaseConfiguration(props) {
	const {baseSelectVal,setBaseSelectVal} = props.baseSelectValState;
	//const {baseFilterVal,setBaseFilterVal} = props.baseFilterValState;
	const currencySelectionsState = {
		currencySelections: props.currencySelections,
		setCurrencySelections: props.setCurrencySelections,
	}
	return (

		<div className="Configure-Base">
				<BaseConfigurationHeading 
					currencyInfo={props.currencyInfo}
					currencySelections={props.currencySelections}
					
				/>
				<BaseConfigurationForm  
					// baseFilterValState={props.baseFilterValState}
					// baseSelectValState={props.baseSelectValState}
					// appRefs = {props.appRefs}
					// //baseFilterVal = {props.baseFilterValState.baseFilterVal}
					// currencyInfo={props.currencyInfo}
					// currencySelectionsState={props.currencySelectionsState}
					// prevBaseIndexState = {props.prevBaseIndexState}
					{...props}
				/>
		</div>

	)
}


export default BaseConfiguration;