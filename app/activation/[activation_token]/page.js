"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Activation({ params }) {
  const { activation_token } = params;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activateEmail = async () => {
        try {
          const res = await axios.post(
            `${process.env.SERVER}/user/activation`,
            {
              activation_token,
            }
          );

          toast.success(res.data.message);
        } catch (error) {
          setError(true);
          toast.error(error.response.data.message);
        }
      };

      activateEmail();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token has been expired</p>
      ) : (
        <p>Your account has been created successfully.</p>
      )}
    </div>
  );
}
