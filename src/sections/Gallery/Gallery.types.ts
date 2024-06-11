export interface IGalleryAttributes {
  url: string;
  alternativeText: string;
}

export interface IGallery {
  id: string;
  attributes: IGalleryAttributes;
}

interface GalleryImages {
  data: IGallery[];
}

interface GalleryAttributes {
  images: GalleryImages;
}

interface GalleryData {
  attributes: GalleryAttributes;
}

export interface IGalleryResponse {
  gallery: {
    data: GalleryData;
  };
}
