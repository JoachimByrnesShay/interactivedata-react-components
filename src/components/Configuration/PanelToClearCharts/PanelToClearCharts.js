import './PanelToClearCharts.css';
import {ClearCharts} from "./utils-PanelToClearCharts.js"

function ClearChartsContainer(props) {
	return (
		<div className="Configure-clearChartsContainer">
		{/* button can clear charts by using setter on currencySelections.convertFrom to remove all elements, then re-render with no comparison charts */}
			<button
				onClick={()=>ClearCharts.startAnimateClearChartsButton(props.animateClearChartsButtonState.setAnimateClearChartsButton)}
				className={`Configure-clearChartsButton ${
					props.animateClearChartsButtonState.animateClearChartsButton
						? "Configure-clearChartsButton--pressed"
						: ""
				}`}
				onAnimationEnd={()=>ClearCharts.clearCharts(
					{
						setAnimateClearChartsButton: props.animateClearChartsButtonState.setAnimateClearChartsButton,
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