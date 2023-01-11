
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
     

        handleFilterDownArrowToSelect(thisSelectRef,e){
            if(e.keyCode === 40){
                thisSelectRef.current.focus();
                thisSelectRef.current.selectedIndex = 0;
            }
        }
    }

    