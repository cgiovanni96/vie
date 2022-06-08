export type Mark = {
  name: string;
  text: Text;
  position: Position;
  type: Type;
};

export type Text = {
  it: string;
  eng: string;
};

export type Position = {
  latitude: number;
  longitude: number;
};

export type Type = {
  name: TypeEnum;
  text: Text;
  group: Group;
};

export type Group = {
  name: string;
  text: Text;
  order: number;
};

export enum TypeEnum {
  busStation = "bus-station",
  trainStation = "train-station",
  camping = "camping",
  cave = "cave",
  chapel = "chapel",
  church = "church",
  cicle = "cicle",
  drinking = "drinking",
  firefighter = "firefighter",
  flora = "flora",
  gardening = "gardening",
  harbour = "harbour",
  hospital = "hospital",
  iat = "iat",
  library = "library",
  monument = "monument",
  pharmacy = "pharmacy",
  picnic = "picnic",
  redcross = "redcross",
  resistance = "resistance",
  view = "view",
}
