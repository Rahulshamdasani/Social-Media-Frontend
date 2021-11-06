"use strict";
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 1958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wt": () => (/* binding */ setLogout),
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "av": () => (/* binding */ setUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "HF": () => (/* binding */ selectCurrentUser),
/* harmony export */   "vN": () => (/* binding */ selectIsAuthenticated),
/* harmony export */   "rK": () => (/* binding */ selectToken)
/* harmony export */ });
/* unused harmony exports setCredentials, setAuthenticated, selectAccess, selectRefresh */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3643);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);


const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    access: null,
    refresh: null
  },
  reducers: {
    setToken: (state, {
      payload: {
        access,
        refresh
      }
    }) => {
      state.access = access;
      state.refresh = refresh;
      state.isAuthenticated = true;
    },
    setUser: (state, {
      payload
    }) => {
      // setUser: (state, { payload: { user } }) => {
      state.user = payload;
    },
    setAuthenticated: state => {
      state.isAuthenticated = true;
    },
    setLogout: (redux_persist__WEBPACK_IMPORTED_MODULE_1__.PURGE, state => {
      state.user = null;
      state.isAuthenticated = false;
      state.access = null;
      state.refresh = null;
    })
  },
  extraReducers: builder => {
    // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
    // this case is needed on logout to purge persisted storage or you get phantom calls in the cache? idk
    builder.addCase(redux_persist__WEBPACK_IMPORTED_MODULE_1__.PURGE, state => {
      setLogout.removeAll(state);
    }); // extraReducers: (builder) => {
    // example from official docs if you need to access login status from other Apis?
    // builder
    //   .addMatcher(postApi.endpoints.login.matchPending, (state, action) => {
    //     console.log('pending', action);
    //   })
    //   .addMatcher(postApi.endpoints.login.matchFulfilled, (state, action) => {
    //     console.log('fulfilled', action);
    //     state.user = action.payload.result.user;
    //     state.token = action.payload.result.token;
    //   })
    //   .addMatcher(postApi.endpoints.login.matchRejected, (state, action) => {
    //     console.log('rejected', action);
    //   });
  }
}); // export const {  } = slice.actions

const {
  setLogout,
  setCredentials,
  setToken,
  setUser,
  setAuthenticated
} = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);
const selectCurrentUser = state => state.auth.user;
const selectIsAuthenticated = state => state.auth.isAuthenticated;
const selectToken = state => state.auth.token;
const selectAccess = state => state.auth.access;
const selectRefresh = state => state.auth.refresh;

/***/ })

};
;