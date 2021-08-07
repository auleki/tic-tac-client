"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.O = exports.X = exports.PlayStopper = exports.Cell = exports.RowContainer = exports.GameContainer = exports.Button = exports.InputStyle = exports.FormStyle = exports.Container = exports.AppContainer = void 0;
var styled_components_1 = require("styled-components");
exports.AppContainer = styled_components_1["default"].div(function () { return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1em;\n "], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1em;\n "]))); });
exports.Container = styled_components_1["default"].section(function () { return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 100%;\n    width: 100%;\n    background: crimson;\n    padding: 1em;\n "], ["\n    height: 100%;\n    width: 100%;\n    background: crimson;\n    padding: 1em;\n "]))); });
exports.FormStyle = styled_components_1["default"].form(function () { return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* background: rebeccapurple; */\n  margin-top: 2rem;\n  border-radius: 5px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n\n  h2 {\n    font-weight: 400;\n    margin-bottom: 1rem;\n  }\n "], ["\n  /* background: rebeccapurple; */\n  margin-top: 2rem;\n  border-radius: 5px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n\n  h2 {\n    font-weight: 400;\n    margin-bottom: 1rem;\n  }\n "]))); });
exports.InputStyle = styled_components_1["default"].input(function () { return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 1rem;\n  outline: none;\n  border: none;\n  background: black;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  transition: background 200ms ease-in;\n\n  &:focus {\n    color: #333;\n    background: #ddd;\n    /* border-color: crimson; */\n  }\n "], ["\n  padding: 1rem;\n  outline: none;\n  border: none;\n  background: black;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  transition: background 200ms ease-in;\n\n  &:focus {\n    color: #333;\n    background: #ddd;\n    /* border-color: crimson; */\n  }\n "]))); });
exports.Button = styled_components_1["default"].button(function () { return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background-color:crimson;\n    padding: 1rem;\n    color: #fff;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: 250ms ease-in;\n    border: none;\n    box-shadow: 0 4px 4px rgba(225, 0, 0, .5);\n    outline: none;\n    \n    &:hover, &:focus {\n      background: #ddd;\n      color: crimson;\n      border-color: whitesmoke;\n      transform: translateY(.1em) scaleY(1.06);\n      transform: translateY(.1em);\n      box-shadow: 0 4px 4px rgba(0, 0, 0, .5);\n      border-bottom-right-radius: 5px;\n      border-bottom-left-radius: 5px;\n    }\n "], ["\n    background-color:crimson;\n    padding: 1rem;\n    color: #fff;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: 250ms ease-in;\n    border: none;\n    box-shadow: 0 4px 4px rgba(225, 0, 0, .5);\n    outline: none;\n    \n    &:hover, &:focus {\n      background: #ddd;\n      color: crimson;\n      border-color: whitesmoke;\n      transform: translateY(.1em) scaleY(1.06);\n      transform: translateY(.1em);\n      box-shadow: 0 4px 4px rgba(0, 0, 0, .5);\n      border-bottom-right-radius: 5px;\n      border-bottom-left-radius: 5px;\n    }\n "]))); });
exports.GameContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 5rem;\n  flex-direction: column;\n  font-family: \"Zen Tokyo Zoo\", cursive;\n  position: relative;\n"], ["\n  display: flex;\n  margin-top: 5rem;\n  flex-direction: column;\n  font-family: \"Zen Tokyo Zoo\", cursive;\n  position: relative;\n"])));
exports.RowContainer = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n"], ["\n  width: 100%;\n  display: flex;\n"])));
exports.Cell = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 13em;\n  height: 9em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  cursor: pointer;\n  border-top: ", ";\n  border-left: ", ";\n  border-bottom: ", ";\n  border-right: ", ";\n  transition: all 270ms ease-in-out;\n  &:hover {\n    background-color: #8d44ad28;\n  }\n"], ["\n  width: 13em;\n  height: 9em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  cursor: pointer;\n  border-top: ", ";\n  border-left: ", ";\n  border-bottom: ", ";\n  border-right: ", ";\n  transition: all 270ms ease-in-out;\n  &:hover {\n    background-color: #8d44ad28;\n  }\n"])), function (_a) {
    var borderTop = _a.borderTop;
    return borderTop && "3px solid #1B1B1B";
}, function (_a) {
    var borderLeft = _a.borderLeft;
    return borderLeft && "3px solid #1B1B1B";
}, function (_a) {
    var borderBottom = _a.borderBottom;
    return borderBottom && "3px solid #1B1B1B";
}, function (_a) {
    var borderRight = _a.borderRight;
    return borderRight && "3px solid #1B1B1B";
});
exports.PlayStopper = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  cursor: default;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  cursor: default;\n"])));
exports.X = styled_components_1["default"].span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 100px;\n  color: #901DC2;\n  &::after {\n    content: \"X\";\n  }\n"], ["\n  font-size: 100px;\n  color: #901DC2;\n  &::after {\n    content: \"X\";\n  }\n"])));
exports.O = styled_components_1["default"].span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 100px;\n  color: #44FF5D;\n  &::after {\n    content: \"O\";\n  }\n"], ["\n  font-size: 100px;\n  color: #44FF5D;\n  &::after {\n    content: \"O\";\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
