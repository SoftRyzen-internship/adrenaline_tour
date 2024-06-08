export interface IGalleryAttributes {
  url: string;
  alternativeText: string;
}

export interface IGallery {
  id: string;
  attributes: IGalleryAttributes;
}
