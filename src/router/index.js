import Vue from 'vue'
import Router from 'vue-router'
import {getLocalStore} from "../utils/webstore-utils";
import {TOKEN} from "../config/webstore";

Vue.use(Router)

export const defaultRouterMap = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('../components/food-main'),
        meta: { title: '首页'},
        children: [
            {
                path: '/index',
                component: () => import('../page/common/index'),
                meta: { title: '首页'},
            },
            {
                path: '/index/fenzr',
                component: () => import('../page/common/components/hot-menu/fenzr'),
                meta: { title: '粉蒸肉'},
            },
            {
                path: '/index/pijiuya',
                component: () => import('../page/common/components/hot-menu/pijiuya'),
                meta: { title: '啤酒鸭'},
            },
            {
                path: '/index/lihao',
                component: () => import('../page/common/components/hot-menu/lihao'),
                meta: { title: '黎蒿炒腊肉'},
            },
            {
                path: '/index/oupian',
                component: () => import('../page/common/components/hot-menu/oupian'),
                meta: { title: '凉拌藕片'},
            },
            {
                path: '/index/hugeng',
                component: () => import('../page/common/components/hot-menu/hugeng'),
                meta: { title: '糊羹'},
            },
            {
                path: '/index/sugar',
                component: () => import('../page/common/components/hot-menu/sugar'),
                meta: { title: '白糖糕'},
            },
            {
                path: '/index/chaofen',
                component: () => import('../page/common/components/hot-menu/chaofen'),
                meta: { title: '南昌炒粉'},
            },
            {
                path: '/index/soup',
                component: () => import('../page/common/components/hot-menu/soup'),
                meta: { title: '瓦罐汤'},
            },
            {
                path: '/index/yudingxian',
                component: () => import('../page/common/components/hot-restaurant/yudingxian'),
                meta: { title: '裕鼎鲜'},
            },
            {
                path: '/index/weifuji',
                component: () => import('../page/common/components/hot-restaurant/weifuji'),
                meta: { title: '味福记'},
            },
            {
                path: '/index/taiyl',
                component: () => import('../page/common/components/hot-restaurant/taiyl'),
                meta: { title: '泰悦澜'},
            },
            {
                path: '/index/yin',
                component: () => import('../page/common/components/hot-restaurant/yin'),
                meta: { title: '隐餐厅'},
            },
            {
                path: '/index/dad',
                component: () => import('../page/common/components/hot-restaurant/dad'),
                meta: { title: '爸爸炒料'},
            },
            {
                path: '/specialSnack',
                component: () => import('../page/common/special-snack'),
                meta: { title: '特色小吃'},
            },
            {
                path: '/recommend',
                component: () => import('../page/common/recommend'),
                meta: { title: '推荐参馆'},
            },
            {
                path: '/specialty',
                component: () => import('../page/common/specialty'),
                meta: { title: '特产'},
            },
            {
                path: '/menu',
                component: () => import('../page/common/menu'),
                meta: { title: '菜谱'},
            },
            {
                path: '/topic',
                component: () => import('../page/common/topic'),
                meta: { title: '吃货话题专区'},
            }
        ]
    }

]

const router = new Router({
    routes: defaultRouterMap,
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return {x:0,y:0}
        }
    },

})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = getLocalStore(TOKEN)
        if (token === 'null' || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});

export default router