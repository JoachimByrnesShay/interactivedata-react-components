import { ChartModalHandlers } from "./utils-barChart.js";

import Modal from "../Modal/Modal.js";
import BarChartTitle from "./BarChartTitle";
import "./BarChart.css";

function BarChart(props) {

    // dependant upon isSmallScreen boolean state variable which will change upon window resize listener to true (small) or false (large) the orientation value will be used in inline style of JSX
    // to change charts to horizontal (width) or vertical(height) accordingly
    const chartsOrientation = props.isSmallScreen ? "width" : "height";
    const stylePerScreenSize = { [chartsOrientation]: String(props.chartInfo.size) + "%" };
    const onClickHandler = (e) => ChartModalHandlers.showModal(e, props.ix, props.modalNowState);
    const onMouseLeaveHandler = (e) => ChartModalHandlers.hideModal(e, props.ix, props.modalNowState);
    
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
                    {...props}
                />
            </div>
        </div>
    );
}

export default BarChart;
