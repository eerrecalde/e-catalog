"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gridItem = _interopRequireDefault(require("../grid-item/grid-item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function ItemsGridView(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      items = _ref.items,
      favorites = _ref.favorites,
      onCheckChanged = _ref.onCheckChanged,
      translations = _ref.translations;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, loading ? /*#__PURE__*/_react.default.createElement("p", null, "Loading...") : '', error ? /*#__PURE__*/_react.default.createElement("p", null, error) : '', !loading && items && items.length === 0 ? /*#__PURE__*/_react.default.createElement("p", null, "No results for your query") : '', /*#__PURE__*/_react.default.createElement("ul", {
    className: "row"
  }, items.map(function (i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i.id,
      className: "col-12 col-xl-3 col-lg-4 col-sm-6 mb-3 align-self-stretch"
    }, /*#__PURE__*/_react.default.createElement(_gridItem.default, {
      id: i.id,
      title: i.title,
      description: i.description || undefined,
      price: i.price || undefined,
      url: i.url || undefined,
      imgUrl: i.imgUrl || undefined,
      translations: translations,
      favorite: favorites.indexOf(i.id) > -1,
      onCheckChanged: onCheckChanged
    }));
  })));
}

ItemsGridView.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  favorites: _propTypes.default.arrayOf(_propTypes.default.string),
  loading: _propTypes.default.bool,
  error: _propTypes.default.string,
  onCheckChanged: _propTypes.default.func,
  translations: _propTypes.default.exact({
    'catalog.item.external': _propTypes.default.string,
    'catalog.item.view': _propTypes.default.string
  })
};
ItemsGridView.defaultProps = {
  favorites: [],
  loading: false,
  error: '',
  onCheckChanged: function onCheckChanged() {},
  translations: {}
};
var _default = ItemsGridView;
exports.default = _default;