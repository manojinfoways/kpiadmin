import { authRoles } from 'app/auth';
import {lazy} from "react";

const TaxInfoConfig = {
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
            path: '/ptr/admin/tax-info/:id',
            component: lazy(() => import('./TaxInfo')),
        },
    ],
};

export default TaxInfoConfig;
