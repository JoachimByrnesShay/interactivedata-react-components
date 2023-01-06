import ChartsUtils from "./ChartsUtils.js";
import Modal from "../Modal/Modal.js";
import {ChartModalHandler} from "./ChartsUtils.js";

function ChartsDisplay(props) {
    
    const currencySelections = props.currencySelections;
    const currencyInfo = props.currencyInfo;
    const isSmallScreen = props.isSmallScreen;
    const modalNowState = {
        'isChartModalNow': props.isChartModalNow,
        'setIsChartModalNow':props.setIsChartModalNow,
    }
    

    return (
        <main className={`ChartContent`}>
            {ChartsUtils.getChartsCurrenciesWithSize(
                currencySelections,
                currencyInfo
            ).map((chartInfo, ix) => {
                return (
                    <div key={ix} className={`ChartContent-barChartContainer`}>
                        <div
                            style={{
                                [ChartsUtils.getChartsOrientation(
                                    isSmallScreen
                                )]: String(chartInfo.size) + "%",
                            }}
                            className={`ChartContent-barChart`}
                            onClick={(e) => ChartModalHandler.showModal(e, ix, modalNowState)}
                            onMouseLeave={(e) => ChartModalHandler.hideModal(e, ix, modalNowState)}
                        >
                            <p
                                style={{
                                    bottom:
                                        chartInfo.size < 8
                                            ? `calc(${chartInfo.size}% + 1em)`
                                            : "0em",
                                }}
                                className={`ChartContent-barChartTitle ${
                                    chartInfo.size < 8 ? " u-offset" : ""
                                }`}
                            >
                                {chartInfo.currency}
                            </p>
                            <Modal
                                ix={ix}
                                currencyInfo={currencyInfo}
                                currencySelections={currencySelections}
                                chartInfo={chartInfo}
                                modalNowState={modalNowState}
                            />
                        </div>
                    </div>
                );
            })}
        </main>
    );
}

export default ChartsDisplay;
