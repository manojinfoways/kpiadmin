import { authRoles } from 'app/auth';
import {lazy} from "react";

const ResearchSummaryConfig = {
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
            path: '/ptr/admin/research-summary/:id',
            component: lazy(() => import('./ResearchSummary')),
        }
    ],
};

export default ResearchSummaryConfig;
