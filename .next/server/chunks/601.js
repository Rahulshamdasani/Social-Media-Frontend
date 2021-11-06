exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 8031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c_": () => (/* binding */ profileApi),
/* harmony export */   "oe": () => (/* binding */ useGetProfileByEmailQuery),
/* harmony export */   "TG": () => (/* binding */ useUpdateProfileMutation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5641);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const profileApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
  reducerPath: 'profileApi',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
    baseUrl: 'https://koobecaff.herokuapp.com/profile/',
    prepareHeaders: (headers, {
      getState
    }) => {
      // const isAuthenticated = getState().auth.isAuthenticated
      // const token = getState().auth.token
      // const user = getState().auth.user
      // const access = getState().auth.access
      // const refresh = getState().auth.refresh
      // if (access && refresh) {
      //   // headers.set("authentication", `Bearer ${token}`)
      //   headers.set("Authentication", `JWT ${access}`)
      //   headers.set("Accept", "application/json")
      //   headers.set("Content-Type", "application/json")
      // }
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    }
  }),
  endpoints: builder => ({
    getProfileByEmail: builder.query({
      query: email => `${email}`
    }),
    updateProfile: builder.mutation({
      query(data) {
        const {
          email,
          first_name,
          last_name,
          bio,
          display_name
        } = data;
        return {
          url: `edit/${email}`,
          method: 'PATCH',
          body: {
            first_name: `${first_name}`,
            last_name: `${last_name}`,
            bio: `${bio}`,
            locations: "placeholder",
            display_name: `${display_name}`
          }
        };
      }

    })
  }),
  refetchOnMountOrArgChange: true
}); // format to generate hook for specific api endpoint query:
// for POST/PUT/PATCH/DELETE requests:
//    use<nameOfQuery>Mutation
// for GET requests:
//    use<nameOfQuery>Query

const {
  useGetProfileByEmailQuery,
  useUpdateProfileMutation
} = profileApi;

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;