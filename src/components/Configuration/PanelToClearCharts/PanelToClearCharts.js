function ClearChartsContainer() {
	return (

			<div className="Configure-clearChartsContainer">
			{/* button can clear charts by using setter on currencySelections.convertFrom to remove all elements, then re-render with no comparison charts */}
				<button
					onClick={()=>ChartsUtils.startAnimateClearChartsButton(setAnimateClearChartsButton)}
					className={`Configure-clearChartsButton ${
						animateClearChartsButton
							? "Configure-clearChartsButton--pressed"
							: ""
					}`}
					onAnimationEnd={()=>ChartsUtils.clearCharts(
						{
						
							[ChartsUtils.setAnimateClearChartsButton]: setAnimateClearChartsButton,
							[ChartsUtils.setAnimateClearChartsComparisons]: setAnimateClearChartsComparisons,
						}
					)}
				>
					Clear charts + comparisons
				</button>
			</div>
	)
}


export default ClearChartsContainer;