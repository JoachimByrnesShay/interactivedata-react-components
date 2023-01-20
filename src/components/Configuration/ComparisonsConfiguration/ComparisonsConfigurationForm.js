import {FilterHandling} from '../filterHandlingUtils.js';
//import ComparisonsConfigurationFilter from './ComparisonsConfigurationFilter.js'
import ComparisonsConfigurationSelect from './ComparisonsConfigurationSelect.js';
//import ComparisonsConfigurationHeading from './ComparisonsConfigurationHeading.js';
import './ComparisonsConfiguration.css';


function ComparisonsConfigurationForm(props) {
	return (
			<div className="Configure-Comparisons">
		<form className="Configure-comparisonsForm">
		    <ComparisonsConfigurationHeading 
		    	maxNumOfComparisons={props.maxNumOfComparisons}
		    />
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
				maxNumOfComparisons={props.maxNumOfComparisons}
		
			/>
		</form>
		</div>

	)
}

function ComparisonsConfigurationHeading(props) {
	return (
			<h2 className="Configure-comparisonHeading">
					Select &lt;= {props.maxNumOfComparisons} currencies to compare
			</h2>
	)	
}	

function ComparisonsConfigurationFilter(props) {
	return (
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
						// FilterHandling.handleConvertFilterDownArrowToSelect(
						// 	props.appRefs.convertSelect,
						// 	e
						// )
						FilterHandling.handleFilterDownArrowToSelect(
							props.appRefs.convertSelect,
							e
						)
					}
					onChange={(e) => props.convertFilterValState.setConvertFilterVal(e.target.value)}
				/>
		</label>
	)
}

	// appRefs={props.appRefs}
	// 				convertFilterValState={props.convertFilterValState}
	// 				convertSelectValState={props.convertSelectValState}
	// 				setIsFlashDisplayed={props.setIsFlashDisplayed}
	// 				currencySelectionsState={props.currencySelectionsState}
	// 				prevConvertIndexState={props.prevConvertIndexState}
	// 				currencyInfo={props.currencyInfo}

export default ComparisonsConfigurationForm;