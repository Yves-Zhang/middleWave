import { AsyncComponent } from 'spaassy-redux'
let AsyncComp = AsyncComponent()

const routers = [
    {
        path: '/',
        exact: true,
        component: AsyncComp(() => import('@views/home/Manage'))
    },
    {
        path: '/H5page',
        component: AsyncComp(() => import('@views/home/H5page'))
    }
]

export default routers