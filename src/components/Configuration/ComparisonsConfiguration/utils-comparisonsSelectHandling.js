
export const ComparisonsSelectHandling = {
        // onkeyup listener with similar functionality to baseSelectKeys offered for the conversion currencies select list, with additional complexity of that the comparisons list allows for selecting an array of size up to MaxNumOfComparisons,
        // and not only one value.  This array is the value of the state variable currencySelections.convertTo.  "enter" key on comparison/conversion currency option is a selection funcationality which 
        // will either add the selected currency to the selected comparisons which will be displayed as charts vs the selected base currency, or will remove the currency from the conversions list if it 
        // is already present in the list, or will result in displaying a flash warning message if no further comparison currencies can be added unless one or more are deselected due to being at max size for the convertTo array,
        // similar functionality to baseSelectKeys offered for the conversion currencies select list, with additional complexity of that the comparisons list allows for selecting an array of size up to MaxNumOfComparisons,
        // and not only one value.  This array is the value of the state variable currencySelections.convertTo.  "enter" key on comparison/conversion currency option is a selection funcationality which 
        // will either add the selected currency to the selected comparisons which will be displayed as charts vs the selected base currency, or will remove the currency from the conversions list if it 
        // is already present in the list, or will result in displaying a flash warning message if no further comparison currencies can be added unless one or more are deselected due to being at max size for the convertTo array
        convertSelectKeys: ({selectState, appRefs},MaxNumOfComparisons, e)=> {
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
                    newArr = [...selectState.currencySelections.convertTo, val].sort();
                    // the above may need to be alphabetized in order that it appears in an organized fashion in the configuration display of comparison currencies in the top right
                }
                selectState.setCurrencySelections({ ...selectState.currencySelections, convertTo: newArr})
            }
            // store the current index as the "previous" index for the next call
            selectState.setPrevConvertIndex(ix);
        },
        // in addition to selection of currency functionality upon pressing 'Enter' key, it is desirable to have the same functionality upon mouse double-click
        // as with 'enter', double click with mouse will select a comparison/conversion currency, with additional complexity due to we may select multiple items with conversion/comparisons list and we need to be able to slice and remove if 
        // currency selected and then double clicked is already present in the currency comparisions list, then update 
        handleOptionClick_convert({convertState, optionVal, MaxNumOfComparisons, e}) {
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
                newArr.sort();
                convertState.setCurrencySelections({ ...convertState.currencySelections, convertTo: newArr})
            }
        },
    }
