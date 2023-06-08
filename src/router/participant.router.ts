export const participantRouter = [
    {
        path: 'dashboard',
        component: ()=> import('../pages/participant/DashboardParticipant.vue'),
        name: 'participant-dashboard',
    },
    {
        path: 'mycourse',
        name: 'std-course',
        component: () => import('../pages/participant/MyCourse.vue'),
    },
    {
        path: 'mycourse/:title',
        component: () => import('../pages/common/BaseRouterView.vue'),
        children: [
            {
                path: '',
                name: 'std-course-detail',
                component: () => import("../pages/common/CourseDetail.vue")
            },
            {
                path: 'materials',
                name: 'std-materials',
                component: () => import("../pages/common/CourseContents.vue")
            },
            {
                path: 'materials/:id',
                name: 'std-material-detail',
                component: () => import("../pages/common/CourseContentDetail.vue")
            }
        ]
    },
];
