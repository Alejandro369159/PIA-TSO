"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAngleFromOrigin = void 0;
function calculateAngleFromOrigin(x, y) {
    // Use Math.atan2 to get the angle in radians
    var angleInRadians = Math.atan2(y, x);
    // Convert radians to degrees
    var angleInDegrees = angleInRadians * (180 / Math.PI);
    // Ensure the angle is positive
    return angleInDegrees < 0 ? angleInDegrees + 360 : angleInDegrees;
}
exports.calculateAngleFromOrigin = calculateAngleFromOrigin;
