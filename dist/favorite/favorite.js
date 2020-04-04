"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _useOnInputAction2 = _interopRequireDefault(require("../../hooks/use-on-input-action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function Favorite(_ref) {
  var id = _ref.id,
      isChecked = _ref.isChecked,
      onCheckChanged = _ref.onCheckChanged;

  function onChecked() {
    console.log('Checked');
  }

  function onUnchecked() {
    console.log('unchecked');
  }

  var _useOnInputAction = (0, _useOnInputAction2.default)(isChecked, onChecked, onUnchecked, function () {
    onCheckChanged(id);
  }),
      checked = _useOnInputAction.checked,
      handleInputChange = _useOnInputAction.handleInputChange;
  /* eslint-disable jsx-a11y/label-has-associated-control */


  return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: handleInputChange,
    className: "sr-only",
    name: "favorite-".concat(id),
    id: "favorite-".concat(id)
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "cursor-pointer",
    htmlFor: "favorite-".concat(id)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "".concat(checked ? 'text-danger' : 'text-secondary', " delivery-icon"),
    icon: _freeSolidSvgIcons.faHeart
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Favourite")));
}

Favorite.propTypes = {
  id: _propTypes.default.string.isRequired,
  isChecked: _propTypes.default.bool.isRequired,
  onCheckChanged: _propTypes.default.func
};
Favorite.defaultProps = {
  onCheckChanged: function onCheckChanged() {}
};
var _default = Favorite;
exports.default = _default;