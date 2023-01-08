import ComparisonsConfigurationHeading from "./ComparisonsConfigurationHeading";
import ComparisonsConfigurationForm from "./ComparisonsConfigurationForm";

function ComparisonsConfiguration(props) {

	return (

		<div className="Configure-Comparisons">
				<ComparisonsConfigurationHeading />
				<ComparisonsConfigurationForm 
					appRefs={props.appRefs}
					convertFilterValState={props.convertFilterValState}
				/>
				
			</div>
	)
	
}


export default ComparisonsConfiguration;
