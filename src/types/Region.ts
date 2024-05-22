import { Node } from "./Node";

export type Region = {
  nodes: Node[];
  tour: Node[];
  vehicleCapacity: number;
};

export type RegionName =
  | "region1"
  | "region2"
  | "region3"
  | "region4"
  | "region5"
  | "region6";
