

const ChartsUtils = {
    // the charts displayed depend upon inserting the convertFrom value to the left of all other charts
    getChartsCurrencies: (currencySelections) => [
        currencySelections.convertFrom,
        ...currencySelections.convertTo,
    ],
    // to avoid duplicated calls per each required chart of calculation of size of chart from the JSX chart creation code, upon which calculated value various different attributes within creation of the charts elements are dependant
    // the array of currency names from which charts will be made are mapped to an array of objects with the name and the 'size' required for the chart, dependant upon call to getIndividualChartSize(name)
    // the result is then the array that is utilized in JSX for chart element creation
    getChartsCurrenciesWithSize: (currencySelections, currencyInfo) =>
        ChartsUtils.getChartsCurrencies(currencySelections).map((name) => {
            return {
                currency: name,
                size: ChartsUtils.getIndividualChartSize(
                    name,
                    currencySelections,
                    currencyInfo
                ),
            };
    }),
    // the largest float value among selected currency rates will be represented as the largest graph.  e.g. if 7 CNY is largest value among comparisons to 1 USD base, CNY will be largest graph,
    // USD base will be approximate 1/7 its height as a graph, and other currencies will fall whereever is appropriate, less than or more than USD in size but no larger than CNY
    // if 1 unit of USD is larger than all selected comparisons (because they are some decimal portion less than 1), USD will bhe largest
    getMaxUnitsOfChartCurrs: (currencySelections, currencyInfo) => {
        let max = currencySelections.convertFrom;
        ChartsUtils.getChartsCurrencies(currencySelections).forEach((value) => {
            if ( parseFloat(currencyInfo.rates[value]) > parseFloat(currencyInfo.rates[max])) {
                max = value;
            }
        });
        return max;
    },
    // utilzing the selected currency which has the largest units in comparison to 1 unit of whichever base currency, the size of any chart will be converted to a proporption of
    // the maximum (i.e. 100% height or width of the charts area display)
    getIndividualChartSize: (value, currencySelections, currencyInfo) => {
        return (
            (parseFloat(currencyInfo.rates[value]) / parseFloat(currencyInfo.rates[ChartsUtils.getMaxUnitsOfChartCurrs(currencySelections, currencyInfo)])) * 100
        );
    },
    // set the last animation variable in the charts clearing process which controls presence of JSX class to false
    // set convertTo to empty array, which will result in re-rendering the page with no comparisons listed in configuration section and no comparisons charts,
    finishClearingCharts: (appState) => {
        appState.setAnimateClearChartsComparisons(false);
        appState.setCurrencySelections({ ...appState.currencySelections, convertTo: [] });
    },
};

export default ChartsUtils;
