

import BarChartContainer from "./BarChartContainer.js";
import ChartsUtils from "./ChartsUtils.js";

function ChartsDisplay(props) {
    const currencySelections = props.currencySelections;
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
        <main className={`ChartContent`}>
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

export default ChartsDisplay;
