"use strict";
exports.__esModule = true;
var react_1 = require("react");
var defaultState = {
    isInRoom: false,
    setIsInRoom: function () { },
    playerSymbol: "o",
    setPlayerSymbol: function () { },
    isPlayerTurn: false,
    setPlayerTurn: function () { },
    isGameStarted: false,
    setIsGameStarted: function () { }
};
exports["default"] = react_1["default"].createContext(defaultState);
