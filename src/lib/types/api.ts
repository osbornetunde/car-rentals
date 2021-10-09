export type CarBrandType = {
  id: number;
  name: string;
  imageUrl: string;
};

export type PaginationType = {
  total: number;
  currentPage: number;
  pageSize: number;
};

export type CarBrandDataType = {
  makeList: CarBrandType[];
  pagination: PaginationType;
};

export type CarType = {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  gradeScore: number;
  sellingCondition: 'foreign' | 'local';
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: 'km' | 'miles';
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: {
    webViewCount: number;
    webViewerCount: number;
    interestCount: number;
    testDriveCount: number;
    appViewCount: number;
    appViewerCount: number;
    processedLoanCount: number;
  };
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  hasCleanTitle: boolean;
};

export type CarDetailsType = {
  result: CarType[];
  pagination: PaginationType;
};

export type CarMediaType = {
  id: number;
  name: string;
  url: string;
  createdAt: string;
  type: string;
};

export type CardMediaType = {
  carMediaList: CardMediaType[];
  pagination: PaginationType;
};
