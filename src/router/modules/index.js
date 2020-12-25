const index = {
  path: '/',
  name: 'index',
  component: () => import('@/views/index'),
  children: [{
    name: 'mainOne',
    path: '/mainOne',
    meta: {
      title: 'MainOne'
    },
    component: () => import('@/views/MainOne')
  },
  {
    name: 'mainTwo',
    path: 'mainTwo',
    meta: {
      title: 'MainTwo'
    },
    component: () => import('@/views/MainTwo')
  }]
}
export default index
