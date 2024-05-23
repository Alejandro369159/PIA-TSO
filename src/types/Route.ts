import { Node } from "./Node";

export type Route = {
  vehicleName: string;
  vehicleCapacityLeft: number;
  tour: Node[];
};
