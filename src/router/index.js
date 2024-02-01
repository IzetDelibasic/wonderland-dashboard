import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {

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