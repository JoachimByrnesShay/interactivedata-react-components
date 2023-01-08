import {FilterHandling} from '../filterHandlingUtils.js';

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
						FilterHandling.handleConvertFilterDownArrowToSelect(
							props.appRefs.convertSelect,
							e
						)
					}
					onChange={(e) => props.convertFilterValState.setConvertFilterVal(e.target.value)}
				/>
		</label>
	)
}


export default ComparisonsConfigurationFilter;