"use strict";
(() => {
var exports = {};
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "./Controller/middleware/auth.js":
/*!***************************************!*\
  !*** ./Controller/middleware/auth.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Model_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Model/userModel */ "./Model/userModel.js");



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "salmahaninova@gmail.com01672019292");
  if (!decoded) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const user = await _Model_userModel__WEBPACK_IMPORTED_MODULE_1__.default.findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

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

/***/ "./Model/orderModel.js":
/*!*****************************!*\
  !*** ./Model/orderModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),
    ref: 'user'
  },
  address: String,
  mobile: String,
  cart: Array,
  total: Number,
  paymentId: String,
  method: String,
  delivered: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  },
  dateOfPayment: Date
}, {
  timestamps: true
});
let Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('order', orderSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);

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

/***/ "./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Controller_middleware_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Controller/middleware/auth */ "./Controller/middleware/auth.js");
/* harmony import */ var _Model_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Model/orderModel */ "./Model/orderModel.js");
/* harmony import */ var _Model_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Model/productModel */ "./Model/productModel.js");
/* harmony import */ var _Controller_utils_connectDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Controller/utils/connectDB */ "./Controller/utils/connectDB.js");
/* eslint-disable import/no-anonymous-default-export */




(0,_Controller_utils_connectDB__WEBPACK_IMPORTED_MODULE_3__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;

    case "GET":
      await getOrders(req, res);
      break;
  }
});

const getOrders = async (req, res) => {
  try {
    const result = await (0,_Controller_middleware_auth__WEBPACK_IMPORTED_MODULE_0__.default)(req, res);
    let orders;

    if (result.role !== 'admin') {
      orders = await _Model_orderModel__WEBPACK_IMPORTED_MODULE_1__.default.find({
        user: result.id
      }).populate("user", "-password");
    } else {
      orders = await _Model_orderModel__WEBPACK_IMPORTED_MODULE_1__.default.find().populate("user", "-password");
    }

    res.json({
      orders
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createOrder = async (req, res) => {
  try {
    const result = await (0,_Controller_middleware_auth__WEBPACK_IMPORTED_MODULE_0__.default)(req, res);
    const {
      address,
      mobile,
      cart,
      total
    } = req.body;
    const {
      delivered,
      paid
    } = true;
    const newOrder = new _Model_orderModel__WEBPACK_IMPORTED_MODULE_1__.default({
      user: result.id,
      address,
      mobile,
      cart,
      total,
      delivered: delivered,
      paid: paid
    });
    cart.filter(item => {
      return sold(item._id, item.quantity, item.inStock, item.sold);
    });
    await newOrder.save();
    res.json({
      msg: 'Order success! We will contact you to confirm the order.',
      newOrder
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const sold = async (id, quantity, oldInStock, oldSold) => {
  await _Model_productModel__WEBPACK_IMPORTED_MODULE_2__.default.findOneAndUpdate({
    _id: id
  }, {
    inStock: oldInStock - quantity,
    sold: quantity + oldSold
  });
};

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/order/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWhCLENBQXFCO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUEsR0FBRyxDQUFDNkU7QUFBWCxLQUFyQixDQUFQO0FBQ0g7QUFDSixDQXpCRDs7QUEyQkEsTUFBTWhCLElBQUksR0FBRyxPQUFPcEQsRUFBUCxFQUFXeUUsUUFBWCxFQUFxQkcsVUFBckIsRUFBaUNDLE9BQWpDLEtBQTZDO0FBQ3RELFFBQU1oQix5RUFBQSxDQUEwQjtBQUFFOUQsSUFBQUEsR0FBRyxFQUFFQztBQUFQLEdBQTFCLEVBQXVDO0FBQ3pDbUQsSUFBQUEsT0FBTyxFQUFFeUIsVUFBVSxHQUFHSCxRQURtQjtBQUV6Q3JCLElBQUFBLElBQUksRUFBRXFCLFFBQVEsR0FBR0k7QUFGd0IsR0FBdkMsQ0FBTjtBQUlILENBTEQ7Ozs7Ozs7Ozs7QUMvREE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2UtYm9vay8uL0NvbnRyb2xsZXIvbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovL2UtYm9vay8uL0NvbnRyb2xsZXIvdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovL2UtYm9vay8uL01vZGVsL29yZGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vZS1ib29rLy4vTW9kZWwvcHJvZHVjdE1vZGVsLmpzIiwid2VicGFjazovL2UtYm9vay8uL01vZGVsL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly9lLWJvb2svLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZS1ib29rL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZS1ib29rL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vTW9kZWwvdXNlck1vZGVsJztcblxuXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgIGlmICghdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJyB9KVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXG4gICAgaWYgKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLicgfSlcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgX2lkOiBkZWNvZGVkLmlkIH0pXG5cbiAgICByZXR1cm4geyBpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290IH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYXV0aCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAndXNlcidcbiAgICB9LFxuICAgIGFkZHJlc3M6IFN0cmluZyxcbiAgICBtb2JpbGU6IFN0cmluZyxcbiAgICBjYXJ0OiBBcnJheSxcbiAgICB0b3RhbDogTnVtYmVyLFxuICAgIHBheW1lbnRJZDogU3RyaW5nLFxuICAgIG1ldGhvZDogU3RyaW5nLFxuICAgIGRlbGl2ZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcGFpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZGF0ZU9mUGF5bWVudDogRGF0ZVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLm9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdvcmRlcicsIG9yZGVyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWVcbiAgICB9LFxuICAgIHByaWNlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2VzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2hlY2tlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW5TdG9jazoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIHNvbGQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ3Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2YXRjaGFubmVsL2ltYWdlL3VwbG9hZC92MTYwMjc1MjQwMi9hdmF0YXIvYXZhdGFyX2N1Z3E0MC5wbmcnXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL0NvbnRyb2xsZXIvbWlkZGxld2FyZS9hdXRoJ1xuaW1wb3J0IE9yZGVycyBmcm9tICcuLi8uLi8uLi9Nb2RlbC9vcmRlck1vZGVsJ1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uLy4uLy4uL01vZGVsL3Byb2R1Y3RNb2RlbCdcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vQ29udHJvbGxlci91dGlscy9jb25uZWN0REInXG5cbmNvbm5lY3REQigpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlT3JkZXIocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgYXdhaXQgZ2V0T3JkZXJzKHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jb25zdCBnZXRPcmRlcnMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuXG4gICAgICAgIGxldCBvcmRlcnM7XG4gICAgICAgIGlmIChyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykge1xuICAgICAgICAgICAgb3JkZXJzID0gYXdhaXQgT3JkZXJzLmZpbmQoeyB1c2VyOiByZXN1bHQuaWQgfSkucG9wdWxhdGUoXCJ1c2VyXCIsIFwiLXBhc3N3b3JkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmRlcnMgPSBhd2FpdCBPcmRlcnMuZmluZCgpLnBvcHVsYXRlKFwidXNlclwiLCBcIi1wYXNzd29yZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzLmpzb24oeyBvcmRlcnMgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlT3JkZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuICAgICAgICBjb25zdCB7IGFkZHJlc3MsIG1vYmlsZSwgY2FydCwgdG90YWwgfSA9IHJlcS5ib2R5XG5cbiAgICAgICAgY29uc3QgeyBkZWxpdmVyZWQsIHBhaWQgfSA9IHRydWVcblxuICAgICAgICBjb25zdCBuZXdPcmRlciA9IG5ldyBPcmRlcnMoe1xuICAgICAgICAgICAgdXNlcjogcmVzdWx0LmlkLCBhZGRyZXNzLCBtb2JpbGUsIGNhcnQsIHRvdGFsLCBkZWxpdmVyZWQ6IGRlbGl2ZXJlZCwgcGFpZDogcGFpZFxuICAgICAgICB9KVxuXG4gICAgICAgIGNhcnQuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNvbGQoaXRlbS5faWQsIGl0ZW0ucXVhbnRpdHksIGl0ZW0uaW5TdG9jaywgaXRlbS5zb2xkKVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IG5ld09yZGVyLnNhdmUoKVxuXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1zZzogJ09yZGVyIHN1Y2Nlc3MhIFdlIHdpbGwgY29udGFjdCB5b3UgdG8gY29uZmlybSB0aGUgb3JkZXIuJyxcbiAgICAgICAgICAgIG5ld09yZGVyXG4gICAgICAgIH0pXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KVxuICAgIH1cbn1cblxuY29uc3Qgc29sZCA9IGFzeW5jIChpZCwgcXVhbnRpdHksIG9sZEluU3RvY2ssIG9sZFNvbGQpID0+IHtcbiAgICBhd2FpdCBQcm9kdWN0cy5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB7XG4gICAgICAgIGluU3RvY2s6IG9sZEluU3RvY2sgLSBxdWFudGl0eSxcbiAgICAgICAgc29sZDogcXVhbnRpdHkgKyBvbGRTb2xkXG4gICAgfSlcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm5hbWVzIjpbImp3dCIsIlVzZXJzIiwiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwidXNlciIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsIk1PTkdPREJfVVJMIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Iiwib3JkZXJTY2hlbWEiLCJTY2hlbWEiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImFkZHJlc3MiLCJTdHJpbmciLCJtb2JpbGUiLCJjYXJ0IiwiQXJyYXkiLCJ0b3RhbCIsIk51bWJlciIsInBheW1lbnRJZCIsIm1ldGhvZCIsImRlbGl2ZXJlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwicGFpZCIsImRhdGVPZlBheW1lbnQiLCJEYXRlIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJvcmRlciIsIm1vZGVsIiwicHJvZHVjdFNjaGVtYSIsInRpdGxlIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJjYXRlZ29yeSIsImNoZWNrZWQiLCJpblN0b2NrIiwic29sZCIsInByb2R1Y3QiLCJ1c2VyU2NoZW1hIiwibmFtZSIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJPcmRlcnMiLCJQcm9kdWN0cyIsImNyZWF0ZU9yZGVyIiwiZ2V0T3JkZXJzIiwicmVzdWx0Iiwib3JkZXJzIiwiZmluZCIsInBvcHVsYXRlIiwibWVzc2FnZSIsImJvZHkiLCJuZXdPcmRlciIsImZpbHRlciIsIml0ZW0iLCJxdWFudGl0eSIsInNhdmUiLCJtc2ciLCJvbGRJblN0b2NrIiwib2xkU29sZCIsImZpbmRPbmVBbmRVcGRhdGUiXSwic291cmNlUm9vdCI6IiJ9