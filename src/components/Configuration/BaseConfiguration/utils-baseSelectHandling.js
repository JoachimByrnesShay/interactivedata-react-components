        
export const BaseSelectHandling = {
        // used as onKeyUp listener on select element for base currency selection, offers control of behavior upon 'enter' press on option (child of select) 
        // as well as upon upArrow when option at index 0 is currently selected with resulting functionality in latter case of navigating up into base filter input field
        baseSelectKeys: (({selectState, appRefs},e)=>{
            let ix = e.target.selectedIndex;
            // on Enter key pressed on option in select element, the convertFrom currency will be changed ot the new value, i.e. of option selected upon enter pressed
             if(selectState.prevBaseIndex === 0 && e.keyCode === 38){
                selectState.setBaseSelectValue(undefined);
                appRefs.baseSelect.current.selectedIndex = -1;
                appRefs.baseFilter.current.focus();
            }  else if(e.key === 'Enter') {
                 selectState.setCurrencySelections({ ...selectState.currencySelections, convertFrom: e.target.value })
            } 
            // if the previous recorded baseSelect-index value representes the first option (ix 0) and the upArrow is pressed, move up into the base filter field
            // otherwise either downArrow or another key has been pressed, default behavior of down arrow is to continue to traverse downward through the options one by one.
            // default behavior of other alpha keys IF the filter field is blank will be to navigate to the next option whose value starts with the letter pressed, otherwise constrained by filter population
            // update prevBaseIndex in all cases. as implemented, since this method as a sole onKeyUp listener is branching between 2 special cases, the above conditional
            // being dependant upon the prevIndex ensures that we navigate upon the sequence of call to listener-> hear move to ix 0 via index 1 with upArrow, call to listener again (a separate occuccrence) -> hear upArrow from index 0, 
            // rather than be dependant upon e.target.selectedIndex && e.keyCode == 38 as the conditional, 
            // which would not provide the desired control for it would have the effect of jumping into filter field in one listen when moving from -1 to 0, i.e., when moving up the list, the user will never sit on index 0 in that case
            selectState.setPrevBaseIndex(ix);
        }),
        // in addition to selection of currency functionality upon pressing 'Enter' key, it is desirable to have the same functionality upon mouse double-click
        // in the case of base select, as with 'enter', double click with mouse will select a new base currency
        handleOptionClick_base: ({baseState, optionVal}, e) => {
            // double click, provide new value for currencySelections state variable using setter
            if (e.detail >= 2) {
                let convertTo = baseState.currencySelections.convertTo;
                let ixInConvertTo = convertTo.indexOf(optionVal);
                if (ixInConvertTo !== -1){
                    convertTo = [...baseState.currencySelections.convertTo.slice(0,ixInConvertTo),...baseState.currencySelections.convertTo.slice(ixInConvertTo+1)];
                }
                baseState.setCurrencySelections({convertTo: convertTo, convertFrom: optionVal })
            }
        },
}