function ModalText(props) {
	return (
		<>
			<p>{props.currencyInfo.fullNames[props.chartInfo.currency]}</p>
			<p>
				1 {props.currencySelections.convertFrom}==
				{props.currencyInfo.rates[props.chartInfo.currency]}{" "}
				{props.chartInfo.currency}
			</p>
		</>
	);
}

export default ModalText;
