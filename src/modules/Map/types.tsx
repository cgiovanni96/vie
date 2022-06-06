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
  name: string;
};
