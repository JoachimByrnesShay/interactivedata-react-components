import './PanelToClearCharts.css';
import ChartsUtils from "../../Charting/AllCharts/utils-allChartsDisplay.js"


function ClearChartsContainer(props) {
	return (

			<div className="Configure-clearChartsContainer">
			{/* button can clear charts by using setter on currencySelections.convertFrom to remove all elements, then re-render with no comparison charts */}
				<button
					onClick={()=>ChartsUtils.startAnimateClearChartsButton(props.animateClearChartsButtonState.setAnimateClearChartsButton)}
					className={`Configure-clearChartsButton ${
						props.animateClearChartsButtonState.animateClearChartsButton
							? "Configure-clearChartsButton--pressed"
							: ""
					}`}
					onAnimationEnd={()=>ChartsUtils.clearCharts(
						{
						
							//[ChartsUtils.setAnimateClearChartsButton]: 
							//props.animateClearChartsButtonState.setAnimateClearChartsButton,
							setAnimateClearChartsButton: props.animateClearChartsButtonState.setAnimateClearChartsButton,
							//[ChartsUtils.setAnimateClearChartsComparisons]: setAnimateClearChartsComparisons,
							setAnimateClearChartsComparisons: props.animateClearChartsComparisonsState.setAnimateClearChartsComparisons,
						}
					)}
				>
					Clear charts + comparisons
				</button>
			</div>
	)
}


export default ClearChartsContainer;