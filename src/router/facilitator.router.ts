export const facilitatorRouter = [
    {
        path: "courses",
        component: () => import("../pages/common/BaseRouterView.vue"),
        children: [
            {
                path: '',
                name: 'facil-all-courses',
                component: () => import("../pages/common/Courses.vue")
            },
            {
                path: 'courses/:title',
                name: 'facil-all-course-detail',
                component: () => import("../pages/common/CourseDetail.vue")
            }
        ]
    },
    {
        path: 'dashboard',
        component: () => import('../pages/facilitator/DashboardFacil.vue'),
        name: 'facil-dashboard'
    },
    {
        path: 'account',
        name: 'facil-account',
        component: () => import('../pages/common/account.vue'),
    },
    {
        path: 'chats',
        component: () => import('../pages/facilitator/Chats.vue'),
        name: 'chats'
    },
    {
        path: 'chats/:id',
        component: () => import('../pages/facilitator/ChatingDetail.vue'),
        name: 'chat-detail'
    },
    {
        path: 'mycourse',
        component: () => import('../pages/facilitator/mycourse.vue'),
        name: 'facil-courses',
        meta: { title: 'My Course' }
    },
    {
        path: 'mycourse/:title',
        component: () => import("../pages/common/BaseRouterView.vue"),
        children: [
            {
                path: "",
                component: () => import("../pages/facilitator/Course.vue"),
                name: 'facil-course-detail',
                meta: { title: 'Course Detail' }

            },
            {
                path: "edit",
                component: () => import("../pages/facilitator/EditCourse.vue"),
                name: 'course-edit',
                meta: { title: 'Edit Course' }

            },
            {
                path: "materials",
                component: () => import("../pages/common/CourseContents.vue"),
                name: 'facil-materials',
                meta: { title: 'Course Contents' }
            },
            {
                path: "materials/edit",
                component: () => import("../pages/common/BaseRouterView.vue"),
                children: [
                    {
                        path: "",
                        name: 'material-edit',
                        component: () => import("../pages/facilitator/EditCourseContentList.vue"),
                        meta: { title: 'Edit Course Content' }

                    },
                    {
                        path: ":id",
                        name: 'material-edit-detail',
                        component: () => import("../pages/facilitator/EditCourseContentDetail.vue"),
                        meta: { title: 'Edit Course Content' }
                    }
                ]
            },
            {
                path: "materials/:id",
                component: () => import("../pages/common/CourseContentDetail.vue"),
                name: 'facil-material-detail',
                meta: { title: 'Content Details' }
            },
        ]
    },
    {
        path: "course-add",
        component: () => import("../pages/common/BaseRouterView.vue"),
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
        path: 'assignments/new',
        component: () => import('../pages/facilitator/addassignment.vue'),
        name: 'assignment-add'
    },
    {
        path: 'assignments/:id',
        component: () => import('../pages/common/BaseRouterView.vue'),
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