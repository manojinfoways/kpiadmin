import { authRoles } from 'app/auth';
import {lazy} from "react";

const ExceptionReportConfig = {
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
            path: '/ptr/admin/exception-report/:id',
            component: lazy(() => import('./ExceptionReport')),
        },
    ],
};

export default ExceptionReportConfig;
