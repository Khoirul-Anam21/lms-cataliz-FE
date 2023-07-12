export const participantRouter = [
    {
        path: "courses",
        component: () => import("../pages/common/BaseRouterView.vue"),
        children: [
            {
                path: '',
                name: 'participant-all-courses',
                component: () => import("../pages/common/Courses.vue")
            },
            {
                path: 'courses/:title',
                name: 'participant-all-course-detail',
                component: () => import("../pages/common/CourseDetail.vue")
            }
        ]
    },
    {
        path: 'dashboard',
        component: ()=> import('../pages/participant/DashboardParticipant.vue'),
        name: 'participant-dashboard',
    },
    {
        path: 'account',
        name: 'participant-account',
        component: () => import('../pages/common/account.vue'),
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
