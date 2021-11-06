(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./slices/authSlice.js
var authSlice = __webpack_require__(1958);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(2167);
// EXTERNAL MODULE: ./components/Layout/TopNav.module.scss
var TopNav_module = __webpack_require__(2676);
var TopNav_module_default = /*#__PURE__*/__webpack_require__.n(TopNav_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Layout/TopNav.js











function TopNav() {
  // const user = useSelector(selectCurrentUser)
  const user = (0,external_react_redux_.useSelector)(state => state.auth.user);
  const isAuthenticated = (0,external_react_redux_.useSelector)(authSlice/* selectIsAuthenticated */.vN);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();

  const handleLogout = async () => {
    dispatch((0,authSlice/* setLogout */.wt)());
    router.push("/", undefined, {
      shallow: true
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
    bg: "primary",
    variant: "light",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
        children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (TopNav_module_default()).brandNameLinkStyling,
            children: "Koobec@f"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Text, {
        children: /*#__PURE__*/jsx_runtime_.jsx("small", {})
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
        className: "justify-content-end",
        children: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: user && isAuthenticated ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar.Text, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
              href: `/profile/${user.userdata.email}`,
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "light",
                className: (TopNav_module_default()).useProfileButton,
                children: user.userdata.email
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
              href: "login",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "light",
                onClick: handleLogout,
                className: (TopNav_module_default()).logoutButton,
                children: "Logout"
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar.Text, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
              href: "/login",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "light",
                className: (TopNav_module_default()).loginButton,
                children: "Login"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
              href: "/signup",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "light",
                className: (TopNav_module_default()).signupButton,
                children: "Signup"
              })
            })]
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: ./components/Layout/LeftSideNav.module.scss
var LeftSideNav_module = __webpack_require__(4728);
var LeftSideNav_module_default = /*#__PURE__*/__webpack_require__.n(LeftSideNav_module);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(4651);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/Layout/LeftSideNav.js
 // import { Nav } from 'react-bootstrap'
// import styles from 'styles/modules/'











function LeftSideNav() {
  const router = (0,client_router.useRouter)();
  const user = (0,external_react_redux_.useSelector)(state => state.auth.user);
  const isAuthenticated = (0,external_react_redux_.useSelector)(state => state.auth.isAuthenticated);

  const authLinks = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
      as: "li",
      className: (LeftSideNav_module_default()).sidenavItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
          href: "#",
          className: router.pathname === '/' ? ` ${(LeftSideNav_module_default()).navLink} ${(LeftSideNav_module_default()).activeNavLink}` : `${(LeftSideNav_module_default()).navLink}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (LeftSideNav_module_default()).navIconContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faHome
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LeftSideNav_module_default()).linkText,
            children: "Home"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
      as: "li",
      className: (LeftSideNav_module_default()).sidenavItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
        href: `/profile/${user.userdata.email}`,
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
          className: (LeftSideNav_module_default()).navLink,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (LeftSideNav_module_default()).navIconContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faUser
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LeftSideNav_module_default()).linkText,
            children: "Profile"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
      as: "li",
      className: (LeftSideNav_module_default()).sidenavItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
          href: "#",
          className: (LeftSideNav_module_default()).navLink,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (LeftSideNav_module_default()).navIconContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faUsers
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LeftSideNav_module_default()).linkText,
            children: "feature2"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
      as: "li",
      className: (LeftSideNav_module_default()).sidenavItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
          href: "#",
          className: (LeftSideNav_module_default()).navLink,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (LeftSideNav_module_default()).navIconContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faAt
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LeftSideNav_module_default()).linkText,
            children: "Notifications"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
      as: "li",
      className: (LeftSideNav_module_default()).sidenavItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
          href: "#",
          className: (LeftSideNav_module_default()).navLink,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (LeftSideNav_module_default()).navIconContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faSearch
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LeftSideNav_module_default()).linkText,
            children: "Explore"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
      as: "li",
      className: (LeftSideNav_module_default()).sidenavItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
          href: "#",
          className: (LeftSideNav_module_default()).navLink,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (LeftSideNav_module_default()).navIconContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faEnvelope
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LeftSideNav_module_default()).linkText,
            children: "Messages"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
      href: "/newpost",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        size: "lg",
        className: (LeftSideNav_module_default()).postButton,
        children: "Post"
      })
    })]
  });

  const guestLinks = () =>
  /*#__PURE__*/
  // <>
  jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
    as: "li",
    className: (LeftSideNav_module_default()).sidenavItem,
    children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
      href: "login",
      passHref: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
        href: "#",
        className: (LeftSideNav_module_default()).navLink,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (LeftSideNav_module_default()).navIconContainer,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: free_solid_svg_icons_.faUser
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (LeftSideNav_module_default()).linkText,
          children: "Login to View"
        })]
      })
    })
  }) // </>
  ;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
    defaultActiveKey: "/home",
    className: `flex-column ${(LeftSideNav_module_default()).nav}`,
    children: [user !== null && isAuthenticated !== false ? authLinks() : guestLinks(), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
      as: "li",
      className: (LeftSideNav_module_default()).sidenavItem,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link/* default */.Z, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
          href: "#",
          className: (LeftSideNav_module_default()).navLink,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (LeftSideNav_module_default()).navIconContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faAddressBook
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (LeftSideNav_module_default()).linkText,
            children: "example"
          })]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Layout/Layout.js










const siteTitle = "team13socialapp";

const Layout = ({
  children,
  title,
  content
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://use.fontawesome.com/releases/v5.15.4/css/svg-with-js.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: content
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:title",
        content: siteTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "UTF-8"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TopNav, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          md: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(LeftSideNav, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          md: 8,
          children: /*#__PURE__*/jsx_runtime_.jsx("main", {
            children: children
          })
        })]
      })
    })]
  });
};

Layout.defaultProps = {
  title: "social media",
  description: "mvp v0"
};
/* harmony default export */ const Layout_Layout = (Layout);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: external "@reduxjs/toolkit/query/react"
var react_ = __webpack_require__(5641);
// EXTERNAL MODULE: ./slices/authAPI.js
var authAPI = __webpack_require__(4123);
// EXTERNAL MODULE: ./slices/profileAPI.js
var profileAPI = __webpack_require__(8031);
// EXTERNAL MODULE: ./slices/postsAPI.js
var postsAPI = __webpack_require__(1117);
// EXTERNAL MODULE: ./slices/profileSlice.js
var profileSlice = __webpack_require__(8052);
// EXTERNAL MODULE: ./slices/postsSlice.js
var postsSlice = __webpack_require__(5250);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(3643);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./store.js












const reducers = (0,external_redux_namespaceObject.combineReducers)({
  // Add the generated reducer as a specific top-level slice
  [authAPI/* authApi.reducerPath */.iJ.reducerPath]: authAPI/* authApi.reducer */.iJ.reducer,
  [profileAPI/* profileApi.reducerPath */.c_.reducerPath]: profileAPI/* profileApi.reducer */.c_.reducer,
  [postsAPI/* postsApi.reducerPath */.F5.reducerPath]: postsAPI/* postsApi.reducer */.F5.reducer,
  auth: authSlice/* default */.ZP,
  profile: profileSlice/* default */.Z,
  posts: postsSlice/* default */.Z
});
const persistConfig = {
  key: "root",
  version: 1,
  storage: (storage_default()),
  blacklist: [authAPI/* authApi.reducerPath */.iJ.reducerPath, profileAPI/* profileApi.reducerPath */.c_.reducerPath, postsAPI/* postsApi.reducerPath */.F5.reducerPath, authSlice/* default */.ZP, profileSlice/* default */.Z, postsSlice/* default */.Z]
};
const persistedReducer = (0,external_redux_persist_.persistReducer)(persistConfig, reducers);
const makeStore = () => (0,toolkit_.configureStore)({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [external_redux_persist_.FLUSH, external_redux_persist_.REHYDRATE, external_redux_persist_.PAUSE, external_redux_persist_.PERSIST, external_redux_persist_.PURGE, external_redux_persist_.REGISTER]
    }
  }).concat(authAPI/* authApi.middleware */.iJ.middleware).concat(profileAPI/* profileApi.middleware */.c_.middleware).concat(postsAPI/* postsApi.middleware */.F5.middleware)
});
const store = makeStore(); // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

(0,react_.setupListeners)(store.dispatch);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const integration_react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








let persistor = (0,external_redux_persist_.persistStore)(store);

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(integration_react_namespaceObject.PersistGate, {
      loading: null,
      persistor: persistor,
      children: /*#__PURE__*/jsx_runtime_.jsx(Layout_Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 4728:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "LeftSideNav_nav__CGEr_",
	"logo": "LeftSideNav_logo__9T_BF",
	"sidenavItem": "LeftSideNav_sidenavItem__3CfnM",
	"navLink": "LeftSideNav_navLink__3cO0C",
	"activeNavLink": "LeftSideNav_activeNavLink__3hoHU",
	"navIconContainer": "LeftSideNav_navIconContainer__1PJjF",
	"linkText": "LeftSideNav_linkText__7xzZ2",
	"postButton": "LeftSideNav_postButton__2glzl"
};


/***/ }),

/***/ 2676:
/***/ ((module) => {

// Exports
module.exports = {
	"brandNameLinkStyling": "TopNav_brandNameLinkStyling__28Gr4",
	"loginButton": "TopNav_loginButton__1vx-K",
	"signupButton": "TopNav_signupButton__184rK",
	"userProfileButton": "TopNav_userProfileButton__rGeSS",
	"logoutButton": "TopNav_logoutButton__1wGQu"
};


/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3643:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [167,123,958,117,601,41], () => (__webpack_exec__(9484)));
module.exports = __webpack_exports__;

})();