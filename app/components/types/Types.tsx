export type ordersFilters = {
  timeFilter?: {
    startDate?: string;
    endDate?: string;
  };
  pageNumber: number;
  filters?: {
    clientName?: string;
    orderId?: string;
  };
};

export type messageTemplate = {
  sender: string;
  text: string;
};

export type clientFilters = {
  email?: string;
  name?: string;
};

export type clientSettings = {
  email?: string;
  oldPassword?: string;
  newPassword?: string;
};

export type credentials = {
  email?: string;
  password?: string;
};

export type loginErrors = {
  emailError?: string;
  passwordError?: string;
};

export type orderUpdates = {
  pickupDetails?: {
    pickupCountry?: string;
    pickupCity?: string;
    pickupAddress?: string;
    pickupRegion?: string;
    pickupId?: string;
    pickupStatus?: string;
    pickupClient?: {
      clientEmail?: string;
      clientName?: string;
      clientPhone?: string;
    };
  };
  shippingDetails?: {
    shippingCountry?: string;
    shippingCity?: string;
    shippingAddress?: string;
    shippingRegion?: string;
    shippingId?: string;
    shippingStatus?: string;
    shippingClient?: {
      clientEmail?: string;
      clientName?: string;
      clientPhone?: string;
    };
  };
  currentStatus?: string;
  currentLocation?: string;
  estimatedRevenue?: string;
};

export type clientUpdates = {
  clientName?: string;
  clientAddress?: string;
  clientPhone?: string;
};

export type newDelivery = {
  deliveryType?: string;
  placeOfDeparture?: {
    departureRegion?: string;
    departureCity?: string;
    departureAddress?: string;
    departureCountry?: string;
  };
  placeOfDelivery?: {
    deliveryRegion?: string;
    deliveryCity?: string;
    deliveryAddress?: string;
    deliveryCountry?: string;
  };
};

export type newTransport = {
  transportType?: string;
  transportLocation?: {
    transportRegion?: string;
    transportCountry?: string;
    transportCity?: string;
  };
  transportCapabilities?: {
    canPickup?: boolean;
    canShip?: boolean;
    availableRegions?: string[];
    transportCapacity?: string;
  };
  contactPerson?: {
    contactBadgeId?: string;
    contactPhone?: string;
  };
};

export type deliveriesValidation = {
  addTransport?: boolean;
  addDelivery?: boolean;
  updateTransport?: boolean;
  updateDelivery?: boolean;
};

export type deliveryUpdates = {
  deliveryType?: string;
  placeOfDeparture?: {
    departureRegion?: string;
    departureCity?: string;
    departureCountry?: string;
    departureAddress?: string;
  };
  placeOfDelivery?: {
    deliveryRegion?: string;
    deliveryCity?: string;
    deliveryCountry?: string;
    deliveryAddress?: string;
  };
};

export type chartsData = {
  cards: {
    totalOrders: number;
    unprocessedOrders: {
      thisYear: number;
      lastYear: number;
    };
    operationalCosts: {
      thisYear: number;
      lastYear: 0;
    };
    revenue: {
      thisYear: number;
      lastYear: number;
    };
  };
  stackedBarChart: {
    pickedUp: {
      Q1: number;
      Q2: number;
      Q3: number;
      Q4: number;
    };
    shipped: {
      Q1: number;
      Q2: number;
      Q3: number;
      Q4: number;
    };
    delivered: {
      Q1: number;
      Q2: number;
      Q3: number;
      Q4: number;
    };
  };
  barChart: {
    Q1: {
      currentYear: number;
      lastYear: number;
    };
    Q2: {
      currentYear: number;
      lastYear: number;
    };
    Q3: {
      currentYear: number;
      lastYear: number;
    };
    Q4: {
      currentYear: number;
      lastYear: number;
    };
  };
  lineChart: {
    Q1: number;
    Q2: number;
    Q3: number;
    Q4: number;
  };
};

export type cardsData = {
  totalOrders: number;
  unprocessedOrders: {
    currentYear: number;
    absoluteIncrease: number;
    relativeIncrease: number;
  };
  operationalCosts: {
    currentYear: number;
    absoluteIncrease: number;
    relativeIncrease: number;
  };
  revenue: {
    currentYear: number;
    absoluteIncrease: number;
    relativeIncrease: number;
  };
};
