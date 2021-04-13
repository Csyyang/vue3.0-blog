export default  [
    {
        path: '/posterior/login',
        name: 'PosteriorLogin',
        component: () => import('@/views/posteriorCanal/login')
    },
    {
        path: '/posterior/index',
        name: 'PosteriorIndex',
        component: () => import('@/views/posteriorCanal/index')
    },
    
]