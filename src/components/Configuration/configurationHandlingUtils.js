//import {MaxNumOfComparisons} from "../globalConstants.js";
export  const GenUtils = {
        // simple utility method to alphabetize string arrays, which sorts what is purposefully a copy of any array passed in, and thus will avoid mutating the original argument
        // utilized to alphabetize the names of selected comparison currencies upon changes, which is then provided as the new value of convertFrom via state
        // on re-renders this allows a continuity of a sensible order of the charts displayed (comparisons only) as well as of the visual display of the current selected comparison currs found in top right config section
        alphabetizeStringArr: (arr)=> {
            let arrayCopy = [...arr].sort();
            return arrayCopy;
        }
    }



