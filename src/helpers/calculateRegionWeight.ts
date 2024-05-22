import { Node } from "../types/Node";

export function calculateRegionWeight(region: Node[]) {
  return region.reduce((accumulator, value) => {
    const nodeWeight =
      (value.package1 || 0) + (value.package2 || 0) + (value.package3 || 0);
    return accumulator + nodeWeight;
  }, 0);
}
