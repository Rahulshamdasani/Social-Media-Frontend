"use strict";
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 4123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iJ": () => (/* binding */ authApi),
/* harmony export */   "Dt": () => (/* binding */ useUserCreateMutation),
/* harmony export */   "IG": () => (/* binding */ useUserActivateMutation),
/* harmony export */   "qh": () => (/* binding */ useResendActivationEmailMutation),
/* harmony export */   "gL": () => (/* binding */ useResetPasswordMutation),
/* harmony export */   "Oc": () => (/* binding */ useResetPasswordConfirmMutation),
/* harmony export */   "OQ": () => (/* binding */ useLoginUserMutation),
/* harmony export */   "y6": () => (/* binding */ useGoogleAuthMutation)
/* harmony export */ });
/* unused harmony exports useGoogleLoginQuery, useLoadUserQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5641);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3643);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);


const authApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
  reducerPath: 'authApi',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
    baseUrl: 'https://koobecaff.herokuapp.com/auth/',
    prepareHeaders: (headers, {
      getState
    }) => {
      const isAuthenticated = getState().auth.isAuthenticated;
      const token = getState().auth.token;
      const user = getState().auth.user;
      const access = getState().auth.access;
      const refresh = getState().auth.refresh;

      if (access && refresh) {
        // headers.set("authentication", `Bearer ${token}`)
        // headers.set("Authentication", `JWT ${access}`)
        headers.set("Authentication", `Bearer ${access}`);
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");
      }

      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    }
  }),
  endpoints: builder => ({
    userCreate: builder.mutation({
      query(data) {
        const {
          email,
          password,
          re_password
        } = data;
        return {
          url: 'users/',
          method: 'POST',
          body: {
            email: `${email}`,
            password: `${password}`,
            re_password: `${re_password}`
          }
        };
      }

    }),
    userActivate: builder.mutation({
      query(data) {
        const {
          uid,
          token
        } = data;
        return {
          url: `users/activation/`,
          // url: `users/activate/${uid}/${token}`,
          method: 'POST',
          body: {
            uid: `${uid}`,
            token: `${token}`
          }
        };
      }

    }),
    resendActivationEmail: builder.mutation({
      query(data) {
        const {
          email
        } = data;
        return {
          url: '/users/resend_activation/',
          method: 'POST',
          body: {
            email: `${email}`
          } // body: JSON.stringify({ email })

        };
      }

    }),
    resetPassword: builder.mutation({
      query(data) {
        const {
          email
        } = data;
        return {
          url: 'users/reset_password/',
          method: 'POST',
          body: {
            email: `${email}`
          }
        };
      }

    }),
    resetPasswordConfirm: builder.mutation({
      query(data) {
        const {
          uid,
          token,
          new_password,
          re_new_password
        } = data;
        console.log('################');
        console.log(typeof data);
        return {
          url: 'users/reset_password_confirm/',
          method: 'POST',
          body: {
            uid,
            token,
            new_password,
            re_new_password
          }
        };
      }

    }),
    loginUser: builder.mutation({
      query(data) {
        const {
          email,
          password
        } = data;
        return {
          url: 'jwt/create/',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: {
            email: `${email}`,
            password: `${password}`
          }
        };
      }

    }),
    googleLogin: builder.query({
      // transformResponse: (response) => response.data,
      query() {
        // const { redirect_uri } = data
        const redirect_uri = 'https://koobecaff.herokuapp.com/google';
        return {
          url: 'o/google-oauth2/?redirect_uri=https://koobecaff.herokuapp.com/google',
          method: 'GET',
          body: {
            redirect_uri: `${redirect_uri}`
          }
        };
      }

    }),
    googleAuth: builder.mutation({
      query(data) {
        const {
          code,
          state
        } = data;
        const details = {
          'state': state,
          'code': code
        };
        const formData = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
        return {
          url: `o/google-oauth2/?${formData}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST' // body: {}

        };
      }

    })
  })
}); // format to generate hook for specific api endpoint query:
// for POST/PUT/PATCH/DELETE requests:
//    use<nameOfQuery>Mutation
// for GET requests:
//    use<nameOfQuery>Query

const {
  useUserCreateMutation,
  useUserActivateMutation,
  useResendActivationEmailMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useLoginUserMutation,
  useGoogleLoginQuery,
  useGoogleAuthMutation,
  useLoadUserQuery
} = authApi;

/***/ })

};
;