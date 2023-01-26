function BarChartTitle(props) {
	const chartInfo = props.chartInfo;
	const position = props.isSmallScreen ? "left" : "bottom";
	console.log("chartSize: ",chartInfo.size);
	console.log(position);
	return (
		<p
			style={{
				[position]:
					chartInfo.size < 8
						? `calc(${chartInfo.size}% + 2em)`
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
