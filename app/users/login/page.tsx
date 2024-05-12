"use client";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { credentials, loginErrors } from "@/app/components/types/Types";

const Login = () => {
  const router = useRouter();
  const [loginErrors, setLoginErrors] = useState<loginErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [clientCreds, setClientCreds] = useState<credentials>({});
  const [showValidation, setShowValidation] = useState(false);

  const checkCredentials = () => {
    if (isFormValid) {
      router.push("/");
    } else setShowValidation(true);
  };

  useEffect(() => {
    validateForm();
  }, [clientCreds]);

  const validateForm = () => {
    let errors: any = {};

    if (!clientCreds.email) {
      errors.emailError = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(clientCreds.email)) {
      errors.emailError = "Email is invalid!";
    }

    if (!clientCreds.password) {
      errors.passwordError = "Password is required!";
    }

    setLoginErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-gray-500">
            <h1 className="text-5xl font-bold text-info">Login now!</h1>
            <p className="py-6 font-medium">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-gray-500 font-medium">
            <form className="card-body" method="post">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  value={clientCreds.email || ""}
                  onChange={(e) => {
                    setClientCreds({
                      email: e.target.value,
                      password: clientCreds.password,
                    });
                  }}
                />
                {loginErrors.emailError && showValidation && (
                  <label className="label text-sm text-red-500 font-bold">
                    {loginErrors.emailError}
                  </label>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  value={clientCreds.password || ""}
                  onChange={(e) => {
                    setClientCreds({
                      email: clientCreds.email,
                      password: e.target.value,
                    });
                  }}
                />
                {loginErrors.passwordError && showValidation && (
                  <label className="label text-sm text-red-500 font-bold">
                    {loginErrors.passwordError}
                  </label>
                )}
              </div>
              <button
                className="btn btn-info"
                onClick={(e) => {
                  e.preventDefault();
                  checkCredentials();
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
