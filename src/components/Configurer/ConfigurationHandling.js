import {MaxNumOfComparisons} from "../App/AppConstants.js";
   const GenUtils = {
        // simple utility method to alphabetize string arrays, which sorts what is purposefully a copy of any array passed in, and thus will avoid mutating the original argument
        // utilized to alphabetize the names of selected comparison currencies upon changes, which is then provided as the new value of convertFrom via state
        // on re-renders this allows a continuity of a sensible order of the charts displayed (comparisons only) as well as of the visual display of the current selected comparison currs found in top right config section
        alphabetizeStringArr: (arr)=> {
            let arrayCopy = [...arr].sort();
            return arrayCopy;
        }
    }

export const FilterHandling = {
        // the value of base filter field input, used as new value in JSX upon changes
        // handleBaseFilterChange: (thisFilter, setBaseFilter)=> { 
        //     let val = thisFilter.target.value;
        //     setBaseFilterVal(val);
        // },
        // // the value of convert/comparison filter field input
        // handleConvertFilterChange(thisFilter, setConvertFilter) {
        //     let val = thisFilter.target.value;
        //     setConvertFilterVal(val);
        // },
        // control of focus, arrowDown while in base filter field allows use to navigate seamlessly into first index of base select list as if it were all one element
        handleBaseFilterDownArrowToSelect(baseCurrSelectRef,e) {
            // 40 is arrowDown
            if (e.keyCode === 40){
                baseCurrSelectRef.current.focus();
                // manually set index to 0 (first) because otherwise the select element is focused but index is undefined at first,
                // which a consequence that the user is required to use 2 downarrow key hits to get to index 0 instead of 1.
                baseCurrSelectRef.current.selectedIndex = 0;
            }
        },
        // control of focus, re arrowDownfrom conversion currencies filter input field to conversion currencieds select list, as above
        handleConvertFilterDownArrowToSelect(convertCurrSelectRef,e) {
            if (e.keyCode === 40) {
                convertCurrSelectRef.current.focus();
                convertCurrSelectRef.current.selectedIndex = 0;
            }
        }
    }

export   const SelectHandling = {
 
        // used as onKeyUp listener on select element for base currency selection, offers control of behavior upon 'enter' press on option (child of select) 
        // as well as upon upArrow when option at index 0 is currently selected with resulting functionality in latter case of navigating up into base filter input field
        baseSelectKeys: ({selectState, refs, e})=>{
            let ix = e.target.selectedIndex;

            // on Enter key pressed on option in select element, the convertFrom currency will be changed ot the new value, i.e. of option selected upon enter pressed
            if(e.key === 'Enter') {
                 selectState.setCurrencySelections({ ...selectState.currencySelections, convertFrom: e.target.value })
            } 
            // if the previous recorded baseSelect-index value representes the first option (ix 0) and the upArrow is pressed, move up into the base filter field
            if(selectState.prevBaseIndex === 0 && e.keyCode === 38){
                selectState.setBaseSelectValue(undefined);
                refs.baseSelect.current.selectedIndex = -1;
                refs.baseFilter.current.focus();

            } 
            // otherwise either downArrow or another key has been pressed, default behavior of down arrow is to continue to traverse downward through the options one by one.
            // default behavior of other alpha keys IF the filter field is blank will be to navigate to the next option whose value starts with the letter pressed, otherwise constrained by filter population
            // update prevBaseIndex in all cases. as implemented, since this method as a sole onKeyUp listener is branching between 2 special cases, the above conditional
            // being dependant upon the prevIndex ensures that we navigate upon the sequence of call to listener-> hear move to ix 0 via index 1 with upArrow, call to listener again (a separate occuccrence) -> hear upArrow from index 0, 
            // rather than be dependant upon e.target.selectedIndex && e.keyCode == 38 as the conditional, 
            // which would not provide the desired control for it would have the effect of jumping into filter field in one listen when moving from -1 to 0, i.e., when moving up the list, the user will never sit on index 0 in that case
            selectState.setPrevBaseIndex(ix);
        },
        // similar functionality to baseSelectKeys offered for the conversion currencies select list, with additional complexity of that the comparisons list allows for selecting an array of size up to MaxNumOfComparisons,
        // and not only one value.  This array is the value of the state variable currencySelections.convertTo.  "enter" key on comparison/conversion currency option is a selection funcationality which 
        // will either add the selected currency to the selected comparisons which will be displayed as charts vs the selected base currency, or will remove the currency from the conversions list if it 
        // is already present in the list, or will result in displaying a flash warning message if no further comparison currencies can be added unless one or more are deselected due to being at max size for the convertTo array
        convertSelectKeys: ({selectState, refs, e})=> {
            let ix = e.target.selectedIndex;

            let val = e.target.value;
            // using same methodology as in baseSelectKeys of employing the conversion/comparisons list selected idnex from the last render to modulate the behavior
            if (selectState.prevConvertIndex === 0 && e.keyCode === 38) {
                selectState.setConvertSelectValue(undefined);
                refs.convertSelect.current.selectedIndex = -1;
                refs.convertFilter.current.focus();
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
        handleOptionClick_base: ({baseState, optionVal, e})=> {
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