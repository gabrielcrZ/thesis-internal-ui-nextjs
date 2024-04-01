"use client";
import React, { useState } from "react";

const Toast = (props: any) => {
  const [isCancelled, setIsCancelled] = useState(false);

  const handleDismiss = () => {
    setIsCancelled((prevState) => !prevState);
  };
  return (
    <>
      {!isCancelled && (
        <div className="toast toast-top toast-end opacity-70">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
            <button onClick={handleDismiss}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
