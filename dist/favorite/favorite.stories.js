"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Active = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _favorite = _interopRequireDefault(require("./favorite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Favorite',
  component: _favorite.default,
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '1rem'
      }
    }, story());
  }],
  excludeStories: /.*Data$/
};
exports.default = _default;
var dataDefault = {
  id: '1',
  isChecked: false
};
var dataActive = {
  id: '2',
  isChecked: true
}; // export const actionsData = {
//   onCheckChanged: action('onCheckChanged'),
// };
// export const aaa = 1;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_favorite.default, {
    id: dataDefault.id,
    isChecked: dataDefault.isChecked,
    onCheckChanged: (0, _addonActions.action)('onCheckChanged')
  });
};

exports.Default = Default;

var Active = function Active() {
  return /*#__PURE__*/_react.default.createElement(_favorite.default, {
    id: dataActive.id,
    isChecked: dataActive.isChecked,
    onCheckChanged: (0, _addonActions.action)('onCheckChanged')
  });
};

exports.Active = Active;