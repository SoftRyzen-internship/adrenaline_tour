interface IImgAttributes {
  alternativeText: string;
  url: string;
}

interface IImgData {
  id: string;
  attributes: IImgAttributes;
}

export interface ITourImgProps {
  dataImg: IImgData;
}
