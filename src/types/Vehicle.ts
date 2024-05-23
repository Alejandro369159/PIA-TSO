export type Vehicle = {
  name: VehicleName;
  capacity: 460 | 200 | 70;
};

export type VehicleName = "van" | "car" | "motorcycle";

export const vehicles = {
  van(): Vehicle {
    return { name: "van", capacity: 460 };
  },
  car(): Vehicle {
    return { name: "car", capacity: 200 };
  },
  motorcycle(): Vehicle {
    return { name: "motorcycle", capacity: 70 };
  },
};
