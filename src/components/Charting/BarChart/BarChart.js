import ChartsUtils from "../utilities/utils-chartsGeneral.js";
import Modal from "../Modal/Modal.js";
import BarChartTitle from "../BarChartTitle/BarChartTitle";
import ChartModalHandlers from "../utilities/utils-chartModals.js";

 function BarChart(props) {
    const ix = props.ix;
    const isSmallScreen = props.isSmallScreen;
    const modalNowState = props.modalNowState;
    const chartInfo = props.chartInfo;
    const currencyInfo = props.currencyInfo;
    const currencySelections = props.currencySelections;
    const onClickHandler = e => ChartModalHandlers.showModal(e,ix,modalNowState);
    const onMouseLeaveHandler = e => ChartModalHandlers.hideModal(e,ix,modalNowState);
    const chartsOrientation = ChartsUtils.getChartsOrientation(isSmallScreen);
    const stylePerScreenSize = {[chartsOrientation]:String(chartInfo.size) + "%"}
    return (

        <div
                style={stylePerScreenSize}
                className={`ChartContent-barChart`}
                onClick={onClickHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <BarChartTitle
                    chartInfo={chartInfo}
                />
                <Modal
                    ix={ix}
                    currencyInfo={currencyInfo}
                    currencySelections={currencySelections}
                    chartInfo={chartInfo}
                    modalNowState={modalNowState}
                />
            </div>
    )
 }

 export default BarChart;