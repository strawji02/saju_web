"use strict";
exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 8407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useSajuState),
/* harmony export */   "e": () => (/* binding */ useUserState)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3602);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useUserState = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.devtools)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.subscribeWithSelector)((set)=>({
        name: "",
        setName: (name)=>set(()=>({
                    name
                })
            )
        ,
        gender: 1,
        setGender: (gender)=>set(()=>({
                    gender
                })
            )
        ,
        birth: {
            birthplace: "",
            calendar: "solar",
            birthDay: new Date(),
            birthHour: new Date(),
            intercalation: false
        },
        setBirth: (birth)=>set(()=>({
                    birth
                })
            )
    })
), {
    name: "user-storage",
    getStorage: ()=>sessionStorage
})));
const useSajuState = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.devtools)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.subscribeWithSelector)((set)=>({
        data: {
            lunar: "",
            lunar_ss: "",
            solar: "",
            year: "",
            month: "",
            day: "",
            time: "",
            year_kr: "",
            month_kr: "",
            day_kr: "",
            time_kr: "",
            res_str: ""
        },
        setSaju: (data)=>set(()=>({
                    data
                })
            )
    })
), {
    name: "saju-storage",
    getStorage: ()=>sessionStorage
})));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;