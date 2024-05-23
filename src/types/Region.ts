import { Node } from "./Node";
import { Route } from "./Route";
import { Vehicle } from "./Vehicle";

export type Region = {
  nodes: Node[];
  routes: Route[];
  vehicles: Vehicle[];
};

export type RegionName = "region1" | "region2" | "region3" | "region4";
