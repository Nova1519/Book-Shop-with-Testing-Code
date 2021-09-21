"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/accessToken";
exports.ids = ["pages/api/auth/accessToken"];
exports.modules = {

/***/ "./Controller/utils/connectDB.js":
/*!***************************************!*\
  !*** ./Controller/utils/connectDB.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {
    console.log('Already connected.');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://nova_1519:nova_1519@books.thre0.mongodb.net/Shop?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);

/***/ }),

/***/ "./Controller/utils/generateToken.js":
/*!*******************************************!*\
  !*** ./Controller/utils/generateToken.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAccessToken": () => (/* binding */ createAccessToken),
/* harmony export */   "createRefreshToken": () => (/* binding */ createRefreshToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAccessToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, "salmahaninova@gmail.com01672019292", {
    expiresIn: '15m'
  });
};
const createRefreshToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, "salmahaninova@gmail.com0167201929201303082197", {
    expiresIn: '7d'
  });
};

/***/ }),

/***/ "./Model/userModel.js":
/*!****************************!*\
  !*** ./Model/userModel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  }
}, {
  timestamps: true
});
let Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('user', userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);

/***/ }),

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Model_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Model/userModel */ "./Model/userModel.js");
/* harmony import */ var _Controller_utils_connectDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Controller/utils/connectDB */ "./Controller/utils/connectDB.js");
/* harmony import */ var _Controller_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Controller/utils/generateToken */ "./Controller/utils/generateToken.js");
/* eslint-disable import/no-anonymous-default-export */




(0,_Controller_utils_connectDB__WEBPACK_IMPORTED_MODULE_2__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({
      err: 'Please login now!'
    });
    const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(rf_token, "salmahaninova@gmail.com0167201929201303082197");
    if (!result) return res.status(400).json({
      err: 'Your token is incorrect or has expired.'
    });
    const user = await _Model_userModel__WEBPACK_IMPORTED_MODULE_1__.default.findById(result.id);
    if (!user) return res.status(400).json({
      err: 'User does not exist.'
    });
    const access_token = (0,_Controller_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__.createAccessToken)({
      id: user._id
    });
    res.json({
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root
      }
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
});

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/accessToken.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vZS1ib29rLy4vQ29udHJvbGxlci91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vZS1ib29rLy4vQ29udHJvbGxlci91dGlscy9nZW5lcmF0ZVRva2VuLmpzIiwid2VicGFjazovL2UtYm9vay8uL01vZGVsL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly9lLWJvb2svLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly9lLWJvb2svZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9lLWJvb2svZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gKHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCwge2V4cGlyZXNJbjogJzE1bSd9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQsIHtleHBpcmVzSW46ICc3ZCd9KVxufSIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2YXRjaGFubmVsL2ltYWdlL3VwbG9hZC92MTYwMjc1MjQwMi9hdmF0YXIvYXZhdGFyX2N1Z3E0MC5wbmcnXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL01vZGVsL3VzZXJNb2RlbCdcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vQ29udHJvbGxlci91dGlscy9jb25uZWN0REInXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NUb2tlbiB9IGZyb20gJy4uLy4uLy4uL0NvbnRyb2xsZXIvdXRpbHMvZ2VuZXJhdGVUb2tlbidcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmZfdG9rZW4gPSByZXEuY29va2llcy5yZWZyZXNodG9rZW47XG4gICAgICAgIGlmICghcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ1BsZWFzZSBsb2dpbiBub3chJyB9KVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGp3dC52ZXJpZnkocmZfdG9rZW4sIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVUKVxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiAnWW91ciB0b2tlbiBpcyBpbmNvcnJlY3Qgb3IgaGFzIGV4cGlyZWQuJyB9KVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kQnlJZChyZXN1bHQuaWQpXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiAnVXNlciBkb2VzIG5vdCBleGlzdC4nIH0pXG5cbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gY3JlYXRlQWNjZXNzVG9rZW4oeyBpZDogdXNlci5faWQgfSlcblxuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxuICAgICAgICAgICAgICAgIHJvb3Q6IHVzZXIucm9vdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pXG4gICAgfVxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiLCJqd3QiLCJjcmVhdGVBY2Nlc3NUb2tlbiIsInBheWxvYWQiLCJzaWduIiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsImV4cGlyZXNJbiIsImNyZWF0ZVJlZnJlc2hUb2tlbiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImF2YXRhciIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwidXNlciIsIm1vZGVsIiwiVXNlcnMiLCJyZXEiLCJyZXMiLCJyZl90b2tlbiIsImNvb2tpZXMiLCJyZWZyZXNodG9rZW4iLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwidmVyaWZ5IiwiZmluZEJ5SWQiLCJpZCIsImFjY2Vzc190b2tlbiIsIl9pZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9