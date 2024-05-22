import { clientNodes } from "./assets/nodes";
import { calculateAngleFromOrigin } from "./helpers/calculateAngleFromOrigin";
import { calculateRegionWeight } from "./helpers/calculateRegionWeight";
import { Node } from "./types/Node";
import { Region, RegionName } from "./types/Region";

const depotNode: Node = {
  id: "0",
  x: 0,
  y: 0,
  isPremium: false,
  package1: null,
  package2: null,
  package3: null,
};

const regions: Record<RegionName, Region> = {
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
  clientNodes.forEach((node) => {
    const nodeAngle = calculateAngleFromOrigin(node.x, node.y);
    if (nodeAngle >= 0 && nodeAngle <= 60) {
      regions.region1.nodes.push(node);
    } else if (nodeAngle > 60 && nodeAngle <= 120) {
      regions.region2.nodes.push(node);
    } else if (nodeAngle > 120 && nodeAngle <= 180) {
      regions.region3.nodes.push(node);
    } else if (nodeAngle > 180 && nodeAngle <= 240) {
      regions.region4.nodes.push(node);
    } else if (nodeAngle > 240 && nodeAngle <= 300) {
      regions.region5.nodes.push(node);
    } else if (nodeAngle > 300 && nodeAngle <= 360) {
      regions.region6.nodes.push(node);
    }
  });
}

function assignVehiclesCapacity() {
  const region1Weight = calculateRegionWeight(regions.region1.nodes);
  const region2Weight = calculateRegionWeight(regions.region2.nodes);
  const region3Weight = calculateRegionWeight(regions.region3.nodes);
  const region4Weight = calculateRegionWeight(regions.region4.nodes);
  const region5Weight = calculateRegionWeight(regions.region5.nodes);
  const region6Weight = calculateRegionWeight(regions.region6.nodes);

  const regionsWeight: { weight: number; id: RegionName }[] = [
    { weight: region1Weight, id: "region1" },
    { weight: region2Weight, id: "region2" },
    { weight: region3Weight, id: "region3" },
    { weight: region4Weight, id: "region4" },
    { weight: region5Weight, id: "region5" },
    { weight: region6Weight, id: "region6" },
  ];

  regionsWeight.sort((a, b) => b.weight - a.weight);

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
