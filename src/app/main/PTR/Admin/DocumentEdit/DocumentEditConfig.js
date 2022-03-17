import { authRoles } from 'app/auth';
import {lazy} from "react";

const DocumentEditConfig = {
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
            path: '/ptr/admin/document-edit/:id',
            component: lazy(() => import('./DocumentEdit')),
        }
    ],
};

export default DocumentEditConfig;
