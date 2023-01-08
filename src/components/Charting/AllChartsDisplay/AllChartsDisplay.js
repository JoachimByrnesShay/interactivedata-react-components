

import BarChartContainer from "../BarChartContainer/BarChartContainer.js";
import ChartsUtils from "../utilities/utils-chartsGeneral.js";

function AllChartsDisplay(props) {
    const currencySelections = props.currencySelections;
    const setCurrencySelections = props.setCurrencySelections;
    const currencyInfo = props.currencyInfo;
    const isSmallScreen = props.isSmallScreen;
    // const modalNowState = {
    //     isChartModalNow: props.isChartModalNow,
    //     setIsChartModalNow: props.setIsChartModalNow,
    // };
    const modalNowState = {
        isChartModalNow: props.chartModalNowState.isChartModalNow,
        setIsChartModalNow: props.chartModalNowState.setIsChartModalNow,
    };

    return (
        <main 
            onAnimationEnd={()=>ChartsUtils.finishClearingCharts(
                {setAnimateClearChartsComparisons: props.setAnimateChartsComparisons,
                setCurrencySelections: setCurrencySelections,
                currencySelections: currencySelections}
            )}

            className={`ChartContent ${props.animateClearChartsComparisonsState.animateClearChartsComparisons ? 'ChartContent--clearCharts' : ''}`}
        >
            {ChartsUtils.getChartsCurrenciesWithSize(
                currencySelections,
                currencyInfo
            ).map((chartInfo, ix) => {
                return (
                    <BarChartContainer 
                        ix={ix}
                        chartInfo={chartInfo}
                        isSmallScreen = {isSmallScreen}
                        currencySelections = {currencySelections}
                        modalNowState = {modalNowState}
                        currencyInfo = {currencyInfo}
                        key = {ix}
                    />
                );
            })}
        </main>
    );
}

export default AllChartsDisplay;
