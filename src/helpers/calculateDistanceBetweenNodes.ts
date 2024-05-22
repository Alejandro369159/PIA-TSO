import { Node } from "../types/Node";

// Calculate Euclidean distance between two nodes
export function calculateDistance(node1: Node, node2: Node): number {
  const dx = node1.x - node2.x;
  const dy = node1.y - node2.y;
  return Math.sqrt(dx * dx + dy * dy);
}
