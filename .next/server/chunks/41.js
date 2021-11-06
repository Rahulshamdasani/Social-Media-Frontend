"use strict";
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 5250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export setPosts */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "posts",
  initialState: {
    posts: []
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  } // extraReducers: {
  //   },

});
const {
  setPosts
} = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);

/***/ }),

/***/ 8052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ setProfileInfo),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'profile',
  initialState: {
    displayname: "",
    firstname: "",
    lastname: "",
    bio: ""
  },
  reducers: {
    setProfileInfo: (state, {
      payload: {
        displayname,
        firstname,
        lastname,
        bio
      }
    }) => {
      state.displayname = displayname;
      state.firstname = firstname;
      state.lastname = lastname;
      state.bio = bio;
    } // setUser: (state, { payload }) => {
    // // setUser: (state, { payload: { user } }) => {
    //   state.user = payload
    // },
    // setAuthenticated: (state) => {
    //   state.isAuthenticated = true
    // },
    // setLogout: (state) => {
    //   state.user = null
    //   state.isAuthenticated = false
    //   state.access = null
    //   state.refresh = null
    // }

  }
});
const {
  setProfileInfo
} = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);

/***/ })

};
;