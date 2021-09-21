"use strict";
(() => {
var exports = {};
exports.id = "pages/api/product";
exports.ids = ["pages/api/product"];
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

/***/ "./Model/productModel.js":
/*!*******************************!*\
  !*** ./Model/productModel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
let Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('product', productSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);

/***/ }),

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Model_productModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Model/productModel */ "./Model/productModel.js");
/* harmony import */ var _Controller_utils_connectDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Controller/utils/connectDB */ "./Controller/utils/connectDB.js");
/* eslint-disable import/no-anonymous-default-export */


(0,_Controller_utils_connectDB__WEBPACK_IMPORTED_MODULE_1__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;

    case "POST":
      await createProduct(req, res);
      break;
  }
});

const getProducts = async (req, res) => {
  try {
    const products = await _Model_productModel__WEBPACK_IMPORTED_MODULE_0__.default.find();
    res.json({
      status: 'success',
      result: products.length,
      products
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      inStock,
      description,
      content,
      category,
      images
    } = req.body;
    if (!title || !price || !inStock || !description || !content === 'all' || images.length === 0) return res.status(400).json({
      err: 'Please add all the fields.'
    });
    const newProduct = new _Model_productModel__WEBPACK_IMPORTED_MODULE_0__.default({
      title: title.toLowerCase(),
      price,
      inStock,
      description,
      content,
      category,
      images
    });
    await newProduct.save();
    res.json({
      msg: 'Success! Created a new product'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FEUDtBQUNnQlIsTUFBQUEsV0FEaEI7QUFDNkJDLE1BQUFBLE9BRDdCO0FBQ3NDRyxNQUFBQSxRQUR0QztBQUNnREYsTUFBQUE7QUFEaEQsS0FBYixDQUFuQjtBQUlBLFVBQU0yQixVQUFVLENBQUNFLElBQVgsRUFBTjtBQUVBZCxJQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUztBQUFFUyxNQUFBQSxHQUFHLEVBQUU7QUFBUCxLQUFUO0FBRUgsR0FmRCxDQWVFLE9BQU8xQyxHQUFQLEVBQVk7QUFDVixXQUFPMkIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEIsQ0FBcUI7QUFBRWpDLE1BQUFBLEdBQUcsRUFBRUEsR0FBRyxDQUFDcUM7QUFBWCxLQUFyQixDQUFQO0FBQ0g7QUFDSixDQW5CRDs7Ozs7Ozs7OztBQ2hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2UtYm9vay8uL0NvbnRyb2xsZXIvdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL2UtYm9vay8uL01vZGVsL3Byb2R1Y3RNb2RlbC5qcyIsIndlYnBhY2s6Ly9lLWJvb2svLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lLWJvb2svZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGluU3RvY2s6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBzb2xkOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vLi4vLi4vTW9kZWwvcHJvZHVjdE1vZGVsJ1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi9Db250cm9sbGVyL3V0aWxzL2Nvbm5lY3REQidcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGdldFByb2R1Y3RzKHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdHMuZmluZCgpXG5cbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICByZXN1bHQ6IHByb2R1Y3RzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb2R1Y3RzXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSlcbiAgICB9XG59XG5cblxuY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIHByaWNlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnksIGltYWdlcyB9ID0gcmVxLmJvZHlcblxuICAgICAgICBpZiAoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdQbGVhc2UgYWRkIGFsbCB0aGUgZmllbGRzLicgfSlcblxuXG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdHMoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLnRvTG93ZXJDYXNlKCksIHByaWNlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnksIGltYWdlc1xuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IG5ld1Byb2R1Y3Quc2F2ZSgpXG5cbiAgICAgICAgcmVzLmpzb24oeyBtc2c6ICdTdWNjZXNzISBDcmVhdGVkIGEgbmV3IHByb2R1Y3QnIH0pXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVyciIsInByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJwcmljZSIsIk51bWJlciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImltYWdlcyIsIkFycmF5IiwiY2F0ZWdvcnkiLCJjaGVja2VkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpblN0b2NrIiwic29sZCIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwicHJvZHVjdCIsIm1vZGVsIiwiUHJvZHVjdHMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJnZXRQcm9kdWN0cyIsImNyZWF0ZVByb2R1Y3QiLCJwcm9kdWN0cyIsImZpbmQiLCJqc29uIiwic3RhdHVzIiwicmVzdWx0IiwibGVuZ3RoIiwibWVzc2FnZSIsImJvZHkiLCJuZXdQcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJzYXZlIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==