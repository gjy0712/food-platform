import Vue from 'vue'
import Router from 'vue-router'
import {getLocalStore} from "../utils/webstore-utils";
import {TOKEN} from "../config/webstore";

Vue.use(Router)

export const defaultRouterMap = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('../page/login'),
        meta: { title: '登录'},
    },
    {
        path: '/register',
        component: () => import('../page/register'),
        meta: { title: '注册'},
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
                path: '/menu/fenzr',
                component: () => import('../page/common/components/hot-menu/fenzr'),
                meta: { title: '粉蒸肉'},
            },
            {
                path: '/menu/pijiuya',
                component: () => import('../page/common/components/hot-menu/pijiuya'),
                meta: { title: '啤酒鸭'},
            },
            {
                path: '/menu/lihao',
                component: () => import('../page/common/components/hot-menu/lihao'),
                meta: { title: '黎蒿炒腊肉'},
            },
            {
                path: '/menu/oupian',
                component: () => import('../page/common/components/hot-menu/oupian'),
                meta: { title: '凉拌藕片'},
            },
            {
                path: '/menu/hugeng',
                component: () => import('../page/common/components/hot-menu/hugeng'),
                meta: { title: '糊羹'},
            },
            {
                path: '/menu/sugar',
                component: () => import('../page/common/components/hot-menu/sugar'),
                meta: { title: '白糖糕'},
            },
            {
                path: '/menu/chaofen',
                component: () => import('../page/common/components/hot-menu/chaofen'),
                meta: { title: '南昌炒粉'},
            },
            {
                path: '/menu/soup',
                component: () => import('../page/common/components/hot-menu/soup'),
                meta: { title: '瓦罐汤'},
            },
            {
                path: '/recommend/yudingxian',
                component: () => import('../page/common/components/hot-restaurant/yudingxian'),
                meta: { title: '裕鼎鲜'},
            },
            {
                path: '/recommend/weifuji',
                component: () => import('../page/common/components/hot-restaurant/weifuji'),
                meta: { title: '味福记'},
            },
            {
                path: '/recommend/taiyl',
                component: () => import('../page/common/components/hot-restaurant/taiyl'),
                meta: { title: '泰悦澜'},
            },
            {
                path: '/recommend/yin',
                component: () => import('../page/common/components/hot-restaurant/yin'),
                meta: { title: '隐餐厅'},
            },
            {
                path: '/recommend/dad',
                component: () => import('../page/common/components/hot-restaurant/dad'),
                meta: { title: '爸爸炒料'},
            },
            {
                path: '/specialSnack',
                component: () => import('../page/common/special-snack'),
                meta: { title: '特色小吃'},
            },
            {
                path: '/specialSnack2',
                component: () => import('../page/common/snack2'),
                meta: { title: '特色小吃2'},
            },
            {
                path: '/specialSnack3',
                component: () => import('../page/common/snack3'),
                meta: { title: '特色小吃3'},
            },
            {
                path: '/recommend',
                component: () => import('../page/common/recommend'),
                meta: { title: '推荐参馆'},
            },
            {
                path: '/recommend/jiuqi',
                component: () => import('../page/common/components/hot-restaurant/jiuqi'),
                meta: { title: '玖柒冰室'},
            },
            {
                path: '/recommend/linjia',
                component: () => import('../page/common/components/hot-restaurant/linjia'),
                meta: { title: '邻家小馆'},
            },
            {
                path: '/recommend/wao',
                component: () => import('../page/common/components/hot-restaurant/wao'),
                meta: { title: '哇哦炭烧牛蛙'},
            },
            {
                path: '/recommend/yitengjing',
                component: () => import('../page/common/components/hot-restaurant/yitengjing'),
                meta: { title: '伊藤静'},
            },
            {
                path: '/recommend/wendaoliu',
                component: () => import('../page/common/components/hot-restaurant/wendaoliu'),
                meta: { title: '文道留'},
            },
            {
                path: '/specialty',
                component: () => import('../page/common/specialty'),
                meta: { title: '特产'},
            },
            {
                path: '/menu',
                component: () => import('../page/common/foodMenu'),
                meta: { title: '菜谱'},
            },
            {
                path: '/menu/huajia',
                component: () => import('../page/common/components/hot-menu/huajia'),
                meta: { title: '辣炒花甲'},
            },
            {
                path: '/menu/cookie',
                component: () => import('../page/common/components/dessert/cookie'),
                meta: { title: '曲奇饼干'},
            },
            {
                path: '/menu/sofolei',
                component: () => import('../page/common/components/dessert/sofolei'),
                meta: { title: '舒芙蕾'},
            },
            {
                path: '/menu/maxiao',
                component: () => import('../page/common/components/dessert/sofolei'),
                meta: { title: '麻辣小龙虾'},
            },
            {
                path: '/menu/hongshaorou',
                component: () => import('../page/common/components/hot-menu/hongshaorou'),
                meta: { title: '红烧肉'},
            },
            {
                path: '/menu/cokejc',
                component: () => import('../page/common/components/hot-menu/cokejc'),
                meta: { title: '可乐鸡翅'},
            },
            {
                path: '/menu/huiguor',
                component: () => import('../page/common/components/hot-menu/huiguor'),
                meta: { title: '回锅肉'},
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