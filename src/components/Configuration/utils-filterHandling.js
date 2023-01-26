
export const FilterHandling = {
        handleFilterDownArrowToSelect(thisSelectRef,e){
            if(e.keyCode === 40){
                thisSelectRef.current.focus();
                thisSelectRef.current.selectedIndex = 0;
            }
        }
    }

    