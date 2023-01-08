import {FilterHandling} from '../filterHandlingUtils.js';
import ComparisonsConfigurationFilter from './ComparisonsConfigurationFilter.js'
import ComparisonsConfigurationSelect from './ComparisonsConfigurationSelect.js';
function ComparisonsConfigurationForm(props) {
	return (
		<form className="Configure-comparisonsForm">
			<ComparisonsConfigurationFilter 
				appRefs={props.appRefs}
				convertFilterValState={props.convertFilterValState}
			/>

			<ComparisonsConfigurationSelect 
				appRefs={props.appRefs}
				convertSelectValState={props.convertSelectValState}
				convertFilterVal={props.convertFilterValState.convertFilterVal}
				currencyInfo={props.currencyInfo}
				setIsFlashDisplayed={props.setIsFlashDisplayed}
				currencySelectionsState={props.currencySelectionsState}
				prevConvertIndexState={props.prevConvertIndexState}
		
			/>
		</form>

	)
}



export default ComparisonsConfigurationForm;