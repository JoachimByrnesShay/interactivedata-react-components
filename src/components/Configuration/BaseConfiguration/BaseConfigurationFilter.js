import {useState} from 'react';
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
						// FilterHandling.handleBaseFilterDownArrowToSelect(
						// 	props.appRefs.baseSelect,
						// 	e
						// )
						FilterHandling.handleFilterDownArrowToSelect(
							props.appRefs.baseSelect,
							e
						)
					}
					onClick={()=>{
						//console.log(props.appRefs.baseSelect.CSS2Properties);
						//alert(props.appRefs.baseSelect.selectedIndex)
						//alert(props.baseSelectValState.baseSelectVal)
				//		alert(props.prevBaseIndexState.prevBaseIndex)
				//		props.baseSelectValState.setBaseSelectVal(undefined)
				//		props.appRefs.baseSelect.selectedIndex=props.thisSelectedIndexState.setThisSelectedIndex(undefined);   // baseSelectValState = { 				// 	{ 				// 		baseSelectVal: baseSelectVal,  				// 		setBaseSelectVal: setBaseSelectVal 				// 	} 				// } 				// prevBaseIndexState = { 				// 	{ 				// 	prevBaseIndex: prevBaseIndex, 				// 	setPrevBaseIndex: setPrevBaseIndex, 				// }
				//		props.prevBaseIndexState.setPrevBaseIndex(-1)
						// selectState.setBaseSelectValue(undefined);
                //appRefs.baseSelect.current.selectedIndex = -1;
                //props.appRefs.baseFilter.current.focus();


                // baseSelectValState = {
				// 	{
				// 		baseSelectVal: baseSelectVal, 
				// 		setBaseSelectVal: setBaseSelectVal
				// 	}
				// }
				// prevBaseIndexState = {
				// 	{
				// 	prevBaseIndex: prevBaseIndex,
				// 	setPrevBaseIndex: setPrevBaseIndex,
				// }
				 
					}}

					onChange={(e) => props.baseFilterValState.setBaseFilterVal(e.target.value)}
				/>
			</label>
	)
	
}

export default BaseConfigurationFilter;