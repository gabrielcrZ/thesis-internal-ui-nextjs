export type orderFilters = {
  startDate: string;
  endDate: string;
  clientName: string;
  orderId: string;
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
  };
  placeOfDelivery?: {
    deliveryRegion?: string;
    deliveryCity?: string;
    deliveryAddress?: string;
  };
};

export type newTransport = {
  transportType?: string;
  transportLocation?: {
    transportRegion?: string;
    transportCity?: string;
  };
  transportCapabilities?: {
    canPickup?: boolean;
    canShip?: boolean;
    availableRegions?: string[];
    transportCapacity?: string;
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
    departureAddress?: string;
  };
  placeOfDelivery?: {
    deliveryRegion?: string;
    deliveryCity?: string;
    deliveryAddress?: string;
  };
};
