"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodes_1 = require("./assets/nodes");
var calculateAngleFromOrigin_1 = require("./helpers/calculateAngleFromOrigin");
var calculateRegionWeight_1 = require("./helpers/calculateRegionWeight");
var Vehicle_1 = require("./types/Vehicle");
var regions = {
    region1: {
        nodes: [],
        routes: [],
        vehicles: [],
    },
    region2: {
        nodes: [],
        routes: [],
        vehicles: [],
    },
    region3: {
        nodes: [],
        routes: [],
        vehicles: [],
    },
    region4: {
        nodes: [],
        routes: [],
        vehicles: [],
    },
};
function distributeNodesBetweenRegions() {
    nodes_1.clientNodes.forEach(function (node) {
        var nodeAngle = (0, calculateAngleFromOrigin_1.calculateAngleFromOrigin)(node.x, node.y);
        if (nodeAngle >= 0 && nodeAngle <= 90) {
            regions.region1.nodes.push(node);
        }
        else if (nodeAngle > 90 && nodeAngle <= 180) {
            regions.region2.nodes.push(node);
        }
        else if (nodeAngle > 180 && nodeAngle <= 270) {
            regions.region3.nodes.push(node);
        }
        else if (nodeAngle > 270 && nodeAngle <= 360) {
            regions.region4.nodes.push(node);
        }
    });
}
function assignVehiclesCapacity() {
    var region1Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region1.nodes);
    var region2Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region2.nodes);
    var region3Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region3.nodes);
    var region4Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region4.nodes);
    var regionsWeight = [
        { weight: region1Weight, id: "region1" },
        { weight: region2Weight, id: "region2" },
        { weight: region3Weight, id: "region3" },
        { weight: region4Weight, id: "region4" },
    ];
    regionsWeight.sort(function (a, b) { return b.weight - a.weight; });
    regions[regionsWeight[0].id].vehicles = [
        Vehicle_1.vehicles.van(),
        Vehicle_1.vehicles.motorcycle(),
    ];
    regions[regionsWeight[1].id].vehicles = [
        Vehicle_1.vehicles.car(),
        Vehicle_1.vehicles.motorcycle(),
    ];
    regions[regionsWeight[2].id].vehicles = [Vehicle_1.vehicles.car()];
    regions[regionsWeight[3].id].vehicles = [Vehicle_1.vehicles.motorcycle()];
}
function main() {
    // We calculate the angles and then assign the nodes to their corresponding region
    distributeNodesBetweenRegions();
    // According to the region's total weigth we assign the vehicles that will attend the region.
    // The heavier the region, the more vehicles and total capacity to attend
    assignVehiclesCapacity();
    // Printing results
    console.table(regions.region1.nodes);
    console.table(regions.region2.nodes);
    console.table(regions.region3.nodes);
    console.table(regions.region4.nodes);
}
main();
