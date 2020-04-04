"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gridItem = _interopRequireDefault(require("./grid-item"));

require("./_grid-item.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
var i = {
  id: '377e3490-7031-412c-8e1a-4a22bcc65f19',
  title: 'New item from user 01',
  description: 'New item from user 01',
  tags: null,
  url: 'http://google.com/',
  imgUrl: 'https://images.freeimages.com/images/large-previews/58f/double-bass-1423720.jpg',
  price: 300,
  owner: 'f4c40a60-0312-450b-a2a7-f30761d781a7'
};
var _default = {
  title: 'GridItem',
  component: _gridItem.default,
  excludeStories: /.*Data$/
};
exports.default = _default;
var favorite = false; // export const aaa = 1;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid pt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-xl-3 col-lg-4 col-sm-6 mb-3 align-self-stretch"
  }, /*#__PURE__*/_react.default.createElement(_gridItem.default, {
    id: i.id,
    title: i.title,
    description: i.description || undefined,
    price: i.price || undefined,
    url: i.url || undefined,
    imgUrl: i.imgUrl || undefined,
    favorite: favorite
  }))));
};

exports.Default = Default;