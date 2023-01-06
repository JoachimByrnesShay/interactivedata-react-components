// url and app_id for exchangerates provider, to be utilized in fetchAll method.
const FetchConstants = {
  baseURL: "https://openexchangerates.org/api/",
  app_id: "0f6288f8f4b4421ba1a18cf74a5b9dcf",
};

// limit on maximum num of comparison currencies, to compare with base currency, dictates the quantity of charts which will display and 
// other UI behavior signaling to user such as the threshhold at which flash message alerts user that no further currencies can be 
// added to comparisons list without removing one or more
export const MaxNumOfComparisons = 7;


export default FetchConstants;