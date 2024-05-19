import React from "react";

const Stats = (props: any) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Orders</div>
        <div className="stat-value">{props.data.totalOrders / 1000}k</div>
        <div className="stat-desc">Jan 1st - Dec 31st</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Unprocessed Orders</div>
        <div className="stat-value">
          {props.data.unprocessedOrders.currentYear / 1000}k
        </div>
        <div className="stat-desc">{`${
          props.data.unprocessedOrders.absoluteIncrease > 0 ? "↗︎" : "↘︎"
        } ${props.data.unprocessedOrders.absoluteIncrease / 1000} (${
          props.data.unprocessedOrders.relativeIncrease
        }%)`}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Operational Costs</div>
        <div className="stat-value">
          {props.data.operationalCosts.currentYear / 1000}k
        </div>
        <div className="stat-desc">{`${
          props.data.operationalCosts.absoluteIncrease > 0 ? "↗︎" : "↘︎"
        } ${props.data.operationalCosts.absoluteIncrease / 1000}k (${
          props.data.operationalCosts.relativeIncrease
        }%)`}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Revenue</div>
        <div className="stat-value">
          {props.data.revenue.currentYear / 1000}k
        </div>
        <div className="stat-desc">{`${
          props.data.revenue.absoluteIncrease > 0 ? "↗︎" : "↘︎"
        } ${props.data.revenue.absoluteIncrease / 1000}k (${
          props.data.revenue.relativeIncrease
        }%)`}</div>
      </div>
    </div>
  );
};

export default Stats;
