
import BaseConfigurationFilter from "./BaseConfigurationFilter.js";
import BaseConfigurationSelect from "./BaseConfigurationSelect.js";

function BaseConfigurationForm(props) {
	return (
		<form className="Configure-baseForm">
			<BaseConfigurationFilter 
				appRefs = {props.appRefs}
				baseFilterValState = {props.baseFilterValState}
			/>
			<BaseConfigurationSelect 
				appRefs = {props.appRefs}
				currencySelectionsState = {props.currencySelectionsState}
				baseSelectValState = {props.baseSelectValState}
				baseFilterValState = {props.baseFilterValState}
				currencyInfo = {props.currencyInfo}
				prevBaseIndexState = {props.prevBaseIndexState}
				 
			/>
		</form>
	)
}


export default BaseConfigurationForm;