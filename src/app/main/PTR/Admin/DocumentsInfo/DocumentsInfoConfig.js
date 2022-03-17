import { authRoles } from 'app/auth';
import {lazy} from "react";

const DocumentsInfoConfig = {
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
            path: '/ptr/admin/documents-info/:id',
            component: lazy(() => import('./DocumentsInfo')),
        }
    ],
};

export default DocumentsInfoConfig;
