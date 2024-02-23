import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/homePage';
import DashboardPage from '../pages/master/dashboardPage';
import ProfilesPage from '../pages/profilesPage';

const routes = [
  {
    name: 'Dashboard Page',
    path: '/',
    component: DashboardPage,
  },
  {
    name: 'Home Page',
    path: '/home',
    component: HomePage,
  },
  {
    name: 'Profiles Page',
    path: '/profiles',
    component: ProfilesPage,
  },
  {
    name: 'Messages',
    path: '/messages',
    // component: Messages,
  },
  {
    name: 'Download Page',
    path: '/download',
    // component: Download,
  },
  {
    name: 'Settings Page',
    path: '/settings',
    // component: Settings,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
