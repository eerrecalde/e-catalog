"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currencies = [{
  id: 'GBP',
  symbol: '£'
}, {
  id: 'EUR',
  symbol: '€'
}, {
  id: 'USD',
  symbol: '$'
}, {
  id: 'ARP',
  symbol: 'ar$'
}];
var defaultCurrency = currencies[0];

function Currency(_ref) {
  var type = _ref.type;
  var currency = currencies.find(function (c) {
    return c.id === type;
  }) || defaultCurrency;
  return /*#__PURE__*/_react.default.createElement("span", null, currency.symbol);
}

Currency.propTypes = {
  type: _propTypes.default.string.isRequired
};
var _default = Currency;
exports.default = _default;