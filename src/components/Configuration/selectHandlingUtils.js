import {MaxNumOfComparisons} from "../globalConstants.js";
import {GenUtils} from "./configurationHandlingUtils.js";

export   const SelectHandling = {
 
        // used as onKeyUp listener on select element for base currency selection, offers control of behavior upon 'enter' press on option (child of select) 
        // as well as upon upArrow when option at index 0 is currently selected with resulting functionality in latter case of navigating up into base filter input field
        baseSelectKeys: (({selectState, appRefs}, e)=>{
            let ix = e.target.selectedIndex;

            // on Enter key pressed on option in select element, the convertFrom currency will be changed ot the new value, i.e. of option selected upon enter pressed
            if(e.key === 'Enter') {
                 selectState.setCurrencySelections({ ...selectState.currencySelections, convertFrom: e.target.value })
            } 
            // if the previous recorded baseSelect-index value representes the first option (ix 0) and the upArrow is pressed, move up into the base filter field
            if(selectState.prevBaseIndex === 0 && e.keyCode === 38){
                selectState.setBaseSelectValue(undefined);
                appRefs.baseSelect.current.selectedIndex = -1;
                appRefs.baseFilter.current.focus();

            } 
            // otherwise either downArrow or another key has been pressed, default behavior of down arrow is to continue to traverse downward through the options one by one.
            // default behavior of other alpha keys IF the filter field is blank will be to navigate to the next option whose value starts with the letter pressed, otherwise constrained by filter population
            // update prevBaseIndex in all cases. as implemented, since this method as a sole onKeyUp listener is branching between 2 special cases, the above conditional
            // being dependant upon the prevIndex ensures that we navigate upon the sequence of call to listener-> hear move to ix 0 via index 1 with upArrow, call to listener again (a separate occuccrence) -> hear upArrow from index 0, 
            // rather than be dependant upon e.target.selectedIndex && e.keyCode == 38 as the conditional, 
            // which would not provide the desired control for it would have the effect of jumping into filter field in one listen when moving from -1 to 0, i.e., when moving up the list, the user will never sit on index 0 in that case
            selectState.setPrevBaseIndex(ix);
        }),
        // similar functionality to baseSelectKeys offered for the conversion currencies select list, with additional complexity of that the comparisons list allows for selecting an array of size up to MaxNumOfComparisons,
        // and not only one value.  This array is the value of the state variable currencySelections.convertTo.  "enter" key on comparison/conversion currency option is a selection funcationality which 
        // will either add the selected currency to the selected comparisons which will be displayed as charts vs the selected base currency, or will remove the currency from the conversions list if it 
        // is already present in the list, or will result in displaying a flash warning message if no further comparison currencies can be added unless one or more are deselected due to being at max size for the convertTo array
        convertSelectKeys: ({selectState, appRefs, e})=> {
            let ix = e.target.selectedIndex;

            let val = e.target.value;
            // using same methodology as in baseSelectKeys of employing the conversion/comparisons list selected idnex from the last render to modulate the behavior
            if (selectState.prevConvertIndex === 0 && e.keyCode === 38) {
                selectState.setConvertSelectValue(undefined);
                appRefs.convertSelect.current.selectedIndex = -1;
                appRefs.convertFilter.current.focus();
            } else if (e.key === 'Enter') {
                let newArr;
                // if the selected currency is already in currencySelections.convertTo, it will be removed by slicing (returning copies) the array around the index of current selection, combining, 
                // using as the updated value via the state setter for currencySelections 
                if (selectState.currencySelections.convertTo.includes(val)) {
                    let ixInSelections = selectState.currencySelections.convertTo.indexOf(val);
                    let leftArr = selectState.currencySelections.convertTo.slice(0, ixInSelections);
                    let rightArr = selectState.currencySelections.convertTo.slice(ixInSelections + 1);
                    newArr = [...leftArr, ...rightArr];
                // flash if exceeds allowable num of selections
                } else if (selectState.currencySelections.convertTo.length >= MaxNumOfComparisons) {
                    selectState.setIsFlashDisplayed(true);
                    return;
                } else {
                    newArr = [...selectState.currencySelections.convertTo, val]
                    // the above may need to be alphabetized in order that it appears in an organized fashion in the configuration display of comparison currencies in the top right
                    newArr = GenUtils.alphabetizeStringArr(newArr);
                }
             
                selectState.setCurrencySelections({ ...selectState.currencySelections, convertTo: newArr})
            }
            // store the current index as the "previous" index for the next call
            selectState.setPrevConvertIndex(ix);
        },
        // in addition to selection of currency functionality upon pressing 'Enter' key, it is desirable to have the same functionality upon mouse double-click
        // in the case of base select, as with 'enter', double click with mouse will select a new base currency
        handleOptionClick_base: ({baseState, optionVal}, e) => {
            // double click, provide new value for currencySelections state variable using setter
            if (e.detail >= 2) {
                baseState.setCurrencySelections({ ...baseState.currencySelections, convertFrom: optionVal })
            }
        },
        // same as above, again with additional complexity due to we may select multiple items with conversion/comparisons list and we need to be able to slice and remove if 
        // currency selected and then double clicked is already present in the currency comparisions list, then update 
        handleOptionClick_convert({convertState, optionVal, e}) {
          
            if (e.detail >= 2) {
                let newArr;
                let val = optionVal;
                
                if (convertState.currencySelections.convertTo.includes(val)) {

                    let ix = convertState.currencySelections.convertTo.indexOf(val);
                    let leftArr = convertState.currencySelections.convertTo.slice(0, ix);
                    let rightArr = convertState.currencySelections.convertTo.slice(ix + 1);
                    newArr = [...leftArr, ...rightArr];
                } else if (convertState.currencySelections.convertTo.length >= MaxNumOfComparisons) {

                    convertState.setIsFlashDisplayed(true);
                    return; 
                } else {

                    newArr = [...convertState.currencySelections.convertTo, val];
                }
                newArr = GenUtils.alphabetizeStringArr(newArr);
                convertState.setCurrencySelections({ ...convertState.currencySelections, convertTo: newArr})
            }
        },
    }