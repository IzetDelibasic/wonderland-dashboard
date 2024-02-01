// - Router -
import { createRouter, createWebHistory } from "vue-router";
// - Imports -
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
  }
]


const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}