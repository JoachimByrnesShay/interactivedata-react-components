
import BaseConfigurationFilter from "./BaseConfigurationFilter.js";
import BaseConfigurationSelect from "./BaseConfigurationSelect.js";
import BaseConfigurationHeading from "./BaseConfigurationHeading.js";

function BaseConfigurationForm(props) {
	//nst [thisSelectedIndex, setThisSelectedIndex] = useState(-1)
	//nst thisSelectedIndexState = {thisSelectedIndex: thisSelectedIndex, setThisSelectedIndex: setThisSelectedIndex};
	return (
		<form className="Configure-baseForm">
			<BaseConfigurationHeading  
			   {...props}
			/>
			<BaseConfigurationFilter 
				// appRefs = {props.appRefs}
				// baseFilterValState = {props.baseFilterValState}
				// baseSelectValState= {props.baseSelectValState}
				// prevBaseIndexState = {props.prevBaseIndexState}
			//..props}
			appRefs = {props.appRefs}
				baseFilterValState = {props.baseFilterValState}
			//isSelectedIndexState={thisSelectedIndexState}
			/>
			<BaseConfigurationSelect 
				// appRefs = {props.appRefs}
				// currencySelectionsState = {props.currencySelectionsState}
				// baseSelectValState = {props.baseSelectValState}
				// baseFilterValState = {props.baseFilterValState}
				// currencyInfo = {props.currencyInfo}
				// prevBaseIndexState = {props.prevBaseIndexState}
				{...props}
				 
			/>
				
		</form>
	)
}


export default BaseConfigurationForm;