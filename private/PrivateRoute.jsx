import React, { useEffect, useContext } from "react";
import UserContext from "../context/userContext";
import { axiosInstance } from "../src/api";
import { toast } from "react-hot-toast";
import { CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { setData, setisConnected, isConnected } = useContext(UserContext);

  useEffect(() => {
    if (!isConnected) {
      axiosInstance
        .post("/customer/login/token")
        .then(({ data }) => {
          console.log(data);
          setisConnected(true);
          setData(data.data);
        })
        .catch((error) => {
          console.error("Customer not connected", error);
        });
    }
  }, []);

  if (!isConnected) return <CircularProgress />;
  return <Outlet />;
}
