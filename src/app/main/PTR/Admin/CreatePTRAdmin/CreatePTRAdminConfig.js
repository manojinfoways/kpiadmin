import { authRoles } from 'app/auth';
import {lazy} from "react";

const CreatePTRConfig = {
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
            path: '/ptr/admin/create',
            component: lazy(() => import('./CreatePTRAdmin')),
        },
    ],
};

export default CreatePTRConfig;
