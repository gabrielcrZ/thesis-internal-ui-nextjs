"use server";

import { credentials } from "./components/types/Types";

export const getDashboardMetrics = async () => {
  try {
    const response = await fetch(
      "http://localhost:3001/api/get-dashboard-metrics",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data for dashboard metrics");
    }

    return response.json();
  } catch (error: any) {
    console.log(error.message);
  }
};

export const LoginUser = async (clientCreds: credentials) => {
  try {
    const response: any = await fetch(
      "http://localhost:3001/api/require-token",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clientCreds),
      }
    );

    const responseBody = await response.json();
    if (!response.ok) throw new Error(responseBody.msg);

    return responseBody.token;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getDashboardTable = async (pageNr: number) => {
  try {
    const response: any = await fetch(
      "http://localhost:3001/api/get-dashboard-table-contents",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageNumber: pageNr }),
      }
    );

    const responseBody = await response.json();
    if (!response.ok) throw new Error(responseBody.msg);

    return responseBody.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getShippingOrder = async (orderId: string) => {
  try {
    const response: any = await fetch(
      `http://localhost:3001/api/get-order/${orderId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const responseBody = await response.json();
    if (!response.ok) throw new Error(responseBody.msg);

    return responseBody.data.order;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const handleUnassignPickup = async (orderId: string, token: string) => {
  try {
    const response: any = await fetch(
      `http://localhost:3001/api/unassign-pickup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ order: orderId }),
      }
    );

    return response.ok;
  } catch (error: any) {
    console.log(error.message);
  }
};
