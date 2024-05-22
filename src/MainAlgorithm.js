"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodes_1 = require("./assets/nodes");
var calculateAngleFromOrigin_1 = require("./helpers/calculateAngleFromOrigin");
var calculateRegionWeight_1 = require("./helpers/calculateRegionWeight");
var depotNode = {
    id: "0",
    x: 0,
    y: 0,
    isPremium: false,
    package1: null,
    package2: null,
    package3: null,
};
var regions = {
    region1: {
        nodes: [],
        tour: [depotNode],
        vehicleCapacity: 0,
    },
    region2: {
        nodes: [],
        tour: [depotNode],
        vehicleCapacity: 0,
    },
    region3: {
        nodes: [],
        tour: [depotNode],
        vehicleCapacity: 0,
    },
    region4: {
        nodes: [],
        tour: [depotNode],
        vehicleCapacity: 0,
    },
    region5: {
        nodes: [],
        tour: [depotNode],
        vehicleCapacity: 0,
    },
    region6: {
        nodes: [],
        tour: [depotNode],
        vehicleCapacity: 0,
    },
};
function distributeNodesBetweenRegions() {
    nodes_1.clientNodes.forEach(function (node) {
        var nodeAngle = (0, calculateAngleFromOrigin_1.calculateAngleFromOrigin)(node.x, node.y);
        if (nodeAngle >= 0 && nodeAngle <= 60) {
            regions.region1.nodes.push(node);
        }
        else if (nodeAngle > 60 && nodeAngle <= 120) {
            regions.region2.nodes.push(node);
        }
        else if (nodeAngle > 120 && nodeAngle <= 180) {
            regions.region3.nodes.push(node);
        }
        else if (nodeAngle > 180 && nodeAngle <= 240) {
            regions.region4.nodes.push(node);
        }
        else if (nodeAngle > 240 && nodeAngle <= 300) {
            regions.region5.nodes.push(node);
        }
        else if (nodeAngle > 300 && nodeAngle <= 360) {
            regions.region6.nodes.push(node);
        }
    });
}
function assignVehiclesCapacity() {
    var region1Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region1.nodes);
    var region2Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region2.nodes);
    var region3Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region3.nodes);
    var region4Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region4.nodes);
    var region5Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region5.nodes);
    var region6Weight = (0, calculateRegionWeight_1.calculateRegionWeight)(regions.region6.nodes);
    var regionsWeight = [
        { weight: region1Weight, id: "region1" },
        { weight: region2Weight, id: "region2" },
        { weight: region3Weight, id: "region3" },
        { weight: region4Weight, id: "region4" },
        { weight: region5Weight, id: "region5" },
        { weight: region6Weight, id: "region6" },
    ];
    regionsWeight.sort(function (a, b) { return b.weight - a.weight; });
    regions[regionsWeight[0].id].vehicleCapacity = 460;
    regions[regionsWeight[1].id].vehicleCapacity = 200;
    regions[regionsWeight[2].id].vehicleCapacity = 200;
    regions[regionsWeight[3].id].vehicleCapacity = 70;
    regions[regionsWeight[4].id].vehicleCapacity = 70;
    regions[regionsWeight[5].id].vehicleCapacity = 70;
}
function main() {
    // We calculate the angles and then assign the nodes to their corresponding region
    distributeNodesBetweenRegions();
    // According to the region's total weigth we assing the vehicle with most capacity to the region with the most weight
    assignVehiclesCapacity();
    // Printing results
    console.table(regions.region1.nodes);
    console.table(regions.region2.nodes);
    console.table(regions.region3.nodes);
    console.table(regions.region4.nodes);
    console.table(regions.region5.nodes);
    console.table(regions.region6.nodes);
}
main();
