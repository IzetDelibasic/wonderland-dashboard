import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/master/dashboardPage';
import HistoryPage from '../pages/HistoryPage';
import QuizPage from '@/pages/QuizPage'

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
    name: 'History Page',
    path: '/history',
    component: HistoryPage,
  },
  {
    name: 'Quiz Page',
    path: '/quiz',
    component: QuizPage,
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
