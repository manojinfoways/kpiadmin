import { authRoles } from 'app/auth';
import {lazy} from "react";

const SatisfactionConfig = {
    settings: {
        layout: {
            config: {
                footer: {
                    display: false,
                },
                rightSidePanel: {
                    display: false,
                }
            },
        },
    },
    auth: authRoles.admin,
    routes: [
        {
            path: '/ptr/admin/satisfaction/:id',
            component: lazy(() => import('./Satisfaction')),
        },
    ],
};

export default SatisfactionConfig;