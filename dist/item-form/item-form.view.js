"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useFormInputHandle2 = _interopRequireDefault(require("../../hooks/use-form-input-handle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ItemFormView() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      item = _ref.item,
      onSubmit = _ref.onSubmit;

  console.log('ITM', item);
  var defaultFormData = {
    title: '',
    description: '',
    price: 0,
    url: '',
    imgUrl: ''
  };

  var _useState = (0, _react.useState)(defaultFormData),
      _useState2 = _slicedToArray(_useState, 2),
      formItem = _useState2[0],
      setformItem = _useState2[1];

  var _useFormInputHandle = (0, _useFormInputHandle2.default)({
    id: item.id,
    title: item.title || defaultFormData.title,
    description: item.description || defaultFormData.description,
    price: item.price || defaultFormData.price,
    url: item.url || defaultFormData.url,
    imgUrl: item.imgUrl || defaultFormData.imgUrl
  }, function () {
    console.log('createItem?', inputs, formItem);

    if (!inputs || !Object.keys(inputs).length) {
      return;
    }

    if (inputs.price && typeof inputs.price === 'string') {
      inputs.price = parseInt(inputs.price, 10);
    }

    setformItem(inputs);
    var itm = {};
    Object.keys(inputs).forEach(function (k) {
      itm[k] = inputs[k] || null; // itm[k] = inputs[k];
    });

    if (inputs.title !== '' && !inputs.id) {
      console.log('creatingItem', itm);
      onSubmit({
        type: 'create',
        item: itm
      });
    }

    if (inputs.title !== '' && inputs.id) {
      console.log('updating formItem', itm);
      onSubmit({
        type: 'update',
        item: itm
      });
    }
  }, [item]),
      inputs = _useFormInputHandle.inputs,
      setInputs = _useFormInputHandle.setInputs,
      handleInputChange = _useFormInputHandle.handleInputChange,
      handleSubmit = _useFormInputHandle.handleSubmit; // eslint-disable-next-line


  function resetForm() {
    setInputs(defaultFormData);
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "title"
  }, "Title *", /*#__PURE__*/_react.default.createElement("input", {
    id: "title",
    name: "title",
    type: "text",
    value: inputs.title,
    onChange: handleInputChange,
    className: "form-control",
    "aria-describedby": "titleHelp"
  })), /*#__PURE__*/_react.default.createElement("small", {
    id: "titleHelp",
    className: "form-text text-muted"
  }, "Title to display in the catalog")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "description"
  }, "Description", /*#__PURE__*/_react.default.createElement("textarea", {
    id: "description",
    name: "description",
    value: inputs.description,
    onChange: handleInputChange,
    className: "form-control"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "price"
  }, "Price", /*#__PURE__*/_react.default.createElement("input", {
    id: "price",
    name: "price",
    type: "number",
    value: inputs.price,
    onChange: handleInputChange,
    className: "form-control"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "url"
  }, "Url", /*#__PURE__*/_react.default.createElement("input", {
    id: "url",
    name: "url",
    type: "text",
    value: inputs.url,
    onChange: handleInputChange,
    className: "form-control"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "imgUrl"
  }, "Image Url", /*#__PURE__*/_react.default.createElement("input", {
    id: "imgUrl",
    name: "imgUrl",
    type: "text",
    value: inputs.imgUrl,
    onChange: handleInputChange,
    className: "form-control"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-danger ml-2",
    onClick: resetForm
  }, "Reset")));
}

ItemFormView.propTypes = {
  item: _propTypes.default.shape({
    id: _propTypes.default.string,
    title: _propTypes.default.string,
    description: _propTypes.default.string,
    url: _propTypes.default.string,
    imgUrl: _propTypes.default.string,
    price: _propTypes.default.number
  }),
  onSubmit: _propTypes.default.func.isRequired
};
ItemFormView.defaultProps = {
  item: {}
};
var _default = ItemFormView;
exports.default = _default;