"use server";
export const getDashboardMetrics = async () => {
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
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export const getDashboardTableInfo = async () => {
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
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
