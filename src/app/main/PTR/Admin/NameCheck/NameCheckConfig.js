import { authRoles } from 'app/auth';
import {lazy} from "react";

const NameCheckConfig = {
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
            path: '/ptr/admin/name-check/:id',
            component: lazy(() => import('./NameCheck')),
        },
    ],
};

export default NameCheckConfig;