
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

    