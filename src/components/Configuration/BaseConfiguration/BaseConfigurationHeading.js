
function BaseConfigurationHeading(props) {
	return (
		<h2 className="Configure-baseHeading">
					Change your base currency from
					{/* using data attrib to set a custom tooltip, displaying title of configured baseValue upon hover, using CSS.  the standard title attribute has default styling which cannot be overriden */}
					<span
						className="Configure-baseHeadingValue"
						data-tooltip-title={
							props.currencyInfo.fullNames[
								props.currencySelections.convertFrom
							]
						}
					>
						{props.currencySelections.convertFrom}
					</span>
				</h2>
	)
}


export default BaseConfigurationHeading;