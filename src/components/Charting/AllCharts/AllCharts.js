import BarChart from "../BarChart/BarChart.js";
import ChartsUtils from "./utils-allChartsDisplay.js";

function AllCharts(props) {
    const currencySelections = props.currencySelections;
    const setCurrencySelections = props.setCurrencySelections;
    const currencyInfo = props.currencyInfo;
    const isSmallScreen = props.isSmallScreen;
    const modalNowState = {
        isChartModalNow: props.chartModalNowState.isChartModalNow,
        setIsChartModalNow: props.chartModalNowState.setIsChartModalNow,
    };
    console.log("props in allchartsdisplay: ", props);
    console.log('animateclearchartscomparisons is: ', props.setAnimateClearChartsComparisons)
    return (
        <main
            onAnimationEnd={() =>
                ChartsUtils.finishClearingCharts({
                    setAnimateClearChartsComparisons:
                        props.animateClearChartsComparisonsState.setAnimateClearChartsComparisons,
                    setCurrencySelections: setCurrencySelections,
                    currencySelections: currencySelections,
                })
            }
            className={`ChartContent ${
                props.animateClearChartsComparisonsState
                    .animateClearChartsComparisons
                    ? "ChartContent--clearCharts"
                    : ""
            }`}
        >
            {ChartsUtils.getChartsCurrenciesWithSize(
                currencySelections,
                currencyInfo
            ).map((chartInfo, ix) => {
                return (
                    <BarChart
                        ix={ix}
                        key={ix}
                        chartInfo={chartInfo}
                        currencyInfo={currencyInfo}
                        currencySelections={currencySelections}
                        isSmallScreen={isSmallScreen}
                        modalNowState={modalNowState}
                    />
                );
            })}
        </main>
    );
}

export default AllCharts;
