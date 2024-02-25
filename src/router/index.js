// -Router-
import { createRouter, createWebHistory } from "vue-router";
// -Pages-
import HomePage from '@/pages/HomePage';
import DashboardPage from '@/pages/master/DashboardPage';
import HistoryPage from '@/pages/HistoryPage';
import QuizPage from '@/pages/QuizPage';
import FilmsSeries from '@/pages/FilmsSeries';
import DisneyMoments from '@/pages/DisneyMoments';

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
    name: 'Films & Series',
    path: '/films-series',
    component: FilmsSeries,
  },
  {
    name: 'Disney Moments',
    path: '/disney-moments',
    component: DisneyMoments,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
