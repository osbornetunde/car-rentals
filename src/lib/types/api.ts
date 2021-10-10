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

export type CarMediaItemType = {
  id: number;
  name: string;
  url: string;
  createdAt: string;
  type: string;
};

export type CardMediaType = {
  carMediaList: CarMediaItemType[];
  pagination: PaginationType;
};

type InspectionItemsType = {
  medias: [];
  name: string;
  response: string;
};
export type CardIDetails = {
  features: [];
  carFeatures: [];
  modelFeatures: [];
  damageMedia: [
    {
      inspectionItems: InspectionItemsType[];
      name: string;
      comment: string;
    }
  ];
  id: string;
  year: number;
  insured: boolean;
  mileage: number;
  vin: string;
  marketplacePrice: number;
  marketplaceVisible: boolean;
  marketplaceVisibleDate: string;
  isFeatured: boolean;
  imageUrl: string;
  model: {
    modelFeatures: [];
    id: number;
    name: string;
    imageUrl: string;
    wheelType: string;
    make: {
      id: number;
      name: string;
      imageUrl: string;
    };
    popular: boolean;
  };
  state: string;
  country: string;
  ownerType: string;
  transmission: string;
  fuelType: string;
  sellingCondition: 'foreign' | 'local';
  bodyType: {
    id: number;
    name: string;
    imageUrl: string;
  };
  city: string;
  marketplaceOldPrice: number;
  createdAt: string;
  updatedAt: string;
  mileageUnit: 'km' | 'miles';
  hasWarranty: boolean;
  hasFinancing: boolean;
  interiorColor: string;
  exteriorColor: string;
  engineType: string;
  gradeScore: number;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  sold: boolean;
  hasThreeDImage: boolean;
  hasCleanTitle: boolean;
  inspectorDetails: {
    inspectedMakes: [
      {
        count: number;
        name: string;
        imageUrl: string;
      }
    ];
    inspectorFullName: string;
    workshopName: string;
    totalInspection: number;
  };
  carName: string;
};
