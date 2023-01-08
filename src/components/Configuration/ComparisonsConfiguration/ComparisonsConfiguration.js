import ComparisonsConfigurationHeading from "./ComparisonsConfigurationHeading";
import ComparisonsConfigurationForm from "./ComparisonsConfigurationForm";

function ComparisonsConfiguration(props) {

	return (

		<div className="Configure-Comparisons">
				<ComparisonsConfigurationHeading />
				<ComparisonsConfigurationForm 
					appRefs={props.appRefs}
					convertFilterValState={props.convertFilterValState}
					convertSelectValState={props.convertSelectValState}
					setIsFlashDisplayed={props.setIsFlashDisplayed}
					currencySelectionsState={props.currencySelectionsState}
					prevConvertIndexState={props.prevConvertIndexState}
					currencyInfo={props.currencyInfo}
				/>	
			</div>
	)
	
}


export default ComparisonsConfiguration;
