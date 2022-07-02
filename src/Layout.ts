export interface Layout {
  name: string;
  left?: Left;
  right?: Right;
}

export interface Right {
  id: string;
}

export interface Left {
  id: string;
}
