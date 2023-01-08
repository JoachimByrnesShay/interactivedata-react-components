const ChartModalHandlers = {
    // use state variables which correspond via indices to each modal to store boolean values.  These determine the setting (or not) of classes within the JSX for the modal which determine the UI experience of modal
    // in the JSX, technically the index comes from map function returning containers (divs) with modal as grandchildren (divs with p siblings), thus the modal index is really a unit index for a composite construction of div > div > (p + div), in the map context
    showModal: (e, ix, { isChartModalNow, setIsChartModalNow }) => {
        let thisModalDisplay = true;

        // insert a falsey value into isChartModalAnimating, as we are showing it not hiding it (no animation on show)
        let resetIsChartModalAnimating = [
            ...isChartModalNow.animatingDisappearance.splice(0, ix),
            !thisModalDisplay,
            ...isChartModalNow.animatingDisappearance.splice(ix + 1),
        ];

        // represent the current modal display, by inserting a truthy value at the appropriate index.  There will always be only one modal showing at a time as any modal disappears on mouseleave of its container
        let newDisplaySet = [
            ...isChartModalNow.displayed.slice(0, ix),
            thisModalDisplay,
            ...isChartModalNow.displayed.slice(ix + 1),
        ];
        setIsChartModalNow({
            animatingDisappearance: resetIsChartModalAnimating,
            displayed: newDisplaySet,
        });
    },
    hideModal: (e, ix, { isChartModalNow, setIsChartModalNow }) => {
        if (isChartModalNow.displayed[ix]) {
            // if we hideModal, we mark modal as no display but is animating, ie. the only animation is the disappearance of the mdoal
            // we use the isChartModalDisplayed and isChartModalAnimatingDisappearance state variables which are arrays of a size == to the max num of comparisions + 1, as the base currency will also be displayed
            // as a chart to the left of all comparisons.   For each given modal element, the value of isChartModal... and isChartModalAnim... at the ix equal to the corresponding modals ix
            // determines whether certain classes are set on the JSX for that modal and its container.
            let thisModalDisplayState = false;
            let animating = true;
            let resetIsChartModalAnimating = [
                ...isChartModalNow.animatingDisappearance.splice(0, ix),
                animating,
                ...isChartModalNow.animatingDisappearance.splice(ix + 1),
            ];

            let newDisplaySet = [
                ...isChartModalNow.displayed.slice(0, ix),
                thisModalDisplayState,
                ...isChartModalNow.displayed.slice(ix + 1),
            ];

            setIsChartModalNow({
                animatingDisappearance: resetIsChartModalAnimating,
                displayed: newDisplaySet,
            });
        }
    },
};

export default ChartModalHandlers;