
// export const Geosearch = {
//   limit:3,
//   locale: "en",
//   apiKey : "d60994ed113be6d9714d9dcbae2bc189", 
//   experienceVersion: "STAGING",
//   locationRadius: 804672,
//   sessionTrackingEnabled: true,
//   endpoints: {
//     geosearch:"//liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?api_key=d60994ed113be6d9714d9dcbae2bc189&v=20230110&location=&location=${location}&radius=2500",   
//     questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
//     universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
//     verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
//     filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

//   }
// }



export const Geosearch = {
  limit:3,
  locale: "en",
  apiKey : "d60994ed113be6d9714d9dcbae2bc189",
  locationRadius: 804672,
  sessionTrackingEnabled: true,
  endpoints: {
    geosearch: "",
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

  }
}