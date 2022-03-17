import { authRoles } from "app/auth";
import { lazy } from "react";

const MainDashboardNewConfig = {
  settings: {
    layout: {
      config: {
        footer: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: "/dashboard",
      component: lazy(() => import("./MainDashboardNew")),
    },
  ],
};

export default MainDashboardNewConfig;
