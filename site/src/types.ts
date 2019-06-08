export interface ImageData {
  [albumId: string]: Image[]
}

export interface Image {
  thumbnailPath: string;
  path: string;
  width: number;
  height: number;
}