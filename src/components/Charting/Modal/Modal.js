import './Modal.css';

function Modal(props) {
	const isChartModalNow = props.modalNowState.isChartModalNow;
    const chartModalIsDisplayed = isChartModalNow.displayed[props.ix]
    const chartModalIsAnimatingDisappearance = isChartModalNow.animatingDisappearance[props.ix];
    const modalDisplayClassName = chartModalIsDisplayed ? "isdisplayed": (chartModalIsAnimatingDisappearance ? "disappearModal" : "");

	return(
    	<div         
           className={`Modal ${modalDisplayClassName}`}
        >
           <p>{props.currencyInfo.fullNames[props.chartInfo.currency]}</p>
                <p>
                    1 {props.currencySelections.convertFrom}==
                    {props.currencyInfo.rates[props.chartInfo.currency]}{" "}
                    {props.chartInfo.currency}
                </p>
           
        </div>
    )
}

export default Modal;