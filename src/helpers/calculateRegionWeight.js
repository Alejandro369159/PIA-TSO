"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRegionWeight = void 0;
function calculateRegionWeight(region) {
    return region.reduce(function (accumulator, value) {
        var nodeWeight = (value.package1 || 0) + (value.package2 || 0) + (value.package3 || 0);
        return accumulator + nodeWeight;
    }, 0);
}
exports.calculateRegionWeight = calculateRegionWeight;
