"use strict";
(() => {
var exports = {};
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 2498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8277);
/* harmony import */ var _mantine_dates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_dates__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9445);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8407);
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1561);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_7__, zustand_shallow__WEBPACK_IMPORTED_MODULE_8__]);
([_store_store__WEBPACK_IMPORTED_MODULE_7__, zustand_shallow__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Birth = ({ data  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { setSaju  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_7__/* .useSajuState */ .S)();
    const submitMutate = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)((params)=>axios__WEBPACK_IMPORTED_MODULE_4___default().get("//35.84.255.61/:8000/result5.php", {
            params
        })
    , {
        onSuccess: (res)=>{
            console.log(res);
            setSaju(res.data);
            router.push("/result/info");
        }
    });
    const dataValueArr = data.map((d)=>d.value
    );
    const form = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        initialValues: {
            birthplace: "",
            calendar: "solar",
            birthDay: new Date(),
            birthHour: new Date(),
            intercalation: false
        },
        validate: (values)=>({
                birthplace: dataValueArr.includes(values.birthplace) ? null : "\uBAA9\uB85D\uC5D0\uC11C \uC120\uD0DD\uD574\uC8FC\uC138\uC694"
            })
    });
    const { setBirth , ...user } = (0,_store_store__WEBPACK_IMPORTED_MODULE_7__/* .useUserState */ .e)();
    const birthRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(_store_store__WEBPACK_IMPORTED_MODULE_7__/* .useUserState.getState */ .e.getState().birth);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>_store_store__WEBPACK_IMPORTED_MODULE_7__/* .useUserState.subscribe */ .e.subscribe((state)=>birthRef.current = state.birth
        , (state, prevState)=>{
            const params = {
                gender: user.gender === 1 ? "\uB0A8\uC790" : "\uC5EC\uC790",
                birthplace: state.birthplace,
                calendar: state.calendar === "lunar" ? "\uC74C\uB825" : "\uC591\uB825",
                year: state.birthDay.getFullYear(),
                month: state.birthDay.getMonth() + 1,
                day: state.birthDay.getDate(),
                hour: state.birthHour.getHours(),
                min: state.birthHour.getMinutes(),
                intercalation: state.intercalation ? "\uC724\uB2EC" : null
            };
            submitMutate.mutate(params);
        }, {
            equalityFn: zustand_shallow__WEBPACK_IMPORTED_MODULE_8__["default"]
        })
    , // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        justify: "center",
        align: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            style: {
                width: "100%"
            },
            onSubmit: form.onSubmit((values)=>{
                setBirth({
                    ...values
                });
            }),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                    style: {
                        height: "40vh"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                        style: {
                            height: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Autocomplete, {
                            dropdownComponent: "div",
                            maxDropdownHeight: "30vh",
                            label: "\uCD9C\uC0DD\uC9C0",
                            data: data,
                            style: {
                                width: "100%"
                            },
                            limit: 42,
                            ...form.getInputProps("birthplace"),
                            required: true
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                    style: {
                        height: "40vh"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                            style: {
                                height: "20vh"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_dates__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
                                allowFreeInput: true,
                                inputFormat: "YYYY.MM.DD",
                                labelFormat: "YYYY.MM",
                                clearable: false,
                                style: {
                                    width: "100%"
                                },
                                label: "\uC0DD\uB144\uC6D4\uC77C",
                                firstDayOfWeek: "sunday",
                                ...form.getInputProps("birthDay")
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            style: {
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                        style: {
                                            height: "100%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_dates__WEBPACK_IMPORTED_MODULE_2__.TimeInput, {
                                            style: {
                                                width: "100%"
                                            },
                                            ...form.getInputProps("birthHour")
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                                    span: 3,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                        style: {
                                            height: "100%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                                            // style={{ marginTop: '20px' }}
                                            label: "\uC74C\uB825",
                                            checked: form.values.calendar === "lunar",
                                            onChange: (event)=>form.setFieldValue("calendar", event.currentTarget.checked ? "lunar" : "solar")
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                                    span: 3,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                        style: {
                                            height: "100%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                                            label: "\uC724\uB2EC",
                                            disabled: form.values.calendar === "solar",
                                            ...form.getInputProps("intercalation")
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                    style: {
                        height: "20vh"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                        style: {
                            height: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            type: "submit",
                            style: {
                                width: "100%"
                            },
                            children: "Submit"
                        })
                    })
                })
            ]
        })
    });
};
const getServerSideProps = async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://35.84.255.61:8000/dosi.php");
    const resData = await res.data.split("\n");
    const data = resData.map((d)=>{
        if (d !== "") {
            return JSON.parse(d);
        }
        return null;
    }).filter((d)=>d
    );
    return {
        props: {
            data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Birth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 8277:
/***/ ((module) => {

module.exports = require("@mantine/dates");

/***/ }),

/***/ 9445:
/***/ ((module) => {

module.exports = require("@mantine/form");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

module.exports = import("zustand/middleware");;

/***/ }),

/***/ 1561:
/***/ ((module) => {

module.exports = import("zustand/shallow");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [407], () => (__webpack_exec__(2498)));
module.exports = __webpack_exports__;

})();