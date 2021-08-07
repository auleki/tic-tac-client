"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Game = void 0;
var react_1 = require("react");
var gameContext_1 = require("../../gameContext");
var StyledComponents_1 = require("../StyledComponents");
function Game() {
    var _a = react_1.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]), matrix = _a[0], setMatrix = _a[1];
    var playerSymbol = react_1.useContext(gameContext_1["default"]).playerSymbol;
    var updateGame = function (column, row, symbol) {
        var newMatrix = __spreadArrays(matrix);
        if (newMatrix[row][column] === null || newMatrix[row][column] === 'null') {
            newMatrix[row][column] = symbol;
            setMatrix(newMatrix);
        }
    };
    return (React.createElement(StyledComponents_1.GameContainer, null, matrix.map(function (row, rowIdx) {
        return React.createElement(StyledComponents_1.RowContainer, null, row.map(function (column, columnIdx) { return (React.createElement(StyledComponents_1.Cell, { borderRight: columnIdx < 2, borderLeft: columnIdx > 0, borderTop: rowIdx > 0, borderBottom: rowIdx < 2, onClick: function () { return updateGame(columnIdx, rowIdx, playerSymbol); } }, column && column !== 'null' ? column === 'x' ? React.createElement(StyledComponents_1.X, null) : React.createElement(StyledComponents_1.O, null) : null)); }));
    })));
}
exports.Game = Game;
