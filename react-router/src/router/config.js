import Layout from '../views/layout/layout';

import A from '../views/pages/a';
import B from '../views/pages/b';
import Login from '../views/pages/login';

const router = [
  {
    path: '/',
    name: "Login",
    auto: false,
    component: Login,
  },{
    redirect: '/Layout',
    path: '/Layout',
    component: Layout,
    name: "Layout",
    auto: true,
    children: [
      {
        path: "/Layout/A",
        name: "介绍",
        auto: true,
        component: A,
      }, {
        path: "/Layout/B",
        name: "设计原则",
        auto: true,
        component: B,
      }
    ]
  }
]

export default router;