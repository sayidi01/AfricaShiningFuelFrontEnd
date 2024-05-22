import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function PublicRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [pathname]);

  return <Outlet />;
}
