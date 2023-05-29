

export const facilitatorRouter = [

    {
        path: 'account',
        component: () => import('../pages/facilitator/account.vue'),
    },
    {
        path: 'chating',
        component: () => import('../pages/facilitator/chating.vue'),
    },
    {
        path: 'mycourse',
        component: () => import('../pages/facilitator/mycourse.vue'),
        name: 'courses',
        meta: { title: 'My Course' }
    },
    {
        path: 'mycourse/:title',
        component: () => import("../pages/facilitator/BaseRouterView.vue"),
        children: [
            {
                path: "",
                component: () => import("../pages/facilitator/course.vue"),
                name: 'course-detail',
                meta: { title: 'Course Detail' }

            },
            {
                path: "materials",
                component: () => import("../pages/facilitator/materialcourse.vue"),
                name: 'materials',
                meta: { title: 'Course Contents' }
            },
            {
                path: "materials/:id",
                component: () => import("../pages/facilitator/CourseMaterialDetail.vue"),
                name: 'material-detail',
                meta: { title: 'Content Details' }
            }
        ]
    },
    {
        path: "course-add",
        component: () => import("../pages/facilitator/BaseRouterView.vue"),
        children: [
            {
                path: '',
                component: () => import('../pages/facilitator/addcoursedesc.vue'),
                name: 'course-add',
                meta: { title: 'Add new course' }
            },
            {
                path: 'material-add',
                component: () => import('../pages/facilitator/addcoursematerial.vue'),
                name: 'material-add',
                meta: { title: 'Add content materials' }
            },
            {
                path: 'course-publish',
                component: () => import('../pages/facilitator/addcoursepublish.vue'),
                name: 'course-publish',
                meta: { title: 'Publish course' }
            },
        ]
    },
    {
        path: 'assignments/:id',
        component: () => import('../pages/facilitator/BaseRouterView.vue'),
        children: [
            {
                path: '',
                component: () => import('../pages/facilitator/AssignmentDetail.vue'),
                name: 'assignment-detail',
                meta: { title: 'Assignment Info' }
            },
            {
                path: 'submissions/:submitId',
                component: () => import("../pages/facilitator/assignsubreport.vue"),
                name: 'submission-detail',
                meta: { title: 'Submission Info' }
            }
        ]
    },
];