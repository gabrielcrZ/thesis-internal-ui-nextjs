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

// export const LoginUser = async (clientCreds: credentials) => {
//   try {
//     const response: any = await fetch(
//       "http://localhost:3001/api/require-token",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(clientCreds),
//       }
//     );

//     const responseBody = await response.json();
//     if (!response.ok) throw new Error(responseBody.msg);

//     return responseBody.token;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

// export const getDashboardTable = async (pageNr: number) => {
//   try {
//     const response: any = await fetch(
//       "http://localhost:3001/api/get-dashboard-table-contents",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ pageNumber: pageNr }),
//       }
//     );

//     const responseBody = await response.json();
//     if (!response.ok) throw new Error(responseBody.msg);

//     return responseBody.data;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };