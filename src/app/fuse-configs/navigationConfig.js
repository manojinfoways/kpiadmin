import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";
import { authRoles } from "app/auth";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "Analytics",
    title: "Analytics",
    translate: "Analytics",
    type: "collapse",
    auth: [...authRoles.admin],
    icon: "description",
    children: [
      {
        id: "State Analytics",
        title: "Statistical Analytics",
        translate: "Statistical Analytics",
        auth: [...authRoles.admin],
        type: "item",
        url: "/admin/analytics",
      },
      {
        id: 'KPI Analytics',
        title: 'KPI Analytics',
        translate: 'KPI Analytics',
        auth: [...authRoles.admin],
        type: 'item',
        url: '/admin/kpi_analytics',
      },
      {
        id: 'Sankey Analysis',
        title: 'Sankey Analysis',
        translate: 'Sankey Analysis',
        auth: [...authRoles.admin],
        type: 'item',
        url: '/admin/sankey',
      },
      // {
      //   id: 'Dependancy Analysis',
      //   title: 'Dependancy Analysis',
      //   translate: 'Dependancy Analysis',
      //   auth: [...authRoles.admin],
      //   type: 'item',
      //   url: '/admin/depend',
      // }
    ],
  }
];

export default navigationConfig;
