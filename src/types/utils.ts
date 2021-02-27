export type itemCoords = {
  LAT: number;
  LNG: number;
}

export interface CitiesDictionary {
  [Key: string]: itemCoords;
}
