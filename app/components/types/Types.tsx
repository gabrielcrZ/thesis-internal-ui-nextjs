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
