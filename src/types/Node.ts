export type Node = {
  id: string;
  x: number;
  y: number;
  isPremium: boolean;
  package1: number | null;
  package2: number | null;
  package3: number | null;
};

export const depotNode: Node = {
  id: "0",
  x: 0,
  y: 0,
  isPremium: false,
  package1: null,
  package2: null,
  package3: null,
};
