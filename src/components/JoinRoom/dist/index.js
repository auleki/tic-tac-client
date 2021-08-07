"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StyledComponents_1 = require("../StyledComponents");
function JoinRoom(props) {
    var _a = react_1.useState(""), roomId = _a[0], setRoomId = _a[1];
    var toJoinRoom = function (e) {
        e.preventDefault();
        alert('Trying to join room' + roomId);
    };
    var handleId = function (e) {
        var id = e.target.value;
        setRoomId(id);
    };
    return (react_1["default"].createElement(StyledComponents_1.FormStyle, { onSubmit: toJoinRoom },
        react_1["default"].createElement(StyledComponents_1.InputStyle, { type: "text", placeholder: "Room ID", onChange: handleId, value: roomId }),
        react_1["default"].createElement(StyledComponents_1.Button, null, "Join Room")));
}
exports["default"] = JoinRoom;
