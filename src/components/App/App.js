import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
// import AllChartsConfiguration from "../Configuration/AllChartsConfiguration/AllChartsConfiguration.js";
import BaseConfigurationForm from '../Configuration/BaseConfiguration/BaseConfigurationForm.js';
import ComparisonsConfigurationForm from "../Configuration/ComparisonsConfiguration/ComparisonsConfigurationForm.js";
import CurrentConfigurationOverview from "../Configuration/CurrentConfigurationOverview/CurrentConfigurationOverview.js";
import PanelToClearCharts from "../Configuration/PanelToClearCharts/PanelToClearCharts.js";
import AllCharts from "../Charting/AllCharts/AllCharts.js";

import { fetchAll, windowResizeListener } from "./AppUtils.js";
import { MaxNumOfComparisons } from "./AppConstants.js";

function App() {
  // boolean value stored in isSmallScreen controls the dimension of the charts, i.e. width or height, which is dependant upon screen size,
  // controlled via useEffect call with isSmallScreen in dependency array as seen below
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // selected API requires 2 separate URLS to get the desired data as above, one for rates, one with the full names, thus 2 fetches which are chained and nested so that ALL info is ready upon first render

  const [currencySelections, setCurrencySelections] = useState({
    convertFrom: "USD",
    convertTo: ["AED", "BGN", "CNY", "EUR", "GBP"],
  });
  // control filter UI (display of text input) for both base filter and convert/comparisons filter
  //const [baseFilterVal, setBaseFilterVal] = useState("");
  //const [convertFilterVal, setConvertFilterVal] = useState("");
  // onChange of each select list, value is set appropriately on select element itself.
  //const [baseSelectValue,setBaseSelectValue] = useState(undefined);
  //const [convertSelectVal,setConvertSelectVal] = useState(undefined);

  // currencyInfo rates are pulled from the API, and will be updated via useEffect when convertFrom changes, as rates requested are values relative to the base currency provided by app via the call to the API
  //  fullNames are the full textual names such as United States Dollar to match the abbreviations for currency such as USD.  These names are used in the informative text displayed on mdoals and in tooltips
  // upon hover over the display of current base and comparison configuration values in the top configuration section of the UI.
  const [currencyInfo, setCurrencyInfo] = useState({
    rates: {},
    fullNames: {},
  });
  // all charts have an associated modal element which will be hidden at first, show on mouseclick on chart element, then visible modals will disappear with animation upon mouseleave of the element
  // all of which is triggered by changes in the below state variables.  default state variable value is an array large enough for maximum num comparision currencies + the base value chart which will be displayed along with them
  const [isChartModalDisplayed, setIsChartModalDisplayed] = useState(
    Array(MaxNumOfComparisons + 1).fill(false)
  );
  const [
    isChartModalAnimatingDisappearance,
    setIsChartModalAnimatingDisappearance,
  ] = useState(Array(MaxNumOfComparisons + 1).fill(false));
  const [isChartModalNow, setIsChartModalNow] = useState({
    displayed: Array(MaxNumOfComparisons + 1).fill(false),
    animatingDisappearance: Array(MaxNumOfComparisons + 1).fill(false),
  });



  const [animateClearChartsComparisons, setAnimateClearChartsComparisons] =
    useState(false);
  const animateClearChartsComparisonsState = {
    animateClearChartsComparisons: animateClearChartsComparisons,
    setAnimateClearChartsComparisons: setAnimateClearChartsComparisons,
  };

  /* moved from config */
  const [prevBaseIndex, setPrevBaseIndex] = useState(-1);
  const [prevConvertIndex, setPrevConvertIndex] = useState(-1);

  // control filter UI (display of text input) for both base filter and convert/comparisons filter
  const [baseFilterVal, setBaseFilterVal] = useState("");
  const [convertFilterVal, setConvertFilterVal] = useState("");
  // onChange of each select list, value is set appropriately on select element itself.
  const [baseSelectVal, setBaseSelectVal] = useState(undefined);
  const [convertSelectVal, setConvertSelectVal] = useState(undefined);
  const [animateClearChartsButton, setAnimateClearChartsButton] = useState(false);

  // flash message is displayed when user attempts to exceed 1 more than the allowed maximum number of comparison/conversion currency selections.  whether flash is displayed is controlled by boolean value of state variable.
  const [isFlashDisplayed, setIsFlashDisplayed] = useState(false);
  const currencySelectionsState = {currencySelections,setCurrencySelections};

  // call fetch on first render and whenever changes
  //, as the rates to be retrieved from API for all currencies are relative to the base currency, and therefore will change
  useEffect(
    () => fetchAll(currencySelections, currencyInfo, setCurrencyInfo),
    [currencySelections]
  );
   // by controlling the UI with value of state variable, allow a fadeout effect of flash warning (shown when user tries to exceed max num of allowable selections of comparison currencies)
    useEffect(() => {if (isFlashDisplayed){
      setTimeout(()=>{setIsFlashDisplayed(false)}, 2000);
    }}, [isFlashDisplayed]);

  // listen on window for resize.  at less than 950 innerwidth, isSmallScreen will be set to true.  This will be used in JSX in conjunction with ChartsUtils.getChartsOrientation to change the dimension of graph
  // section to horizontal or vertical depending on the value of isSmallScreen, oonditionally using inline css 'width' or 'height' but not both, along with calculated size of graph element
  useEffect(() => windowResizeListener(setIsSmallScreen), []);

  const Refs = {
    baseFilter: useRef(null),
    convertFilter: useRef(null),
    baseSelect: useRef(null),
    convertSelect: useRef(null),
  };
  return (
    <div className="App">
      <Header 
        isFlashDisplayed={isFlashDisplayed}
        MaxNumOfComparisons={MaxNumOfComparisons}
      />
      {/*    <AllChartsConfiguration
        animateClearChartsComparisonsState={animateClearChartsComparisonsState}
        setAnimateClearChartsComparisons={setAnimateClearChartsComparisons}
        currencyInfo={currencyInfo}
        currencySelections={currencySelections}
        setCurrencySelections = {setCurrencySelections}
      />*/}
      <section className="AppConfigure">
        <BaseConfigurationForm
          currencyInfo={currencyInfo}
          currencySelections={currencySelections}
          setCurrencySelections={setCurrencySelections}
          currencySelectionsState={currencySelectionsState}
          appRefs={{
            baseFilter: Refs.baseFilter,
            baseSelect: Refs.baseSelect,
          }}
          baseFilterValState={{ baseFilterVal, setBaseFilterVal }}
          baseSelectValState={{ baseSelectVal, setBaseSelectVal }}
          prevBaseIndexState={{ prevBaseIndex, setPrevBaseIndex }}
        />

        {/* check if I need to cross reference baseconfigurer refs here also*/}
        <ComparisonsConfigurationForm
          maxNumOfComparisons={MaxNumOfComparisons}
          currencyInfo={currencyInfo}
          currencySelectionsState={{currencySelections,setCurrencySelections}}
          appRefs={{
            convertFilter: Refs.convertFilter,
            convertSelect: Refs.convertSelect,
          }}
          convertFilterValState={{convertFilterVal,setConvertFilterVal}}
          convertSelectValState={{convertSelectVal,setConvertSelectVal}}
          prevConvertIndexState={{ prevConvertIndex, setPrevConvertIndex }}
          setIsFlashDisplayed={setIsFlashDisplayed}
        />
        <CurrentConfigurationOverview
          currencyInfo={currencyInfo}
          currencySelections={currencySelections}
        />

        <PanelToClearCharts
          // animateClearChartsButtonState = {{
          //  animateClearChartsButton: animateClearChartsButton,
          //  setAnimateClearChartsButton: setAnimateClearChartsButton}}

          animateClearChartsButtonState={{
            animateClearChartsButton,
            setAnimateClearChartsButton,
          }}
          animateClearChartsComparisonsState={
            animateClearChartsComparisonsState
          }
          // animateClearChartsComparisonsState = {{
          //  animateClearChartsComparisons: props.animateClearChartsComparisonsState.animateClearChartsComparisons,
          //  setAnimateClearChartsComparisons: props.animateClearChartsComparisonsState.setAnimateClearChartsComparisons
          //  }}
        />
      </section>
      <AllCharts
        animateClearChartsComparisonsState={animateClearChartsComparisonsState}
        setAnimateClearChartsComparisons={setAnimateClearChartsComparisons}
        chartModalNowState={{ isChartModalNow, setIsChartModalNow }}
        currencyInfo={currencyInfo}
        currencySelections={currencySelections}
        setCurrencySelections={setCurrencySelections}
        isSmallScreen={isSmallScreen}
      />
      <Footer />
    </div>
  );
}

export default App;
