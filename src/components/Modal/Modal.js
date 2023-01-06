function Modal(props) {

	const {isChartModalNow, setIsChartModalNow} = props.modalNowState;
	
	return(
	<div         
        className={`Modal
        ${isChartModalNow.displayed[props.ix] ? "isdisplayed" : (isChartModalNow.animatingDisappearance[props.ix]
        ? "disappearModal" : "")}`}
	
    >
        <p>{props.currencyInfo.fullNames[props.chartInfo.currency]}</p>
        <p>1 {props.currencySelections.convertFrom}=={props.currencyInfo.rates[props.chartInfo.currency]} {props.chartInfo.currency}</p>
    </div>
    )
}


export default Modal;