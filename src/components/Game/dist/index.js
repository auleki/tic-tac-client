"use strict";
exports.__esModule = true;
exports.Game = void 0;
var react_1 = require("react");
var StyledComponents_1 = require("../StyledComponents");
function Game() {
    var _a = react_1.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]), maxtrix = _a[0], setMatrix = _a[1];
    return (React.createElement(StyledComponents_1.GameContainer, null, maxtrix.map(function (row, rowIdx) {
        return React.createElement(StyledComponents_1.RowContainer, null, row.map(function (column, columnIdx) { return (React.createElement(StyledComponents_1.Cell, { borderRight: columnIdx < 2, borderLeft: columnIdx > 0, borderTop: rowIdx > 0, borderBottom: rowIdx < 2 }, column && column !== 'null' ? column === 'x' ? React.createElement(StyledComponents_1.X, null) : React.createElement(StyledComponents_1.O, null) : null)); }));
    })));
}
exports.Game = Game;
