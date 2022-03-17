import { Redirect } from "react-router-dom";
import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import Error404Page from "app/main/404/Error404Page";
import MainAdminDashboardConfig from "app/main/MainDashboard/Admin/MainAdminDashboardConfig";
import CreatePTRAdminConfig from "app/main/PTR/Admin/CreatePTRAdmin/CreatePTRAdminConfig";
import LogoutConfig from "app/main/Logout/LogoutConfig";
import SilentRenewConfig from "app/auth/SilentRenewConfig";
import ExceptionReportConfig from "app/main/PTR/Admin/ExceptionReport/ExceptionReportConfig";
import DocumentsInfoConfig from "app/main/PTR/Admin/DocumentsInfo/DocumentsInfoConfig";
import ChainOfTitleConfig from "app/main/PTR/Admin/ChainOfTitle/ChainOfTitleConfig";
import ResearchSummaryConfig from "app/main/PTR/Admin/ResearchSummary/ResearchSummaryConfig";
 
import NameCheckConfig from "app/main/PTR/Admin/NameCheck/NameCheckConfig";
import TaxInfoConfig from "app/main/PTR/Admin/TaxInfo/TaxInfoConfig";
import ChangePasswordConfig from "app/main/ChangePassword/ChangePasswordConfig";
import DocumentEditConfig from "app/main/PTR/Admin/DocumentEdit/DocumentEditConfig";
import SatisfactionConfig from "app/main/PTR/Admin/Satisfaction/SatisfactionConfig";
import AnalyticsConfig from "app/main/MainDashboard/Analytics/AnalyticsConfig";
  
const routeConfigs = [
  AnalyticsConfig,
  MainAdminDashboardConfig,
  LogoutConfig,
  SilentRenewConfig,
  CreatePTRAdminConfig,
  ExceptionReportConfig,
  DocumentsInfoConfig,
  ChainOfTitleConfig,
  ResearchSummaryConfig,
  NameCheckConfig,
  TaxInfoConfig,
  ChangePasswordConfig,
  DocumentEditConfig,
  SatisfactionConfig,
   
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: "/loading",
    exact: true,
    component: () => <FuseLoading />,
  },
  {
    path: "/404",
    component: () => <Error404Page />,
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

export default routes;
