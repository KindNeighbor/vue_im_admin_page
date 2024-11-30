// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import UserManagement from '../views/UserManagement.vue'
import DepartmentManagement from '../views/DepartmentManagement.vue'
import GroupManagement from '../views/GroupManagement.vue'
import RoleManagement from "@/views/RoleManagement.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/users',
        component: UserManagement
    },
    {
        path: '/departments',
        component: DepartmentManagement
    },
    {
        path: '/groups',
        component: GroupManagement
    },
    {
        path: '/roles',
        component: RoleManagement
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router