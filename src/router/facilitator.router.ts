

export const facilitatorRouter = [
    {
        path: '/logout',
        component: () => import('../pages/facilitator/logout.vue'),
    },
    {
        path: '/account',
        component: () => import('../pages/facilitator/account.vue'),
    },
    {
        path: '/chating',
        component: () => import('../pages/facilitator/chating.vue'),
    },
    {
        path: '/mycourse',
        component: () => import('../pages/facilitator/mycourse.vue'),
    },
    {
        path: '/materialcourse',
        component: () => import('../pages/facilitator/materialcourse.vue'),
    },
    {
        path: '/course',
        component: () => import('../pages/facilitator/course.vue'),
    },
    {
        path: '/addcoursedesc',
        component: () => import('../pages/facilitator/addcoursedesc.vue'),
    },
    {
        path: '/addcoursematerial',
        component: () => import('../pages/facilitator/addcoursematerial.vue'),
    },
    {
        path: '/addcoursepublish',
        component: () => import('../pages/facilitator/addcoursepublish.vue'),
    },
    {
        path: '/desc',
        component: () => import('../pages/facilitator/desc.vue'),
    },
    {
        path: '/annoucement',
        component: () => import('../pages/facilitator/annoucement.vue'),
    },
    {
        path: '/assignment',
        component: () => import('../pages/facilitator/assignment.vue'),
    },
    {
        path: '/assigninstruction',
        component: () => import('../pages/facilitator/assigninstruction.vue'),
    },
    {
        path: '/assignparticipant',
        component: () => import('../pages/facilitator/assignparticipant.vue'),
    },
    {
        path: '/assignreport',
        component: () => import('../pages/facilitator/assignreport.vue'),
    },
    {
        path: '/addassignment',
        component: () => import('../pages/facilitator/addassignment.vue'),
    },
    {
        path: '/assignsubreport',
        component: () => import('../pages/facilitator/assignsubreport.vue'),
    },
];