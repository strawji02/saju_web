"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App(props) {
    const { Component , pageProps  } = props;
    const queryClient = new external_react_query_.QueryClient();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_query_.QueryClientProvider, {
            client: queryClient,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "\uAC04\uC0B0 \uCCA0\uD559\uC6D0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "minimum-scale=1, initial-scale=1, width=device-width"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.MantineProvider, {
                    withGlobalStyles: true,
                    withNormalizeCSS: true,
                    theme: {
                        /** Put your mantine theme override here */ colorScheme: "dark",
                        fontFamily: "Open Sans, sans serif"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Center, {
                        style: {
                            height: "100vh",
                            backgroundColor: "#333333"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Container, {
                            style: {
                                height: "100%",
                                // backgroundColor: '#ffffff',
                                maxWidth: 350,
                                width: 350
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(14));
module.exports = __webpack_exports__;

})();