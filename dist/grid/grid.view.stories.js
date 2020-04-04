"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _grid = _interopRequireDefault(require("./grid.view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultItemsGrid = [{
  id: 'ac9ec1bd-fd4b-4447-a619-c1a70f5f54b6',
  title: 'New itm 02',
  description: 'Item 02 from eerrecalde',
  tags: null,
  url: 'http://google.com/',
  imgUrl: 'https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  price: 30,
  owner: '121a3d8a-6239-4a5a-bd51-fe58689a0672'
}, {
  id: '377e3490-7031-412c-8e1a-4a22bcc65f19',
  title: 'New item from user 01',
  description: 'New item from user 01',
  tags: null,
  url: 'http://google.com/',
  imgUrl: 'https://images.freeimages.com/images/large-previews/58f/double-bass-1423720.jpg',
  price: 300,
  owner: 'f4c40a60-0312-450b-a2a7-f30761d781a7'
}];
var _default = {
  title: 'ItemsGridView',
  component: _grid.default,
  excludeStories: /.*Data$/,
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '3rem'
      }
    }, story());
  }]
};
exports.default = _default;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_grid.default, {
    items: defaultItemsGrid
  });
};

exports.Default = Default;