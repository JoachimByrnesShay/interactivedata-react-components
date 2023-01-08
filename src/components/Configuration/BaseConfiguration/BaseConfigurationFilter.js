import {FilterHandling} from "../filterHandlingUtils.js";


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
						FilterHandling.handleBaseFilterDownArrowToSelect(
							props.appRefs.baseSelect,
							e
						)
					}
					onChange={(e) => props.baseFilterValState.setBaseFilterVal(e.target.value)}
				/>
			</label>
	)
	
}

export default BaseConfigurationFilter;