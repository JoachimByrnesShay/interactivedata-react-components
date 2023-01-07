
import BarChart from "./BarChart.js";

function BarChartContainer(props) {
     const ix = props.ix;
    const isSmallScreen = props.isSmallScreen;
   
    const chartInfo = props.chartInfo;
    const modalNowState = props.modalNowState;
    const currencySelections = props.currencySelections;
    const currencyInfo = props.currencyInfo;
    return (
        <div key={ix} className={`ChartContent-barChartContainer`}>
           <BarChart 
             ix={ix}
             isSmallScreen = {isSmallScreen}
             chartInfo = {chartInfo}
             currencyInfo = {currencyInfo}
             currencySelections = {currencySelections}
             modalNowState = {modalNowState}
           />
        </div>
    );
}

export default BarChartContainer;
