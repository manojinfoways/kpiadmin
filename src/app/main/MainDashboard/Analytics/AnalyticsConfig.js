import { authRoles } from 'app/auth';
import {lazy} from "react";

const AnalyticsConfig = {
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
    auth: authRoles.admin,
    routes: [
        {
            path: '/admin/analytics',
            component: lazy(() => import('./Analytics')),
        },
        {
            path: '/admin/kpi_analytics',
            component: lazy(() => import('./KPIAnalytics')),
        },
        {
            path: '/admin/sankey',
            component: lazy(() => import('./SankeyAnalytics')),
        },
        {
            path: '/admin/depend',
            component: lazy(() => import('./DependancyAnalytics')),
        },
        
    ],
};

export default AnalyticsConfig;
