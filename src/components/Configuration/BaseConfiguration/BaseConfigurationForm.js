import {useState} from 'react';
import BaseConfigurationFilter from "./BaseConfigurationFilter.js";
import BaseConfigurationSelect from "./BaseConfigurationSelect.js";

function BaseConfigurationForm(props) {
	const [thisSelectedIndex, setThisSelectedIndex] = useState(-1)
	const thisSelectedIndexState = {thisSelectedIndex: thisSelectedIndex, setThisSelectedIndex: setThisSelectedIndex};
	return (
		<form className="Configure-baseForm" onKeyDown={e=>e.key==='Enter' ? e.preventDefault: undefined}>
			<BaseConfigurationFilter 
				// appRefs = {props.appRefs}
				// baseFilterValState = {props.baseFilterValState}
				// baseSelectValState= {props.baseSelectValState}
				// prevBaseIndexState = {props.prevBaseIndexState}
			{...props}
			thisSelectedIndexState={thisSelectedIndexState}
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