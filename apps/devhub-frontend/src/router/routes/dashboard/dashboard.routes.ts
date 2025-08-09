export const dashboardRoutes = [
    { path: '', name: 'profile', component: () => import("@/components/dashboard/profile/UserProfile.vue") },
    { path: 'mentors', name: 'mentors', component: () => import('@/components/dashboard/mentors/MyMentors.vue') },
    { path: 'students', name: 'students', component: () => import("@/components/dashboard/students/MyStudents.vue") },
    { path: 'groups', name: 'groups', component: () => import("@/components/dashboard/groups/MyGroups.vue") },
    { path: 'chats', name: 'chats', component: () => import("@/components/dashboard/chats/ChatsComponent.vue") },
    { path: 'github', name: 'github', component: () => import("@/components/dashboard/github-integration/GitHubIntegration.vue") }
]