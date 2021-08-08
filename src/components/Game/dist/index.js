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
var gameService_1 = require("../../services/gameService");
var socketService_1 = require("../../services/socketService");
var StyledComponents_1 = require("../StyledComponents");
function Game() {
    var _a = react_1.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]), matrix = _a[0], setMatrix = _a[1];
    var _b = react_1.useContext(gameContext_1["default"]), playerSymbol = _b.playerSymbol, isPlayerTurn = _b.isPlayerTurn, setPlayerTurn = _b.setPlayerTurn, setPlayerSymbol = _b.setPlayerSymbol, isGameStarted = _b.isGameStarted, setIsGameStarted = _b.setIsGameStarted;
    var checkGameState = function (matrix) {
        for (var i = 0; i < matrix.length; i++) {
            var row = [];
            for (var j = 0; j < matrix.length; j++) {
                row.push(matrix[i][j]);
            }
            if (row.every(function (value) { return value && value === playerSymbol; })) {
                alert("You won");
                return [true, false];
            }
            else if (row.every(function (value) { return value && value !== playerSymbol; })) {
                alert("You lost");
                return [false, true];
            }
        }
        for (var i = 0; i < matrix.length; i++) {
            var column = [];
            for (var j = 0; j < matrix.length; j++) {
                column.push(matrix[j][i]);
            }
            if (column.every(function (value) { return value && value === playerSymbol; })) {
                alert("You won");
                return [true, false];
            }
            else if (column.every(function (value) { return value && value !== playerSymbol; })) {
                alert("You lost");
                return [false, true];
            }
        }
        if (matrix[1][1]) {
            if (matrix[0][0] === matrix[1][1] && matrix[2][2] === matrix[1][1]) {
                if (matrix[1][1] === playerSymbol)
                    return [true, false];
                else
                    return [false, true];
            }
            if (matrix[2][0] === matrix[1][1] && matrix[0][2] === matrix[1][1]) {
                if (matrix[1][1] === playerSymbol)
                    return [true, false];
                else
                    return [false, true];
            }
        }
        if (matrix.every(function (m) { return m.every(function (v) { return v !== null; }); })) {
            alert('Tie');
        }
    };
    var updateGame = function (column, row, symbol) {
        var newMatrix = __spreadArrays(matrix);
        if (newMatrix[row][column] === null || newMatrix[row][column] === 'null') {
            newMatrix[row][column] = symbol;
            setMatrix(newMatrix);
        }
        if (socketService_1["default"].socket)
            gameService_1["default"].UpdateGame(socketService_1["default"].socket, newMatrix);
        setPlayerTurn(false);
        checkGameState(newMatrix);
    };
    var handleGameUpdate = function () {
        if (socketService_1["default"].socket)
            gameService_1["default"].OnGameUpdate(socketService_1["default"].socket, function (newMatrix) {
                setMatrix(newMatrix);
                setPlayerTurn(true);
                checkGameState(newMatrix);
            });
    };
    var handleGameStart = function () {
        if (socketService_1["default"].socket)
            gameService_1["default"].OnStartGame(socketService_1["default"].socket, function (options) {
                setIsGameStarted(true);
                setPlayerSymbol(options.symbol);
                if (options.start)
                    setPlayerTurn(true);
                else
                    setPlayerTurn(false);
            });
    };
    var handleGameWin = function () {
        if (socketService_1["default"].socket) {
            gameService_1["default"].OnGameWin(socketService_1["default"].socket, function (message) {
                setPlayerTurn(false);
                alert(message);
            });
        }
    };
    react_1.useEffect(function () {
        handleGameUpdate();
        handleGameStart();
    }, []);
    // useEffect(() => {
    //   checkGameState(matrix)
    // }, [matrix])
    return (React.createElement(StyledComponents_1.GameContainer, null,
        !isGameStarted && React.createElement("h3", null, "Waiting for second player to join..."),
        (!isGameStarted || !isPlayerTurn) && React.createElement(StyledComponents_1.PlayStopper, null),
        matrix.map(function (row, rowIdx) {
            return React.createElement(StyledComponents_1.RowContainer, null, row.map(function (column, columnIdx) { return (React.createElement(StyledComponents_1.Cell, { borderRight: columnIdx < 2, borderLeft: columnIdx > 0, borderTop: rowIdx > 0, borderBottom: rowIdx < 2, onClick: function () { return updateGame(columnIdx, rowIdx, playerSymbol); } }, column && column !== 'null' ? column === 'x' ? React.createElement(StyledComponents_1.X, null) : React.createElement(StyledComponents_1.O, null) : null)); }));
        })));
}
exports.Game = Game;
