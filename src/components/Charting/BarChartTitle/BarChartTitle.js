function BarChartTitle(props) {
	const chartInfo = props.chartInfo;
	return (
		<p
			style={{
				bottom:
					chartInfo.size < 8
						? `calc(${chartInfo.size}% + 1em)`
						: "0em",
			}}
			className={`ChartContent-barChartTitle ${
				chartInfo.size < 8 ? " u-offset" : ""
			}`}
		>
			{chartInfo.currency}
		</p>
	);
}

export default BarChartTitle;
