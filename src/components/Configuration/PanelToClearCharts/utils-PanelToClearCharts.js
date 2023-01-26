
export const ClearCharts = {
    // set animate of button to true, so that animating class is added to JSX per ternary condition in JSX
    startAnimateClearChartsButton: (setAnimateClearChartsButton) => setAnimateClearChartsButton(true),
    // reset animate state variable so that animating class is removed from JSX for button
    // set animateClearChartsComparisons to true, which will add appropriate animated class to .ChartContent (main element)
    clearCharts: (appState) => {
        appState.setAnimateClearChartsButton(false);
        appState.setAnimateClearChartsComparisons(true);
    },
}