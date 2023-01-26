import ChartsUtils from "../AllCharts/utils-allChartsDisplay.js";
import { ChartModalHandlers } from "./utils-barChart.js";

import Modal from "../Modal/Modal.js";
import BarChartTitle from "./BarChartTitle";
import "./BarChart.css";

function BarChart(props) {
    const onClickHandler = (e) =>
        ChartModalHandlers.showModal(e, props.ix, props.modalNowState);
    const onMouseLeaveHandler = (e) =>
        ChartModalHandlers.hideModal(e, props.ix, props.modalNowState);
    const chartsOrientation = ChartsUtils.getChartsOrientation(
        props.isSmallScreen
    );
    const stylePerScreenSize = {
        [chartsOrientation]: String(props.chartInfo.size) + "%",
    };
    return (
        <div key={props.ix} className={`ChartContent-barChartContainer`}>
            <div
                style={stylePerScreenSize}
                className={`ChartContent-barChart`}
                onClick={onClickHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <BarChartTitle 
                    chartInfo={props.chartInfo} 
                    isSmallScreen={props.isSmallScreen}
                />
                <Modal
                    // ix={ix}
                    // currencyInfo={currencyInfo}
                    // currencySelections={currencySelections}
                    // chartInfo={chartInfo}
                    // modalNowState={modalNowState}
                    {...props}
                />
            </div>
        </div>
    );
}

export default BarChart;
