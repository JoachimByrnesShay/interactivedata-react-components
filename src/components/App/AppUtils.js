import FetchConstants from "./AppConstants.js";

export function fetchAll(currencySelections, currencyInfo, setCurrencyInfo) {
    let baseRates = `latest.json?app_id=${FetchConstants.app_id}&base='${currencySelections.convertFrom}'`;
    let baseSubURLfullNames = "currencies.json";
    let ratesURL = FetchConstants.baseURL + baseRates;
    let namesURL = FetchConstants.baseURL + baseSubURLfullNames;
    fetch(namesURL)
        .then((response) => response.json())
        .then((namesData) => {
            fetch(ratesURL)
                .then((response) => response.json())
                .then((ratesResults) => {
                    setCurrencyInfo({
                        ...currencyInfo,
                        rates: ratesResults.rates,
                        fullNames: namesData,
                    });
                });
        });
}

export function windowResizeListener(setIsSmallScreen) {
    window.addEventListener("resize", handleWindowWidth);
    function handleWindowWidth() {
        if (window.innerWidth < 950) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }
    handleWindowWidth();
}
