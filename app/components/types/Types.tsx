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
