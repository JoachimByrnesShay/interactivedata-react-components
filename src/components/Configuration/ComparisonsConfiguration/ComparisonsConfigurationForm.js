import {FilterHandling} from '../filterHandlingUtils.js';
import ComparisonsConfigurationSelect from './ComparisonsConfigurationSelect.js';
import './ComparisonsConfiguration.css';

// multiple related comparisonsConfiguration functional components are defined in this single file
// to minimize complexity:  ComparisonsConfigurationForm and 2 children- ComparisonsConfigurationHeading and ComparisonsConfigurationFilter
// due to its greater complexity, ComparisonsConfigurationSelect component has its own file as a peer in the current file's directory

function ComparisonsConfigurationForm(props) {
	return (
		<div className="Configure-Comparisons">
			<form className="Configure-comparisonsForm">
			    <ComparisonsConfigurationHeading 
			    	MaxNumOfComparisons={props.MaxNumOfComparisons} 
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
					MaxNumOfComparisons={props.MaxNumOfComparisons}
				/>
			</form>
		</div>
	)
}

function ComparisonsConfigurationHeading(props) {
	return (
		<h2 className="Configure-comparisonHeading">
			Select &lt;= {props.MaxNumOfComparisons} currencies to compare
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

export default ComparisonsConfigurationForm;