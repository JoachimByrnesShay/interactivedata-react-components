import './CurrentConfigurationOverview.css';

function CurrentConfigurationOverview(props) {
	return (
		<div className="Configure-showCurrentConfigurationContainer">
		{/* custom tooltips are created using custom data attributes in the below showConfiguration section for both seledcted base and selected comparison values*/}
			<div className="Configure-showCurrentConfiguration">
				<div className="Configure-showBaseContainer">
					<h3>Base:</h3>
					<div className="Configure-showBaseContainer">
						<p className="Configure-baseValue"
							data-tooltip-title={props.currencyInfo.fullNames[props.currencySelections.convertFrom]}
						>
							{props.currencySelections.convertFrom}
						</p>
					</div>
				</div>
				<div className="Configure-showComparisonsContainer">
					<h3>Comparisons:</h3>
					<div className="Configure-showComparisons">
						{props.currencySelections.convertTo.map((curr, index) => (
							<p className="Configure-comparisonValue"
								key={index}
								data-tooltip-title={
									props.currencyInfo.fullNames[curr]
								}
							>
								{curr}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CurrentConfigurationOverview;