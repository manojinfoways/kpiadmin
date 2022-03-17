import { authRoles } from 'app/auth';
import {lazy} from "react";

const ChainOfTitleConfig = {
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
            path: '/ptr/admin/chain-of-title/:id',
            component: lazy(() => import('./ChainOfTitle')),
        },
    ],
};

export default ChainOfTitleConfig;
