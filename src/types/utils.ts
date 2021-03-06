export type itemCoords = {
  LAT: number;
  LNG: number;
}

export interface CitiesDictionary {
  [Key: string]: itemCoords;
}

export interface SortingDictionary {
  [Key: string]: string,
}

export interface FavoriteButtonDictionary {
  [Key: string]: {
    main: string,
    iconSize: number
  }
}

export interface PlaceCardImageSizeDictionary {
  [Key: string]: {
    width: number,
    height: number,
  }
}

export interface RatingStarType {
  name: string;
  value: number;
}
