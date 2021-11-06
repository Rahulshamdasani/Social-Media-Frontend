"use strict";
exports.id = 117;
exports.ids = [117];
exports.modules = {

/***/ 1117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F5": () => (/* binding */ postsApi),
/* harmony export */   "Se": () => (/* binding */ useGetPostsByUserQuery),
/* harmony export */   "mD": () => (/* binding */ useGetAllPostsQuery),
/* harmony export */   "u3": () => (/* binding */ useCreatePostMutation),
/* harmony export */   "jn": () => (/* binding */ useDeletePostMutation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5641);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const postsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
  reducerPath: "postsApi",
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
    baseUrl: "https://koobecaff.herokuapp.com/posts/",
    prepareHeaders: (headers, {
      getState
    }) => {
      // const access = getState().auth.access
      // if (access) {
      // headers.set("Authentication", `Bearer ${access}`)
      //   // headers.set("Authentication", `JWT ${access}`)
      //   headers.set("Authentication", `Bearer ${access}`)
      //   headers.set("Accept", "application/json")
      //   headers.set("Content-Type", "application/json")
      // }
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    }
  }),
  tagTypes: ["posts"],
  endpoints: builder => ({
    getAllPosts: builder.query({
      query: () => "",
      providesTags: ["posts"]
    }),
    getPostsByUser: builder.query({
      query: email => `${email}`,
      providesTags: ["posts"]
    }),
    createPost: builder.mutation({
      query(data) {
        // console.log(`data: ${data}`)
        const {
          post_author,
          post_text,
          access_token
        } = data; // const body = JSON.stringify({ post_author, post_text });
        // console.log(`accesstoken in RTKQ: ${access_Token}`)
        // console.log(`postauthor in RTKQ: ${post_Author}`)
        // console.log(`posttext in RTKQ: ${post_Text}`)

        return {
          url: "create/",
          headers: {
            Authorization: `JWT ${access_token}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: {
            post_author: `${post_author}`,
            post_text: `${post_text}`
          }
        };
      },

      invalidatesTags: ["posts"]
    }),
    deletePost: builder.mutation({
      query(data) {
        const {
          postIDtoDelete,
          access_Token
        } = data;
        return {
          url: `delete/${postIDtoDelete}/`,
          headers: {
            Authorization: `JWT ${access_Token}`
          },
          method: "DELETE"
        };
      },

      invalidatesTags: ["posts"]
    }),
    // getPost: builder.query({
    //   query(data) {
    //     const { postID } = data;
    //     return {
    //       url: `${postID}`,
    //     };
    //   },
    // }),
    refetchOnMountOrArgChange: true
  })
});
const {
  useGetPostsByUserQuery,
  useGetAllPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation
} = postsApi;

/***/ })

};
;