"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setContentForOptionalReactElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function renderElement(contentElement, prevContent) {
  if ("[object HTMLDivElement]" !== Object.prototype.toString.call(prevContent)) {
    prevContent = document.createElement("div");
  }

  _react2["default"].render(contentElement, prevContent);
  return prevContent;
}

function setContentForOptionalReactElement(contentOptionalReactElement, infoWindowLikeInstance) {
  if (_react2["default"].isValidElement(contentOptionalReactElement)) {
    var contentElement = _react.Children.only(contentOptionalReactElement);
    var prevContent = infoWindowLikeInstance.getContent();

    var domEl = renderElement(contentOptionalReactElement, prevContent);
    infoWindowLikeInstance.setContent(domEl);
  } else {
    infoWindowLikeInstance.setContent(contentOptionalReactElement);
  }
}

module.exports = exports["default"];