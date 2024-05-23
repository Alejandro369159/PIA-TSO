import { clientNodes } from "./assets/nodes";
import { calculateAngleFromOrigin } from "./helpers/calculateAngleFromOrigin";
import { calculateRegionWeight } from "./helpers/calculateRegionWeight";
import { Region, RegionName } from "./types/Region";
import { vehicles } from "./types/Vehicle";

const regions: Record<RegionName, Region> = {
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
  clientNodes.forEach((node) => {
    const nodeAngle = calculateAngleFromOrigin(node.x, node.y);
    if (nodeAngle >= 0 && nodeAngle <= 90) {
      regions.region1.nodes.push(node);
    } else if (nodeAngle > 90 && nodeAngle <= 180) {
      regions.region2.nodes.push(node);
    } else if (nodeAngle > 180 && nodeAngle <= 270) {
      regions.region3.nodes.push(node);
    } else if (nodeAngle > 270 && nodeAngle <= 360) {
      regions.region4.nodes.push(node);
    }
  });
}

function assignVehiclesCapacity() {
  const region1Weight = calculateRegionWeight(regions.region1.nodes);
  const region2Weight = calculateRegionWeight(regions.region2.nodes);
  const region3Weight = calculateRegionWeight(regions.region3.nodes);
  const region4Weight = calculateRegionWeight(regions.region4.nodes);

  const regionsWeight: { weight: number; id: RegionName }[] = [
    { weight: region1Weight, id: "region1" },
    { weight: region2Weight, id: "region2" },
    { weight: region3Weight, id: "region3" },
    { weight: region4Weight, id: "region4" },
  ];

  regionsWeight.sort((a, b) => b.weight - a.weight);

  regions[regionsWeight[0].id].vehicles = [
    vehicles.van(),
    vehicles.motorcycle(),
  ];
  regions[regionsWeight[1].id].vehicles = [
    vehicles.car(),
    vehicles.motorcycle(),
  ];
  regions[regionsWeight[2].id].vehicles = [vehicles.car()];
  regions[regionsWeight[3].id].vehicles = [vehicles.motorcycle()];
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
