import { createRouter, createWebHashHistory } from 'vue-router';
import PageFormParser from '@/pages/PageFormParser';
import PageTasks from '@/pages/PageTasks';
import PageTaskInfo from '@/pages/PageTaskInfo';

const routes = [
    {
        path: '/',
        name: 'Form',
        component: PageFormParser,
    },
    {
        path: '/task/:id',
        name: 'Task',
        component: PageTaskInfo,
    },
    {
        path: '/tasks',
        name: 'Tasks',
        component: PageTasks,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
