// import ModalText from "./ModalText.js"
import './Modal.css';

function Modal(props) {
    // const currencyInfo = props.currencyInfo;
    // const chartInfo = props.chartInfo;
    // const currencySelections = props.currencySelections;
	const isChartModalNow = props.modalNowState.isChartModalNow;
    //const modalDisplayClassName = e=> isChartModalNow.displayed[props.ix] ? "isDisplayed" : isChartModalNow.animatingDisappearance[props.ix] ? "dispappearModal" : "";
	const chartModalIsDisplayed = isChartModalNow.displayed[props.ix]
    const chartModalIsAnimatingDisappearance = isChartModalNow.animatingDisappearance[props.ix];
    const modalDisplayClassName = chartModalIsDisplayed ? "isdisplayed": (chartModalIsAnimatingDisappearance ? "disappearModal" : "");

    //console.log(props.ix + ': ', modalDisplayClassName);

	return(
	<div         
       className={`Modal ${modalDisplayClassName}`}
        // className = {`Modal ${isChartModalNow.displayed[props.ix] ? "isdisplayed" : (isChartModalNow.animatingDisappearance[props.ix]
        // ? "disappearModal" : "")}`}
        // className = {`Modal ${
        //     chartModalIsDisplayed ? "isdisplayed": (chartModalIsAnimatingDisappearance ? "disappearModal" : "")

        // }`}
	
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