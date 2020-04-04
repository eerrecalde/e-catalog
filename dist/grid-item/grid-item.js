"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _currency = _interopRequireDefault(require("../currency/currency"));

var _favorite = _interopRequireDefault(require("../favorite/favorite"));

require("./_grid-item.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultTranslations = {
  'catalog.item.external': 'Purchase',
  'catalog.item.view': 'View Item'
};

function GridItem(props) {
  var id = props.id,
      favorite = props.favorite,
      onCheckChanged = props.onCheckChanged,
      title = props.title,
      price = props.price,
      description = props.description,
      url = props.url,
      imgUrl = props.imgUrl,
      translations = props.translations;

  var translationsObj = _objectSpread({}, defaultTranslations, {}, translations);

  console.log('props', props);
  console.log('imgUrl', imgUrl);
  console.log('translationsNew', translationsObj);
  console.log('translations', translations);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card ee-card h-100",
    "data-id": id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-image-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imgUrl,
    className: "card-img-top",
    alt: "{title}"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "favorite-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_favorite.default, {
    id: id,
    isChecked: favorite,
    onCheckChanged: onCheckChanged
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column h-100"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, description), url ? /*#__PURE__*/_react.default.createElement("a", {
    href: url
  }, translationsObj['catalog.item.external']) : '', /*#__PURE__*/_react.default.createElement("div", {
    className: "card-text mb-0 pt-2 mt-auto d-flex justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/item-view/".concat(id)
  }, translationsObj['catalog.item.view']), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_currency.default, {
    type: "GBP"
  }), price || 0)))));
}

GridItem.propTypes = {
  id: _propTypes.default.string.isRequired,
  favorite: _propTypes.default.bool,
  onCheckChanged: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  price: _propTypes.default.number,
  url: _propTypes.default.string,
  imgUrl: _propTypes.default.string,
  translations: _propTypes.default.shape({
    'catalog.item.external': _propTypes.default.string,
    'catalog.item.view': _propTypes.default.string
  })
};
GridItem.defaultProps = {
  price: 0,
  description: '',
  url: '',
  favorite: false,
  onCheckChanged: function onCheckChanged() {},
  imgUrl: 'https://www.placehold.it/300x200',
  translations: defaultTranslations
};
var _default = GridItem;
exports.default = _default;